const _HublField = require('./_HublField');

module.exports = class Cta extends _HublField {

	constructor(data) {
		super(data);

		this.data = Object.assign(this.data, {
			/**
			 * @readonly
			 * @private
			 */
			type: "cta",
			
			name: this.data.name || 'cta_field',
			label: this.data.label || 'Cta field'
		});
	}

}
