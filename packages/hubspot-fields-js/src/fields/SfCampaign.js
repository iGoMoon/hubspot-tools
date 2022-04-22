const _HublField = require('./_HublField');

/**
 * @typedef {Object} SFCampaignDefinition
 * @property {String|null} default Set default value of field
 * 
 * @typedef {_HublField.FieldType & SFCampaignDefinition} SFCampaignType
 * Combine into complete definition for SFCampaign
 */

/**
 * Salesforce Campaign Field Class
 * @since 2.0.0
 */
module.exports = class SfCampaign extends _HublField {

	/**
	 * Salesforce Campaign Field Constructor
	 * 
	 * @param {SFCampaignType} data
	 */
	constructor(data) {
		super(data);

		this.data = Object.assign(this.data, {
			/**
			 * @readonly
			 * @private
			 */
			type: "salesforcecampaign",
			
			// Name and Label
			name: this.data.name || 'sfc_campaign',
			label: this.data.label || 'Salesforce Campaign field'
		});
	}

}
