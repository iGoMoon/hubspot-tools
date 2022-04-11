const _HublField = require('./_HublField');

module.exports = class Font extends _HublField {

	constructor(data) {
		super(data);

		this.data = Object.assign(this.data, {
			/**
			 * @readonly
			 * @private
			 */
			type: "font",
			
			name: this.data.name || 'font_field',
			label: this.data.label || 'Font field'
		});
	}

	//load_external_fonts

	//variant
	
	/**
     * Set default value of field
     * @param {*} value 
     */
    default({ size, size_unit = "px", color, styles = {} }) {
        this.data.default = { size, size_unit, color, styles };
        return this;
	}

}
