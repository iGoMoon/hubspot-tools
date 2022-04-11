const _HublField = require('./_HublField');

module.exports = class Number extends _HublField {

	constructor(data) {
		super(data);

		this.data = Object.assign(this.data, {
			/**
			 * @readonly
			 * @private
			 */
			type: "number",
			
			name: this.data.name || 'number_field',
			label: this.data.label || 'Number field',

			step: this.data.step || 1
		});
	}

	// "display": "text", "slider"
	// "step": 1,
	// "min": null,
	// "max": null

}
