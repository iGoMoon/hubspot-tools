const _HublField = require('./_HublField');

/**
 * @typedef {Timestamp|null} DateDefault 
 * 
 * @typedef {Object} DateDefinition
 * @property {DateDefault} default The Unix Epoch timestamp for the date and time you want to default to. Leave this null to allow the date and time picker to start the content creator at the current date and time in the picker.
 * 
 * @typedef {_HublField.FieldType & DateDefinition} DateType
 * Combine into complete definition for Date
 */

/**
 * Date Field Class
 * @since 2.0.0
 */
module.exports = class Date extends _HublField {

	/**
	 * Date Field Constructor
	 * 
	 * Date fields provide a date picker interface to make it easy for content creators to select a date. Returns a timestamp you can use in your code. 
	 * 
	 * Date fields are supported in modules.
	 * 
	 * @see {@link https://developers.hubspot.com/en/docs/cms/building-blocks/module-theme-fields#date}
	 * @param {DateType} data
	 */
	constructor(data) {
		super(data);

		this.data = Object.assign(this.data, {
			/**
			 * @readonly
			 * @private
			 */
			type: "date",
			
			// Name and Label
			name: this.data.name || 'date_field',
			label: this.data.label || 'Date field'
		});

		// Default
		this.default(this.data.default)
	}

	/**
	 * Set Default Date ID
	 * @param {DateDefault} date The Unix Epoch timestamp for the date and time you want to default to. Leave this null to allow the date and time picker to start the content creator at the current date and time in the picker.
	 */
	default(date) {
		try {
			date = (!!date && new Date((date || this.data.default || null))) ? parseInt(date) : null;
		} catch {}
		this.data.default = date
		return this
	}

}