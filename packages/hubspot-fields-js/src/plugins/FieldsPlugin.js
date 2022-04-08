const fs = require('fs');
const glob = require('glob');
const path = require('path'); // Use path to ensure files are resolved correctly across all OS

const {
	getFilesToTransform,
	transformDataToJsonFromJsFile,
	writeJsonToFile,
	clearFileFromCache
} = require('../lib/FieldTransformer');
const pluginName = 'FieldsPlugin';

class FieldsPlugin {

	constructor(options = {}) {
		this.options = Object.assign({
			src: "",
			extraDirsToWatch: [],
			ignore: []
		}, options);

		// Set for Later
		this.modifiedFiles = []
		this.foldersToIgnore = []
		this.directoriesToWatch = []
	}

	listExtraDirectoriesToWatch({ baseDirPath }) {
		let toWatch = []
		// Get from options
		let watchDirs = this.options.extraDirsToWatch
		watchDirs = Array.isArray(watchDirs) ? watchDirs : watchDirs.split(',')
		// Return
		watchDirs
			.forEach(context => { toWatch.push(path.resolve(baseDirPath, context)) })
		return [... new Set(toWatch.filter(d => !!d))]
	}

	listFoldersToIgnore({ baseDirPath }) {
		let ignore = []
		// Get from options
		let ignoreDirs = this.options.ignore
		ignoreDirs = Array.isArray(ignoreDirs) ? ignoreDirs : ignoreDirs.split(',')
		// Return
		ignoreDirs
			.concat(['./dist/**', './node_modules/**'])
			.forEach(context => { ignore.push(path.resolve(baseDirPath, context)) })
		return [... new Set(ignore.filter(d => !!d))]
	}

	clearFieldsJson(compilation) {
		return new Promise(async (resolve, reject) => {
			let distFolder = compilation.options.output.path;
			glob.sync(`${distFolder}/**/*fields.json`, {})
				.forEach(file => fs.unlinkSync(file))
			resolve();
		});
	}

	stopJsUploadToHubspot(compilation, { JsDistRelativePath, JsonDistRelativePath, JsonDistFullPath }) {
		// Handle it now so fields.js is not uploaded to HubSpot because hsAutouploadPlugin looks for this to be emitted: true in order to upload
		delete compilation.assets[JsDistRelativePath];
		// Add in the newly created json into assets so hubSpot will report it
		compilation.assets[JsonDistRelativePath] = {
			size: function () { return Buffer.byteLength(JsonDistFullPath) },
			source: function () { return Buffer.from(JsonDistFullPath) },
			existsAt: JsonDistFullPath,
			emitted: true
		}
		// remove fields.js from emittedAssets Set
		compilation.emittedAssets.delete(JsDistRelativePath)
		// add json version to emittedAssets set. Functionally tricks AutoUplaoder into thinking that this file was updated as part of the actual webpack process
		compilation.emittedAssets.add(JsonDistRelativePath)
	}

	async apply(compiler) {

		// Set 
		let isFirstCompile = true
		this.foldersToIgnore = this.listFoldersToIgnore({ baseDirPath: compiler.context })
		this.directoriesToWatch = this.listExtraDirectoriesToWatch({ baseDirPath: compiler.context })

		// Clear out any old fields.json files before compiler runs.
		// This is to ensure that we dont end up with duplicate fields.
		compiler.hooks.run.tapPromise(pluginName, this.clearFieldsJson);
		compiler.hooks.watchRun.tapPromise(pluginName, this.clearFieldsJson);
		compiler.hooks.emit.tapPromise(pluginName, this.clearFieldsJson);

		// When watching, update the modie
		compiler.hooks.watchRun.tap(pluginName, compilation => {
			this.modifiedFiles = compilation.modifiedFiles ? Array.from(compilation.modifiedFiles) : [];
		});

		// Set Extra directories to watch
		compiler.hooks.afterCompile.tap(pluginName, compilation => {
			this.directoriesToWatch.forEach(dir => { compilation.contextDependencies.add(dir) })
		})

		// Transform the fields.json
		compiler.hooks.afterEmit.tapPromise(pluginName, async compilation => {
			//
			const webpackLogger = compiler.getInfrastructureLogger(pluginName);
			const webpackRoot = compilation.options.context
			const srcFolder = path.resolve(webpackRoot, this.options.src);
			const distFolder = compilation.options.output.path;

			// Handle fields.js file
			return await new Promise((resolve, reject) => {

				// Get Files
				let files = getFilesToTransform({
					pathToDir: srcFolder,
					ignore: this.foldersToIgnore
				})

				// Find every modules fields.js file.
				files.forEach(JsSrcFullPath => {
					try {
						
						// Get the module path for matching
						let fileUniqueKey = JsSrcFullPath.split("/").slice(-2).join('/');
						// Get the path from the DIST folder for the asset
						let JsDistRelativePath = Object.keys(compilation.assets).find(a => a.endsWith(fileUniqueKey)) || ''
						// If JS file was found in the emitted assets then we should handle it for webpack 
						let fileWasEmitted = (Array.from(compilation.emittedAssets).indexOf(JsDistRelativePath) > -1)
						let shouldTransform = fileWasEmitted || isFirstCompile;

						// Check if a file in one of our additional directories was modified
						if (!shouldTransform) {
							shouldTransform = this.modifiedFiles.some(path => (this.directoriesToWatch.indexOf(path) > -1))
							if (!shouldTransform) { return; }
						}

						// Use the Logger interface like HubSpot
						webpackLogger.info(`FieldsJS is tranforming ${path.relative(srcFolder, JsSrcFullPath)}`);

						// Transform
						let fieldsJson = transformDataToJsonFromJsFile(JsSrcFullPath)
						// Get path for json file in dis
						let JsonDistRelativePath = JsDistRelativePath.replace('fields.js', 'fields.json');
						let JsonDistFullPath = path.resolve(distFolder, './' + JsonDistRelativePath);
						//
						writeJsonToFile(JsonDistFullPath, fieldsJson)

						// Stop Js from Uploading
						this.stopJsUploadToHubspot(compilation, {
							JsDistRelativePath,
							JsonDistRelativePath,
							JsonDistFullPath
						})

						// Remove field.js file from dist directory.
						let JsDistFullPath = path.resolve(distFolder, './' + JsDistRelativePath);
						(fs.existsSync(JsDistFullPath) ? fs.unlinkSync(JsDistFullPath) : null);

						// remove fields.js from cache so it will reupload on future watch saves
						clearFileFromCache(JsSrcFullPath)

					} catch (e) {
						clearFileFromCache(JsSrcFullPath);
						console.log("Could not transform: " + JsSrcFullPath + "\nError: " + e.message);
					}
				})

				isFirstCompile = false
				resolve();
			});

		});
	}
}

module.exports = FieldsPlugin;