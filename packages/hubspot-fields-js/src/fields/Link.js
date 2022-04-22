const _HublField = require('./_HublField');

module.exports = class Link extends _HublField {

	constructor(data) {
		super(data);

		this.data = Object.assign(this.data, {
			/**
			 * @readonly
			 * @private
			 */
			type: "link",
			
			name: this.data.name || 'link_field',
			label: this.data.label || 'Link field',

			default : this.data.default || {
				open_in_new_tab: false,
				no_follow: false,
				sponsored: false,
				user_generated_content: false,
				url: {
					content_id: null,
					type: 'external',
					href: ''
				}
			} 
		});
	}

    //this.show_advanced_rel_options = !!data.show_advanced_rel_options;
	
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
        this.data.default.url.href = value;
        return this;
	}

}


/**
 * Link fields provide an easy interface for content creators to provide links to URLs
 * and email addresses. For external links, content creators choose "external". For email
 * links "email address". Finally for content hosted on the HubSpot CMS they can use
 * "content" which shows a list of all pages and blog posts in the account, file showing
 * file assets, and blog, showing all of the blog listings in the account. Link fields
 * are very similar to URL fields except for the key difference that they provide a UI
 * for "open in new window" and "tell search engines not to follow". If you do not want
 * content creators to have that control use the URL field. Link fields are supported
 * in modules.
 * @see {@link https://developers.hubspot.com/en/docs/cms/building-blocks/module-theme-fields#link}
 * @param {object} data The JSON data used to generate the field.
 * @param {object} [data.default={}] Font object with settings for size, sizing unit,
 * color, and styles for bold, italic, and underline. // @todo Document subproperties
 * @param {Array<string>} [data.supported_types=['external', 'content', 'file', 'email_address', 'blog']]
 * List of the types of links this field allows content creators to select. Remove types
 * from the list that you don't want content creators to have access to set.
 * @param {boolean} [data.show_advanced_rel_options=false] Whether content creators can
 * see advanced rel options. 
 */