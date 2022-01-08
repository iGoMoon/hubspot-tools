const { maybeTransformFile } = require('../lib/transform');
const glob = require('glob');
const { checkSrcDirectory } = require('../lib/path');

exports.command = 'parse <src>';

exports.describe = 'Scan a directory on your computer and transform the fields.js files to fields.json';

exports.handler = async options => {
	const { src } = options;

	let absoluteSrcPath = checkSrcDirectory(src)
	if (!absoluteSrcPath) { return; }

	glob(absoluteSrcPath + '/**/fields.js', {}, (err, files) => {
		files.forEach(filepath => {
			maybeTransformFile(absoluteSrcPath,filepath)
		})
	})
}

exports.builder = yargs => {

	yargs.positional('src', {
		describe:
			'Path to the local directory your files are in, relative to your current working directory',
		type: 'string',
	});

	return yargs;
};