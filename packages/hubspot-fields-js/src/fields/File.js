const _HublField = require('./_HublField');

/**
 * @typedef {string|null} FileDefault 
 * @typedef {('file'|'document'|'image')} FilePicker 
 * 
 * @typedef {Object} FileDefinition
 * @property {FileDefault} default File URL.
 * @property {FilePicker} picker Acceptable values: "file", "document", "image". The picker shows assets uploaded to either the file manager, or the document manager depending on this parameter.
 * 
 * @typedef {_HublField.FieldType & FileDefinition} FileType
 * Combine into complete definition for Date Time
 */

/**
 * File Field Class
 * @since 2.0.0
 */
module.exports = class File extends _HublField {

	/**
	 * File Field Constructor
	 * 
	 * File fields allow the user to upload a file to the file manager, or document manager, and make it easy to attach items that are in those locations. This can be useful for linking out to PDF files or files of other formats. For displaying images on a page you should use the image field. 
 	 * 
 	 * File fields are supported in modules.
	 * 
	 * @see {@link https://developers.hubspot.com/en/docs/cms/building-blocks/module-theme-fields#file}
	 * @param {FileType} data
	 */
	constructor(data) {
		super(data);

		this.data = Object.assign(this.data, {
			/**
			 * @readonly
			 * @private
			 */
			type: "file",
			
			// Name and Label
			name: this.data.name || 'file_field',
			label: this.data.label || 'File field',
		});

		// Additional Keys
		this.picker(this.data.picker)
		// Default
		this.default(this.data.default)
	}

	/**
	 * Set Default
	 * @param {FileDefault} value File URL.
	 */
	default(value = null) {
		try {
			value = (!!value && new URL(value)) ? value : null
		} catch {}
		this.data.default = value
		return this
	}
	
	/**
     * Set picker type
     * @param {FilePicker} picker Acceptable values: "file", "document", "image". The picker shows assets uploaded to either the file manager, or the document manager depending on this parameter.
     */
    picker(picker) {
		this.data.picker = ['file','document','image'].includes(picker = (picker || this.data.default)?.toLowerCase()) ? picker : 'file';
        return this;
	}

}
