const fs = require('fs');
const path = require('path');
const chalk = require('chalk');

const FieldTransformer = require('@igomoon/hubspot-fields-js/src/fields/FieldTransformer');
const { getBasename, getAbsoluteFilePath } = require('./path');

// action => action from watcher (add, change, unlink, unlinkDir)
// filepath => path of file affected
const maybeTransformFile = (srcPath, filepath) => {
	if (ignoreFile(filepath)) { return; }

	let relative = path.relative(srcPath, filepath)
	if (transformFileToJson(filepath)) {
		console.log(chalk.green(`Transformed ${relative} > fields.json successfully.`))
	}
}

const transformFileToJson = (filepath) => {
	// Handle fields.js file
	try {
		let filepathJson = filepath + 'on'
		// Delete current json first
		if (fs.existsSync(filepathJson)) {
			fs.unlinkSync(filepathJson);
		}
		// Delete cache
		delete require.cache[require.resolve(filepath)];
		// Get fields.js
		let fields = {}
		try {
			fields = require(filepath);
		} catch (e) {
			throw e.message
		}
		// Transform to Json and append to fields.json file
		FieldTransformer.transform(filepathJson, fields);
		// Return
		return true
	} catch (e) {
		console.log(chalk.red(`Could not transform: ${filepath}`))
		// Msg
		let msg = !!e.message || e
		if(msg) {console.log(chalk.yellow(`Error: ${msg}`))}
		return false
	}
}

const ignoreFile = (filepath) => {
	let relative = getAbsoluteFilePath(filepath);
	let basename = getBasename(relative);
	return (basename !== 'fields.js')
}

module.exports = {
	maybeTransformFile,
	transformFileToJson,
	ignoreFile
};
