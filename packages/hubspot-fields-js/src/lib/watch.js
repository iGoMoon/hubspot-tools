const chokidar = require('chokidar');

// Example
// action => (add, change, unlink, unlinkDir)
// watch
	//.on('add', async (filePath) => { })
	//.on('change', async (filePath) => {});

const watch = ({ src, opts = {} }) => {
	return chokidar.watch(src,opts);
}

module.exports = {
	watch,
};
