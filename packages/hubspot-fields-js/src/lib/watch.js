const chokidar = require('chokidar');

// Example
// action => (add, change, unlink, unlinkDir)
// watch
	//.on('add', async (filePath) => { })
	//.on('change', async (filePath) => {});

const watch = ({ src, initial = false }) => {
	return chokidar.watch(src, { ignoreInitial: !initial });
}

module.exports = {
	watch,
};
