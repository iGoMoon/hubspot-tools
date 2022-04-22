const _HublField = require('./_HublField');

/**
 * @typedef {Timestamp|null} DateTimeDefault 
 * 
 * @typedef {Object} DateTimeDefinition
 * @property {Number} step Set the interval between option in the time selector [Default=30]
 * @property {DateTimeDefault} default The Unix Epoch timestamp for the date and time you want to default to. Leave this null to allow the date and time picker to start the content creator at the current date and time in the picker.
 * 
 * @typedef {_HublField.FieldType & DateTimeDefinition} DateTimeType
 * Combine into complete definition for Date Time
 */

/**
 * Date and Time Field Class
 * @since 2.0.0
 */
module.exports = class DateTime extends _HublField {

	/**
	 * Date and Time Field Constructor
	 * 
	 * Date and time fields provide a date picker interface just like the date field, as well as a time picker to make it easy for content creators to select a date and time of day. Returns a timestamp you can use in your code. 
	 * 
	 * Date and time fields are supported in modules.
	 * 
	 * @see {@link https://developers.hubspot.com/en/docs/cms/building-blocks/module-theme-fields#date-and-time}
	 * @param {DateTimeType} data
	 */
	constructor(data) {
		super(data);

		this.data = Object.assign(this.data, {
			/**
			 * @readonly
			 * @private
			 */
			type: "datetime",
			
			// Name and Label
			name: this.data.name || 'datetime_field',
			label: this.data.label || 'Date and time field'
		});

		// Additional Keys
		this.step(this.data.step)
		// Default
		this.default(this.data.default)
	}

	/**
	 * Set Default Date Time
	 * @param {DateTimeDefault} date The Unix Epoch timestamp for the date and time you want to default to. Leave this null to allow the date and time picker to start the content creator at the current date and time in the picker.
	 */
	default(date) {
		try {
			date = (!!date && new Date((date || this.data.default || null))) ? parseInt(date) : null;
		} catch {}
		this.data.default = date
		return this
	}

	/**
	 * Set Step
	 * @param {Number} value Set the interval between option in the time selector [Default=30]
	 */
    step(value) {
        this.data.step = (value = parseInt(value || this.data.step)) && !isNaN(value) ? value : 30
        return this;
	}

}