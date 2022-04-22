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



  /**
   * This field provides content creators a way to align text content within a container.
   * This should not be used for aligning other assets as there is a field type
   * specifically for that (Alignment). Text alignment fields are supported in modules.
   * Text alignment fields can only be used as style fields.
   * @see {@link https://developers.hubspot.com/en/docs/cms/building-blocks/module-theme-fields#text-alignment}
   * @see {@link https://developers.hubspot.com/docs/cms/building-blocks/module-theme-fields-overview#generated-css}
   * @param {object} data The JSON data used to generate the field.
   * @param {object} [data.default={}] // @todo
   * @param {('LEFT'|'RIGHT'|'CENTER'|'JUSTIFY')} [data.default.text_align] // @todo
   */