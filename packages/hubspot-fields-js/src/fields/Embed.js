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



/**
 * Embed fields allow the user to add a URL from an oEmbed-enabled site or paste in an
 * embed code from another site. To learn more about oEmbed usage on HubSpot, and see use
 * cases, visit HubSpot's oEmbed document.
 * @see {@link https://oembed.com/#section7}
 * @see {@link https://developers.hubspot.com/docs/cms/building-blocks/module-theme-fields/oembed}
 * @see {@link https://developers.hubspot.com/en/docs/cms/building-blocks/module-theme-fields#embed}
 * @param {object} data The JSON data used to generate the field.
 * @param {Array<string>} [data.supported_source_types=['oembed', 'html']] Supported
 * source types for either oEmbed URLs ("oembed"), HTML embed code ("html"), or Media
 * Bridge ("media_bridge").
 * @param {Array<string>} [data.supported_oembed_types=['photo', 'video', 'link', 'rich']]
 * Supported oEmbed type including "photo", "video", "link", and "rich". Does not apply
 * to the `supported_source_types` of "html".
 * @param {Array} [data.supported_media_bridge_providers=[]] Array of provider IDs that
 * determine which Media Bridge providers are available to select content from.
 * Note: This param will also be populated when installing a Media Bridge Provider Application.
 * @param {object} [data.default={source_type: 'oembed'}] An array containing the
 * "source_type" parameter. This parameter has one string based value from the options
 * provided in the "supported_source_types" parameter. // @todo Document subproperties
 */