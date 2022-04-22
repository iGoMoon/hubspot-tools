const _HublField = require('./_HublField');

module.exports = class Url extends _HublField {

	constructor(data) {
		super(data);

		this.data = Object.assign(this.data, {
			/**
			 * @readonly
			 * @private
			 */
			type: "url",
			
			name: this.data.name || 'url_field',
			label: this.data.label || 'Url field',

			default : this.data.default || {
				content_id: null,
				href: '',
				type: 'external'
			} 
		});
	}
	
	/*
	this.supported_types = data.supported_types?.map(type => type.toUpperCase?.()) || [
		'EXTERNAL', 'CONTENT', 'FILE', 'EMAIL_ADDRESS', 'BLOG'
    ];
    if (this.default?.url?.type) {
      this.default.url.type = this.default.url.type.toUpperCase?.(); 
    }
	*/
	
	/**
     * Set default value of field
     * @param {*} value 
     */
	 default(value) {
        this.data.default.href = value;
        return this;
	}

}

/**
 * URL fields provide a similar experience to link fields. Providing a UI for content
 * creators to add links. URL fields, however, do not show a UI for open in a new
 * window, nor tell search engines not to follow. Use this field when you as a developer
 * want to dictate the values for that. If you want the user to have control, use link
 * fields instead. URL fields are supported in modules.
 * @see {@link https://developers.hubspot.com/en/docs/cms/building-blocks/module-theme-fields#url}
 * @param {object} data The JSON data used to generate the field.
 * @param {object} [data.default={content_id: null, href: '', type: 'external'}]
 * URL object, with type, href and content id (if content is a page or post on HubSpot).
 * @param {Array} [data.supported_types=['external', 'content', 'file', 'email_address', 'blog']]
 * List of the types of links this field allows content creators to select. Remove types
 * from the list that you don't want content creators to have access to set.
 */