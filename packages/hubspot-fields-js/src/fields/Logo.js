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


/**
 * Logo fields provide a way for content creators to specify logo images to use in a
 * page, defaulting to the domain's logo. This is useful for site headers and footers
 * that may contain the company logo. Logo fields are supported in modules.
 * @see {@link https://developers.hubspot.com/en/docs/cms/building-blocks/module-theme-fields#logo}
 * @param {object} data The JSON data used to generate the field.
 * @param {object} [data.default={override_inherited_src: false, src: null, alt: null}]
 * Logo object. // @todo Document subproperties
 */