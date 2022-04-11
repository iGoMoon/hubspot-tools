const _HublField = require('./_HublField');

module.exports = class Email extends _HublField {

	constructor(data) {
		super(data);

		this.data = Object.assign(this.data, {
			/**
			 * @readonly
			 * @private
			 */
			type: "email",
			
			name: this.data.name || 'email_field',
			label: this.data.label || 'Email Address field'
		});
	}

}
