const _HublField = require('./_HublField');

module.exports = class File extends _HublField {

	constructor(data) {
		super(data);

		this.data = Object.assign(this.data, {
			/**
			 * @readonly
			 * @private
			 */
			type: "file",
			
			name: this.data.name || 'file_field',
			label: this.data.label || 'File field',

			picker: this.data.picker || 'file'
		});
	}
	
	/**
     * Set default value of field
     * @param {*} value 
     */
    picker(picker) {
		//@todo picker checks = 'file'|'document'|'image'
		if (picker) {
			this.data.picker = picker;
		}
        return this;
	}

}
