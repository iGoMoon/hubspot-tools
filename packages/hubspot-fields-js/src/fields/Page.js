const _HublField = require('./_HublField');

/**
 * @typedef {string|null} PageDefault 
 * 
 * @typedef {Object} PageDefinition
 * @property {PageDefault} default A default page id to be selected. {@link https://app.hubspot.com/l/pages}
 * 
 * @typedef {_HublField.FieldType & PageDefinition} PageType
 * Combine into complete definition for Page
 */

/**
 * Page Field Class
 * @since 2.0.0
 */
module.exports = class Page extends _HublField {

	/**
	 * Page Field Constructor
	 * 
	 * Page fields provide an interface for content creators to select site pages and landing pages. The value returned by a page field is the page id of the selected page. When used in tandem with the content_by_id or content_by_ids functions, you can use data from the selected pages in the current page.
	 * 
	 * Page fields are supported in modules.
	 * 
	 * @see {@link https://developers.hubspot.com/en/docs/cms/building-blocks/module-theme-fields#page}
	 * @param {PageType} data
	 */
	constructor(data) {
		super(data);

		this.data = Object.assign(this.data, {
			/**
			 * @readonly
			 * @private
			 */
			type: "page",
			
			name: this.data.name || 'page_field',
			label: this.data.label || 'Page field'
		});

		// Default
		this.default(this.data.default)
	}

	/**
	 * Set Default Page ID
	 * @param {PageDefault} pageId A default page id to be selected. {@link https://app.hubspot.com/l/pages/site}
	 */
	default(pageId) {
		this.data.default = (pageId != 'default' && !isNaN(pageId = parseInt(pageId))) ? pageId : null	
		return this
	}

}
