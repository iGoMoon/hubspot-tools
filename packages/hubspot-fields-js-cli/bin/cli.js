#!/usr/bin/env node

const yargs = require('yargs');
const watchCommand = require('../commands/watch');
const parseCommand = require('../commands/parse');

const argv = yargs
	.usage('Transforming fields.js files into fields.json for HubSpot CMS')
	// Exit
	.exitProcess(false)
	.fail((msg, err, yargs) => {
		if (msg === null) {
			yargs.showHelp();
			process.exit(0);
		} else {
			process.exit(1);
		}
	})
	// Commands
	.command(watchCommand)
	.command(parseCommand)
	// Help
	.help()
	.recommendCommands()
	.demandCommand(1, '')
	.completion()
	.strict().argv;