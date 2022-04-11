#!/usr/bin/env node

const { program } = require('commander')
const config = require('../package.json');

program
	.version(config.version)
	.command('transform', 'Transform fields.js in the given directory', {
		executableFile: './transform',
		isDefault : true
	})
	.command('test', 'Test New Setup', {
		executableFile: './test-new'
	})

program.parse(process.argv);