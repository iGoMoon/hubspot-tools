const _HublField = require('./_HublField');

module.exports = class Date extends _HublField {

	constructor(data) {
		super(data);

		this.data = Object.assign(this.data, {
			/**
			 * @readonly
			 * @private
			 */
			type: "date",
			
			name: this.data.name || 'date_field',
			label: this.data.label || 'Date field'
		});
	}

}
