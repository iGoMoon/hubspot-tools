const path = require('path');

class MixHubspot {

	name() { return ['hubspot']; }
	
	dependencies() {
		return [
			'copy-webpack-plugin@^8.1.1',
			'@hubspot/webpack-cms-plugins/HubSpotAutoUploadPlugin@^3.0.9',
			'@igomoon/hubspot-fields-js@^1.2.0',
			'webpack-build-notifier@^2.1.1'
		];
	}
	
	register(options = {}) {
		this.passedOptions = Object.assign({}, this.options.interface, options)
	}

	boot() {
		if (!!this.Notifications) {
			this.context.config.notifications = false;
		}
	}

	webpackPlugins() {
		let pluginsList = [
			(!!this.Notifications ? this.components.UseCustomWebpackNotifier() : false),
			(!!this.Upload ? this.components.UseHubspotAutoUploader() : false),
			(!!this.FieldsJs ? this.components.UseFieldsJs() : false)
		]
		let pluginsToUse = []
		pluginsList
			.filter(p => !!p)
			.forEach(p => {
				pluginsToUse = pluginsToUse.concat((Array.isArray(p) ? p : [p]))
			})
		return pluginsToUse
	}

	webpackConfig(webpackConfig) {
		// Upload
		let upload = this.Upload
		if (!!upload.outputFolder && !!upload.dest) {
			// Change Dist Folder
			webpackConfig.output.path = path.resolve(this.context.paths.rootPath,this.Upload.outputFolder)
			// Change Logger Interface level
			if (this.isAutoUpload) {
				webpackConfig.infrastructureLogging = { level: 'info' }	
			}
		}

		// Disable Mix Table
		if (this.DisableMixTable) {
			this.components.DisableMixTableOutput(webpackConfig)
		}
	}

	options = {
		interface: {
			Label: '',
			Upload: {},
			FieldsJs: false,
			Notifications: {},
			DisableMixTable : true
		},
		
		get: (key) => {
			return !!key ? this.options.data[key] : this.options.data
		},

		component: ( key = '', defaults = null) => {
			if (!key || this.options.interface[key] == undefined) {
				return null;
			}
			let passed = this.passedOptions[key]
			if (typeof passed == 'boolean') {
				if (!passed) {
					return false
				}
				passed = defaults
			}
			return (typeof passed != 'object') ? passed : Object.assign({}, defaults, passed)
		}
	}

	components = {
		
		UseFieldsJs: () => {
			const { FieldsPlugin } = require(this.context.resolve('@igomoon/hubspot-fields-js'));
			return new FieldsPlugin(this.FieldsJs)
		},
		
		UseHubspotAutoUploader: () => {
			let options = this.Upload
			if (!Array.isArray(options.patterns) || !options.patterns.length) {
				return false
			}

			const CopyWebpackPlugin = require(this.context.resolve('copy-webpack-plugin'));
			const HubSpotAutoUploadPlugin = require(this.context.resolve('@hubspot/webpack-cms-plugins/HubSpotAutoUploadPlugin'));

			let plugins = [
				// Copy Webpack
				new CopyWebpackPlugin({ patterns: options.patterns })			
			]
			
			if (!!options.outputFolder && !!options.dest) {
				plugins = plugins.concat([
					// Upload
					new HubSpotAutoUploadPlugin({
						autoupload: this.isAutoUpload,
						src:  path.resolve(this.context.paths.rootPath,this.Upload.outputFolder),
						dest:  this.Upload.dest,
					}),
					// Removes leading slashes from the assets to avoid upload errors
					{
						apply(compiler) {
							compiler.hooks.afterEmit.tapPromise('HS-MIX-FIX', async compilation => {
								Object.entries(compilation.assets).forEach(([path, data]) => {
									if (path.substring(0, 1) !== '/') { return }
									let newPath = path.substring(1)
									delete compilation.assets[path]
									compilation.assets[newPath] = data
								})
							})
						}
					}
				])
			}
			return plugins
		},
		
		UseCustomWebpackNotifier: () => {
			const WebpackBuildNotifierPlugin = require(this.context.resolve('webpack-build-notifier'));
			return new WebpackBuildNotifierPlugin(this.Notifications)
		},
		
		DisableMixTableOutput: (config) => {
			let BuildOutputPlugin = require(this.context.resolve('laravel-mix/src/webpackPlugins/BuildOutputPlugin'));
			config.plugins = config.plugins.filter(p => !(p instanceof BuildOutputPlugin))
		}
	}

	get Label() {
		return this.options.component('Label') || ''
	}
	
	get Upload() {
		return this.options.component('Upload',{
			outputFolder: 'dist',
			patterns: [],
			dest: ""
		})
	}
	
	get FieldsJs() {
		return this.options.component('FieldsJs', false)
	}

	get Notifications() {
		return this.options.component('Notifications',{
			title: this.Label || "Dist Folder",
			suppressWarning: true,
			showDuration: true,
			successSound: !this.context.isWatching() ? 'fog' : false
		})
	}

	get DisableMixTable() {
		return !!this.options.component('DisableMixTable')
	}
	
	get isAutoUpload() {
		return process.argv.some(arg =>
			arg.includes('hsAutoUpload=true')
		);
	}

	get context() {
		return global.Mix;
	}

	helpers = {
		merge : (target, source) => {
			for (const key of Object.keys(source)) {
				if (source[key] instanceof Object) Object.assign(source[key], this.helpers.merge(target[key], source[key]))
			}
			Object.assign(target || {}, source)
			return target
		}
	}

}

module.exports = MixHubspot