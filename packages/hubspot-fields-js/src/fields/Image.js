const _HublField = require('./_HublField');

module.exports = class Image extends _HublField {

	constructor(data) {
		super(data);

		this.data = Object.assign(this.data, {
			/**
			 * @readonly
			 * @private
			 */
			type: "image",
			
			name: this.data.name || 'image_field',
			label: this.data.label || 'Image field',

			default : this.data.default || {
				size_type: 'auto',
				src: '',
				alt: null,
				loading: 'lazy'
			}
		});
	}

    // this.responsive = data.responsive ?? true;
    // this.resizable = data.resizable ?? true;
    // this.show_loading = !!data.show_loading;
	
	/**
     * Set default value of field
     * @param {*} value 
     */
    default(value) {
        this.data.default.src = value;
        return this;
	}

}



/**
 * Image fields provide an easy interface for content creators to add images to a module
 * or theme. Image fields provide a file picker interface that lists images from the File
 * Manager. Since images can be used and displayed in different ways, developers can limit
 * the sizing options available to the content creator in the UI as well as allow for
 * lazy-loading of images. Image fields are supported in modules. Images can be used as
 * style fields. You should only use Image fields as style fields, if the image will be
 * purely presentational, not convey meaning and not a background image. This is to follow
 * best practices for accessibility.
 * @see {@link https://developers.hubspot.com/en/docs/cms/building-blocks/module-theme-fields#image}
 * @param {object} data The JSON data used to generate the field.
 * @param {object} [data.default={}] Image object. // @todo Document subproperties
 * @param {boolean} [data.responsive=true] Determines if the image is to act responsively
 * or have a fixed height and width.
 * @param {boolean} [data.resizable=true] // @todo Find out what this is
 * @param {boolean} [data.show_loading=false] Determines if the controls for choosing to
 * lazy load the image are shown in the page editor.
 * {@link https://developers.hubspot.com/docs/cms/guides/speed/lazy-loading}
 * 
 * 
 * 
"responsive": false,
"resizable": true,
"show_loading": true,
"default": {
	"src": "https://21660345.fs1.hubspotusercontent-na1.net/hubfs/21660345/Flickr.svg",
	"alt": "Flickr",
	"loading": "lazy",
	"size_type": "exact",
	"width": 78,
	"height": 60
}
 */