const _HublField = require('./_HublField');

module.exports = class RichText extends _HublField {

	constructor(data) {
		super(data);

		this.data = Object.assign(this.data, {
			/**
			 * @readonly
			 * @private
			 */
			type: "richtext",
			
			name: this.data.name || 'richtext_field',
			label: this.data.label || 'Rich text field'
		});
	}

	//enabled_features

}
