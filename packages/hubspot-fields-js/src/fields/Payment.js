const _HublField = require('./_HublField');

module.exports = class Payment extends _HublField {

	constructor(data) {
		super(data);

		this.data = Object.assign(this.data, {
			/**
			 * @readonly
			 * @private
			 */
			type: "payment",
			
			name: this.data.name || 'payment_field',
			label: this.data.label || 'Payment field'
		});
	}

}
