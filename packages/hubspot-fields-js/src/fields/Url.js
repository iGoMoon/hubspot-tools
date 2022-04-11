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
