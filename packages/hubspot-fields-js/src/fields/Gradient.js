const _HublField = require('./_HublField');

module.exports = class Gradient extends _HublField {

	constructor(data) {
		super(data);

		this.data = Object.assign(this.data, {
			/**
			 * @readonly
			 * @private
			 */
			type: "gradient",
			
			// Name and Label
			name: this.data.name || 'gradient_field',
			label: this.data.label || 'Gradient field'
		});
	}


}
