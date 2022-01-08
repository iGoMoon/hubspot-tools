const { maybeTransformFile } = require('../lib/transform');
const { watch } = require('../lib/watch');
const { checkSrcDirectory } = require('../lib/path');

exports.command = 'watch <src>';

exports.describe = 'Watch a directory on your computer for changes and transform the fields.js fields';

exports.handler = async options => {
	const { src } = options;

	let absoluteSrcPath = checkSrcDirectory(src)
	if (!absoluteSrcPath) { return; }
	
	// Run watcher
	watch(absoluteSrcPath)
		.on('add', filepath => maybeTransformFile(absoluteSrcPath,filepath))
		.on('change', filepath => maybeTransformFile(absoluteSrcPath,filepath))
	}

exports.builder = yargs => {

	yargs.positional('src', {
		describe:
			'Path to the local directory your files are in, relative to your current working directory',
		type: 'string',
	});

	return yargs;
};