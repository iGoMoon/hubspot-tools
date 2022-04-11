const _HublField = require('./_HublField');

module.exports = class Page extends _HublField {

	constructor(data) {
		super(data);

		this.data = Object.assign(this.data, {
			/**
			 * @readonly
			 * @private
			 */
			type: "page",
			
			name: this.data.name || 'page_field',
			label: this.data.label || 'Page field'
		});
	}

}
