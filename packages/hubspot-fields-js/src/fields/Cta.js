const _HublField = require('./_HublField');

/**
 * @typedef {string|null} CtaDefault 
 * 
 * @typedef {Object} CtaDefinition
 * @property {CtaDefault} default The default selected CTA. Expects a CTA id which can be found in the URL when editing a CTA in the CTA manager. {@link https://app.hubspot.com/l/ctas}
 * 
 * @typedef {_HublField.FieldType & CtaDefinition} CtaType
 * Combine into complete definition for Cta
 */

/**
 * Cta Field Class
 * @since 2.0.0
 */
module.exports = class Cta extends _HublField {

	/**
	 * Cta Field Constructor
	 * 
	 * Call-To-Action (CTA) fields provide a way for users to pick a CTA to display. CTA's are essentially trackable buttons or links. Content creators create CTAs that can be used throughout a site. 
	 * 
	 * CTA fields are supported in modules. CTA fields are available in CMS Hub Professional and Enterprise.
	 * 
	 * @see {@link https://developers.hubspot.com/en/docs/cms/building-blocks/module-theme-fields#cta}
	 * @param {CtaType} data
	 */
	constructor(data) {
		super(data);

		this.data = Object.assign(this.data, {
			/**
			 * @readonly
			 * @private
			 */
			type: "cta",
			
			// Name and Label
			name: this.data.name || 'cta_field',
			label: this.data.label || 'Cta field'
		});

		// Default
		this.default(this.data.default)
	}

	/**
	 * Set Default Cta ID
	 * @param {CtaDefault} ctaId The default selected CTA. Expects a CTA id which can be found in the URL when editing a CTA in the CTA manager. {@link https://app.hubspot.com/l/ctas}
	 */
	default(ctaId = null) {
		return this.default(ctaId || this.data.default || null)
	}

}