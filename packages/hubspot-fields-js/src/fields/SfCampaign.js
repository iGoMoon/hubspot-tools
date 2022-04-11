const _HublField = require('./_HublField');

module.exports = class SfCampaign extends _HublField {

	constructor(data) {
		super(data);

		this.data = Object.assign(this.data, {
			/**
			 * @readonly
			 * @private
			 */
			type: "salesforcecampaign",
			
			name: this.data.name || 'sfc_campaign',
			label: this.data.label || 'Salesforce Campaign field'
		});
	}

}
