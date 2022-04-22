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
	 * 
     * @example
     * default: {
     *   size: 12,
     *   font: 'Merriweather',
     *   font_set: 'google',
     *   size_unit: 'px',
     *   color: '#000',
     *   styles: {}
     * }
     */
    default({ size, size_unit = "px", color, styles = {} }) {
        this.data.default = { size, size_unit, color, styles };
        return this;
	}

}



/**
 * Font fields provide content creators basic font styling controls. Content creators
 * can choose the size, color, font family, and the format (bold, italic, and underlined).
 * The listed fonts are all  Google fonts and standard web-safe fonts. Font fields are
 * supported in both themes and modules. Font fields can be used as style fields.
 * Note: The font family is determined by the font and font_set combined. You must have
 * both to load the font. When inheriting fields this means you need to inherit both values.
 * @see {@link https://developers.hubspot.com/en/docs/cms/building-blocks/module-theme-fields#font}
 * @see {@link https://fonts.google.com}
 * @param {object} data The JSON data used to generate the field.
 * @param {object} [data.default={}] Font object with settings for size, sizing unit,
 * color, and styles for bold, italic, and underline. // @todo Document subproperties
 * @param {boolean} [data.load_external_fonts=true] HubSpot automatically loads the
 * selected web font to the page if the font is selected and referenced by HubL in a
 * stylesheet or in a module. Set this to false, if you are already loading the font to
 * the page, that way the font won't load twice.
 * @param {string} [data.variant] If using a Google font, the variant of the font you
 * want to use. For example, to use the 700-weight version of a font, set this to "700".
 * To use the 400-weight italic version of a font, set this to "400i".


"default": {
	"size": 5,
	"font": "'book antiqua', palatino",
	"fallback": null,
	"variant": null,
	"font_set": "DEFAULT",
	"color": "#0C5394",
	"styles": {
		"text-decoration": "underline",
		"font-weight": "bold",
		"font-style": "italic"
	}
}

 */