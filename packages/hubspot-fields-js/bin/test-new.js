#!/usr/bin/env node

const { program } = require('commander');

program
	.name('rebuild')
	.usage('--src <srcDirectory>')
	.description('Scan a directory on your computer and transform the fields.js files to fields.json')
	.option('--src <srcDirectory>')
	.option('-t,--transform')
	.parse(process.argv);

const { src, transform } = program.opts()

const { getFilesToTransform, transformDataToJson, handleDirectory } = require('../src/lib/FieldTransformer');
const { getAbsPathFromCurrent, getBasename, checkIsDirectory, getExt } = require('../src/util/path');

let pathToDir = getAbsPathFromCurrent(src);
if (!checkIsDirectory(pathToDir)) {
	process.exit(0)
}

let files = getFilesToTransform({ pathToDir })
fields = require(files[0]);

if (!transform) {
	console.log("Fields"); console.log(fields);
} else { 
	console.log("Transformed"); console.dir(transformDataToJson(fields), { depth: null });
}

// handle 
handleDirectory({
	pathToDir 			: src || '.',
	watch				: false
})