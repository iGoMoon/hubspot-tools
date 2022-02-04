#!/usr/bin/env node

const { program } = require('commander');

program
	.name('transform')
	.usage('--src <srcDirectory>')
	.description('Scan a directory on your computer and transform the fields.js files to fields.json')
	.requiredOption('--src <srcDirectory>', 'Path to the local directory your files are in, relative to your current working directory')
	.option('-w,--watch', 'Watch a directory on your computer for changes and transform the fields.js files')
	.option('-i,--initial', 'Transform fields.js when first initiating the watcher')
	.parse(process.argv);

const { src, watch, initial } = program.opts()

const { handleDirectory } = require('../src/lib/FieldTransformer');

handleDirectory({
	pathToDir 	: src,
	watch		: !!watch,
	initial 	: !!initial
})