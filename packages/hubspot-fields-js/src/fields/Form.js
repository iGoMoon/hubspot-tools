const _HublField = require('./_HublField');

module.exports = class Form extends _HublField {

	constructor(data) {
		super(data);

		this.data = Object.assign(this.data, {
			/**
			 * @readonly
			 * @private
			 */
			type: "form",
			
			name: this.data.name || 'form_field',
			label: this.data.label || 'Form field'
		});
	}
	
	/**
     * Set default value of field
     * @param {*} value 
     */
    default(value) {
        this.data.default.form_id = value;
        return this;
	}

}
