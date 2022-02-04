const { statSync } = require('fs');
const path = require('path');

const getCwd = () => {
	if (process.env.INIT_CWD) {
		return process.env.INIT_CWD;
	}
	return process.cwd();
};

const getAbsPathFromCurrent = _path => path.resolve(getCwd(), _path);

const getAbsPathFromRoot = (_path = '') => path.join(path.resolve(__dirname, '../../'), _path);

const getBasename = (filepath) => path.basename(filepath);

const getExt = (filepath) => {
	if (typeof filepath !== 'string') return '';
	const ext = path
		.extname(filepath)
		.trim()
		.toLowerCase();
	return ext[0] === '.' ? ext.slice(1) : ext;
}

const checkIsDirectory = (fullPath) => {
	try {
		if (!statSync(fullPath).isDirectory()) { throw false; }
		return fullPath;
	} catch (e) {
		console.log(`The "${fullPath}" is not a path to a directory`);
		return false;
	}
};

module.exports = {
	getCwd,
	getAbsPathFromCurrent,
	getAbsPathFromRoot,
	getBasename,
	getExt,
	checkIsDirectory
};
