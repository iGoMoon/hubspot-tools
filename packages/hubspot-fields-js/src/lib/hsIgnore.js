const fs = require('fs');
const path = require('path');
const { createInterface } = require('readline');
const { getCwd } = require('../util/path');

const checkHsIgnore = () => {
	const rl = createInterface({ input: process.stdin, output: process.stdout });
	// hsignore path
	let hsIgnorePath = path.join(getCwd(), '.hsignore')
	// See if fields.js is in file
	let hsIgnore = fs.existsSync(hsIgnorePath) ? fs.readFileSync(hsIgnorePath, 'utf-8').split("\n") : [];
	let fieldsJsIgnored = hsIgnore.some(l => l.trim().match(/(^|\/)+fields\.js($)+/g))
	
	return new Promise(async (res, rej) => {
		if (!fieldsJsIgnored) {
			// Prompt
			await rl.question("You do not have a .hsignore file that contains 'fields.js', this will result in errors when uploading to HubSpot. Would you like to add it to your .hsignore file? (Y/n) ", (answer) => {
				// If yes
				if (['yes', 'y'].indexOf(answer.toLowerCase()) > -1) {
					// Add to file
					hsIgnore.push('fields.js')
					fs.writeFileSync(hsIgnorePath,hsIgnore.filter(i => !!i).join("\n"));
					// Notify
					console.log("\nAdded 'fields.js' to .hsignore");
				}
				console.log("\n");
				res()
			});
			return;
		}
		res()
	})
}

module.exports = {
	checkHsIgnore,
};
