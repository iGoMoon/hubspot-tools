const _HublField = require('./_HublField');

module.exports = class SimpleMenu extends _HublField {

	constructor(data) {
		super(data);

		this.data = Object.assign(this.data, {
			/**
			 * @readonly
			 * @private
			 */
			type: "simplemenu",
			
			name: this.data.name || 'simplemenu_field',
			label: this.data.label || 'Simple menu field'
		});
	}

}
