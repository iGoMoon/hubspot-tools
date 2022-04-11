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
