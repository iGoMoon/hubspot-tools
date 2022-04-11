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
