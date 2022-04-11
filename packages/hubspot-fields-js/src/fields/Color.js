const _HublField = require('./_HublField');

module.exports = class Color extends _HublField {

	constructor(data) {
		super(data);

		this.data = Object.assign(this.data, {
			/**
			 * @readonly
			 * @private
			 */
			type: "color",
			
			name: this.data.name || 'color_field',
			label: this.data.label || 'Color field',
			default : this.data.default || {
				color: null,
				opacity: null
			} 
		});
	}
	
	/**
     * Set default value of field
     * @param {*} value 
     */
    default(value) {
        this.data.default.color = value;
        return this;
	}


}
