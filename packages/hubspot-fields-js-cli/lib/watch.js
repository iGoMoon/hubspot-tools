const chokidar = require('chokidar');

function watch(src) {

	const watcher = chokidar.watch(src, {
		ignoreInitial: false
	});

	console.log(`Now watching ${src}\n`)

	// Example
	// watcher
		//.on('add', async (filePath) => { })
		//.on('change', async (filePath) => {});

	return watcher;
}

module.exports = {
	watch,
};
