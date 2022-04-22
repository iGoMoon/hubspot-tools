const _HublField = require('./_HublField');

/**
 * @typedef {string|null} MeetingDefault 
 * 
 * @typedef {Object} MeetingDefinition
 * @property {MeetingDefault} default The default selected Meeting. {@link https://app.hubspot.com/l/meetings}
 * 
 * @typedef {_HublField.FieldType & MeetingDefinition} MeetingType
 * Combine into complete definition for Date Time
 */

/**
 * Meeting Field Class
 * @since 2.0.0
 */
module.exports = class Meeting extends _HublField {

	/**
	 * Meeting Field Constructor
	 * 
	 * Meeting fields  provide a way for users to pick a meeting to display. 
	 * 
	 * Meeting fields are supported in modules. Meeting fields are available in CMS Hub Professional and Enterprise.
 	 * 
	 * @param {MeetingType} data
	 */
	constructor(data) {
		super(data);

		this.data = Object.assign(this.data, {
			/**
			 * @readonly
			 * @private
			 */
			type: "meeting",
			
			// Name and Label
			name: this.data.name || 'meeting_field',
			label: this.data.label || 'Meeting field'
		});

		// Default
		this.default(this.data.default)
	}

}
