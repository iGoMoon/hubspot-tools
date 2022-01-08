const fs = require('fs');
const path = require('path');

const checkSrcDirectory = (src) => {
	let absoluteSrcPath = path.resolve(getCwd(), src);
	try {
		const stats = fs.statSync(absoluteSrcPath);
		if (!stats.isDirectory()) {
			console.log(`The "${src}" is not a path to a directory`);
			return false;
		}
		return absoluteSrcPath;
	} catch (e) {
		console.log(`The "${src}" is not a path to a directory`);
		return false;
	}
};

const getCwd = () => {
	if (process.env.INIT_CWD) {
		return process.env.INIT_CWD;
	}
	return process.cwd();
};

function getExt(filepath) {
	if (typeof filepath !== 'string') return '';
	const ext = path
		.extname(filepath)
		.trim()
		.toLowerCase();
	return ext[0] === '.' ? ext.slice(1) : ext;
}
function getBasename(filepath) {
	if (typeof filepath !== 'string') return '';
	return path.basename(filepath);
}

const getAbsoluteFilePath = _path => path.resolve(getCwd(), _path);

module.exports = {
	checkSrcDirectory,
	getCwd,
	getBasename,
	getExt,
	getAbsoluteFilePath
};
