const _HublField = require('./_HublField');

module.exports = class TextAlignment extends _HublField {

	constructor(data) {
		super(data);

		this.data = Object.assign(this.data, {
			/**
			 * @readonly
			 * @private
			 */
			type: "textalignment",
			
			name: this.data.name || 'textalignment_field',
			label: this.data.label || 'Text Alignment field',
			default : this.data.default || {
				text_align: "LEFT"
			} 
		});
	}
	
	/**
     * Set default value of field
     * @param {*} value 
     */
    default(value) {
        this.data.default.text_align = value.toUpperCase();
        return this;
	}


}
