const _HublField = require('./_HublField');

/**
 * @typedef {string|null} FollowupEmailDefault 
 * 
 * @typedef {Object} FollowupEmailDefinition
 * @property {FollowupEmailDefault} default The default selected Email. {@link https://app.hubspot.com/l/email}
 * 
 * @typedef {_HublField.FieldType & FollowupEmailDefinition} FollowupEmailType
 * Combine into complete definition for Date Time
 */

/**
 * Followup email Field Class
 * @since 2.0.0
 */
module.exports = class FollowUpEmail extends _HublField {

	/**
	 * Followup email Field Constructor
	 * 
	 * Followup email fields allow a content creator to designate an email that will be sent in response to a form submission. This works in tandem with the HubL form tag, through the simple_email_campaign_id parameter.
	 * 
	 * Followup email fields are supported in modules.
 	 * 
	 * @see {@link https://developers.hubspot.com/en/docs/cms/building-blocks/module-theme-fields#followup-email}
	 * @param {FollowupEmailType} data
	 */
	constructor(data) {
		super(data);

		this.data = Object.assign(this.data, {
			/**
			 * @readonly
			 * @private
			 */
			type: "followupemail",
			
			// Name and Label
			name: this.data.name || 'followupemail_field',
			label: this.data.label || 'Followup email field'
		});

		// Default
		this.default(this.data.default)
	}

	/**
	 * Set Default Email ID
	 * @param {FollowupEmailDefault} emailId The default selected Email. {@link https://app.hubspot.com/l/email}
	 */
	default(emailId = null) {
		return this.default(emailId || this.data.default || null)
	}

}
