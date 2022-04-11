const Group = require('./Group');

module.exports = class StyleGroup extends Group {

	constructor(data, children = []) {
		super(data,children);

		this.data = Object.assign(this.data, {
			tab: "STYLE"
		});
	}

}
