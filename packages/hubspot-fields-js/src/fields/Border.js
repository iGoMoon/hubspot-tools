const _HublField = require('./_HublField');

module.exports = class Border extends _HublField {

	constructor(data) {
		super(data);

		this.data = Object.assign(this.data, {
			/**
			 * @readonly
			 * @private
			 */
			type: "border",
			
			name: this.data.name || 'border_field',
			label: this.data.label || 'Border field',
			default : this.data.default || {
				top: null,
				bottom: null,
				left: null,
				right: null
			} 
		});
	}

	//allow_custom_border_sides
	
	/**
     * Set default value of field
     * @param {*} value 
     */
    default(value) {
        this.data.default.color = value;
        return this;
	}


}
