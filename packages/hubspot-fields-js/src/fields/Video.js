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
	this.supported_types = data.supported_types?.map(type => type.toUpperCase?.()) || [
      'EXTERNAL', 'CONTENT', 'FILE', 'EMAIL_ADDRESS', 'BLOG'
    ];
    if (this.default?.conversion_asset?.type) {
      this.default.conversion_asset.type = this.default.conversion_asset.type.toUpperCase?.(); 
    }
    if (this.default?.conversion_asset?.position) {
      this.default.conversion_asset.position = this.default.conversion_asset.position.toUpperCase?.(); 
    }
	*/

}
