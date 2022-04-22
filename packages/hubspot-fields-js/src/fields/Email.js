const _HublField = require('./_HublField');

/**
 * @typedef {Array<string>|null} EmailDefault 
 * 
 * @typedef {Object} EmailDefinition
 * @property {EmailDefault} default Array of email address strings.
 * 
 * @typedef {_HublField.FieldType & EmailDefinition} EmailType
 * Combine into complete definition for Date Time
 */

/**
 * Email Field Class
 * @since 2.0.0
 */
module.exports = class Email extends _HublField {

	/**
	 * Email Field Constructor
	 * 
	 * Email address fields allow a user to select multiple email addresses. This could be used for displaying contact information. The email field returns an array of selected email addresses you can loop through. 
	 * 
	 * Email fields are supported in modules.
	 * 
	 * @see {@link https://developers.hubspot.com/en/docs/cms/building-blocks/module-theme-fields#email-address}
	 * @param {EmailType} data
	 */
	constructor(data) {
		super(data);

		this.data = Object.assign(this.data, {
			/**
			 * @readonly
			 * @private
			 */
			type: "email",
			
			// Name and Label
			name: this.data.name || 'email_field',
			label: this.data.label || 'Email Address field'
		});

		// Default
		this.default(this.data.default)
	}

	/**
	 * Set Default
	 * @param {EmailDefault} emails Array of email address strings.
	 */
	default(emails = []) {
		this.data.default = (emails || this.data.default || []) 
			.filter(email => (!!email && new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,'i').test(email)))
		return this
	}

}