const _HublField = require('./_HublField');

/**
 * @typedef {Object} BackgroundImageDefault
 * @property {string} src URL for default image.
 * @property {('TOP_LEFT'|'TOP_CENTER'|'TOP_RIGHT'|'MIDDLE_CENTER'|'MIDDLE_LEFT'|'MIDDLE_RIGHT'|'BOTTOM_LEFT'|'BOTTOM_CENTER'|'BOTTOM_RIGHT')} background_position
 * @property {('cover'|'contain'|'auto')} background_size
 * 
 * @typedef {Object} BackgroundImageDefinition
 * @property {BackgroundImageDefault} default Object containing the image src, background position and background size.
 * 
 * @typedef {_HublField.FieldType & BackgroundImageDefinition} BackgroundImageType
 * Combine into complete definition for BackgroundImage
 */

/**
 * Background Image Class
 * @since 2.0.0
 */
module.exports = class BackgroundImage extends _HublField {

	/**
	 * Background Image Constructor
	 * 
	 * This field provides a background image field which has subfields for background position and background size. Background image fields have a .css property that returns CSS based on the field's value.
	 * 
	 * Background Image fields are supported in modules. Background Image fields can only be used as style fields.
	 * 
	 * @see {@link https://developers.hubspot.com/docs/cms/building-blocks/module-theme-fields#background-image}
	 * @see {@link https://developers.hubspot.com/docs/cms/building-blocks/module-theme-fields-overview#style-fields}
   	 * @see {@link https://developers.hubspot.com/docs/cms/building-blocks/module-theme-fields-overview#generated-css}
	 * @param {BackgroundImageType} data
	 */
	constructor(data) {
		super(data);

		this.data = Object.assign(this.data, {
			/**
			 * @readonly
			 * @private
			 */
			type: "backgroundimage",
			
			// Name and Label
			name: this.data.name || 'backgroundimage_field',
			label: this.data.label || 'Background Image field'
		});

		// Default
		this.default(this.data.default)
	}

	/**
	 * Set Default
	 * @param  {BackgroundImageDefault} data
	 */
	default(data = {}) {
		let { src , background_position: p, background_size : s } = data	
		// if String, use it for Source 
		src = (!src && typeof data == 'string') ? data : src
		// Define Options
		let validOptions = {
			p: ['TOP_LEFT', 'TOP_CENTER', 'TOP_RIGHT', 'MIDDLE_CENTER', 'MIDDLE_LEFT', 'MIDDLE_RIGHT', 'BOTTOM_LEFT', 'BOTTOM_CENTER', 'BOTTOM_RIGHT'],
			s: ['cover','contain','auto']
		}
		// Set
		this.data.default = {
			src: (src = (src || this.data.default?.src)) ? src :  null,
			background_position: validOptions.p.includes(p = (p || this.data.default?.background_position)?.toUpperCase()) ? p : null,
			background_size: validOptions.s.includes(s = (s || this.data.default?.background_size)?.toLowerCase()) ? s : null,
		}
		return this
	}


}
