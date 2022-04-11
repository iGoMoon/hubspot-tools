const _HublField = require('./_HublField');

module.exports = class FollowUpEmail extends _HublField {

	constructor(data) {
		super(data);

		this.data = Object.assign(this.data, {
			/**
			 * @readonly
			 * @private
			 */
			type: "followupemail",
			
			name: this.data.name || 'followupemail_field',
			label: this.data.label || 'Followup email field'
		});
	}

}
