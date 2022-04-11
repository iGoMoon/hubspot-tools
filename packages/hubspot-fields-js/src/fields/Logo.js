const _HublField = require('./_HublField');

module.exports = class Logo extends _HublField {

	constructor(data) {
		super(data);

		this.data = Object.assign(this.data, {
			/**
			 * @readonly
			 * @private
			 */
			type: "logo",
			
			name: this.data.name || 'logo_field',
			label: this.data.label || 'Logo field',

			default : this.data.default || {
				override_inherited_src: false,
				src: null,
				alt: null
			}
		});
	}
	
	/**
     * Set default value of field
     * @param {*} value 
     */
	 default(value) {
        this.data.default.src = value;
        return this;
	}

}
