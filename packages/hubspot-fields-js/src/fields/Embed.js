const _HublField = require('./_HublField');

module.exports = class Embed extends _HublField {

	constructor(data) {
		super(data);

		this.data = Object.assign(this.data, {
			/**
			 * @readonly
			 * @private
			 */
			type: "embed",
			
			name: this.data.name || 'embed_field',
			label: this.data.label || 'Embed field'
		});
	}

	//"supported_source_types" : [ "oembed", "html" ],
	//"supported_oembed_types" : [ "photo", "video", "link", "rich" ],
	//"supported_media_bridge_providers" : []
	
	/**
     * Set default value of field
     * @param {*} value 
     */
    default(value) {
        this.data.default.source_type = value;
        return this;
	}

}
