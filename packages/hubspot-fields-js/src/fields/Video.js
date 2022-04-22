const _HublField = require('./_HublField');

module.exports = class Video extends _HublField {

	constructor(data) {
		super(data);

		this.data = Object.assign(this.data, {
			/**
			 * @readonly
			 * @private
			 */
			type: "videoplayer",
			
			name: this.data.name || 'videoplayer_field',
			label: this.data.label || 'Video field'
		});
	}

	//
    // this.resizable = data.resizable ?? true;
    // this.show_preview = data.show_preview ?? true;
    // this.show_advanced_options = !!data.show_advanced_options;

	/*
    if (this.default?.conversion_asset?.type) {
      this.default.conversion_asset.type = this.default.conversion_asset.type.toUpperCase?.(); 
    }
    if (this.default?.conversion_asset?.position) {
      this.default.conversion_asset.position = this.default.conversion_asset.position.toUpperCase?.(); 
    }
	*/

}


/**
 * Video fields provide content editors with a place to add HubSpot Video to their module content without the need of using rich text fields.
 * @see {@link https://developers.hubspot.com/en/docs/cms/building-blocks/module-theme-fields#video}
 * @param {object} data The JSON data used to generate the field.
 * @param {object} [data.default] Video object with settings for "player_id", "height", "width", "size_type", "conversion_asset", "loop_video", "mute_by_default", "autoplay",  and "hide_control". // @todo Document subproperties
 * @param {object} [data.default.conversion_asset] // @todo
 * @param {('FORM'|'CTA'|'')} [data.default.conversion_asset.type=''] Accepts either 'FORM', 'CTA', or ''.
 * @param {string} [data.default.conversion_asset.id=''] The id of the Form or CTA type.
 * @param {('PRE'|'POST')} [data.default.conversion_asset.position=''] Whether the conversion asset should be shown before the video starts or after it ends. Accepts either "PRE" or "POST".
 * @param {boolean} [data.resizable=true] // @todo
 * @param {boolean} [data.show_advanced_options=false] Whether content creators can see advanced default options.
 * @param {boolean} [data.show_preview=true] // @todo
 */