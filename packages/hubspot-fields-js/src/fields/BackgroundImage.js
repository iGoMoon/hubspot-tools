const _HublField = require('./_HublField');

module.exports = class BackgroundImage extends _HublField {

	constructor(data) {
		super(data);

		this.data = Object.assign(this.data, {
			/**
			 * @readonly
			 * @private
			 */
			type: "backgroundimage",
			
			name: this.data.name || 'backgroundimage_field',
			label: this.data.label || 'Background Image field',
			default : this.data.default || {
				src: null,
				background_position: null,
				background_size: null
			} 
		});
	}
	
	/**
     * Set default value of field
     * @param {*} value 
     */
    default(value) {
        this.data.default.src = value;
        return this;
	}


}
