const _HublField = require('./_HublField');

/**
 * @typedef {Object} ColorDefault 
 * @property {String)} color Hex value for color of border
 * @property {Number} opacity Opacity value for border color [default: 100]
 * 
 * @typedef {Object} ColorDefinition
 * @property {ColorDefault} default Sets the default selected color and opacity.
 * 
 * @typedef {_HublField.FieldType & ColorDefinition} ColorType
 * Combine into complete definition for Color
 */

/**
 * Color Field Class
 * @since 2.0.0
 */
module.exports = class Color extends _HublField {

	/**
	 * Color Field Constructor
	 * 
	 * Color fields provide a color picker interface for content creators. They support solid colors as well as transparency. They are a perfect choice for when you want to give content creators full control over colors within a module.
	 * 
	 * Color fields are supported in both themes and modules. Color fields can be used as style fields.
	 * 
	 * @see {@link https://developers.hubspot.com/docs/cms/building-blocks/module-theme-fields#color}
	 * @see {@link https://developers.hubspot.com/docs/cms/building-blocks/module-theme-fields-overview#style-fields}
   	 * @see {@link https://developers.hubspot.com/docs/cms/building-blocks/module-theme-fields-overview#generated-css}
	 * @param {ColorType} data
	 */
	constructor(data) {
		super(data);

		this.data = Object.assign(this.data, {
			/**
			 * @readonly
			 * @private
			 */
			type: "color",
			
			// Name and Label
			name: this.data.name || 'color_field',
			label: this.data.label || 'Color field'
		});

		// Default
		this.default(this.data.default)
	}

	/**
	 * Set Default
	 * @param {ColorDefault} data Sets the default selected color and opacity.
	 */
	default(data = {}) {
		let { color: c, opacity: o } = data
		// Set
		this.data.default = {
			color: (!!c && new RegExp(/^#([0-9A-Fa-f]{3}){1,2}$/,'i').test(c || this.data.default?.color)) ? c : '#000000',
			opacity: parseInt(o || this.data.default?.opacity) || 100
		}
		return this
	}

}