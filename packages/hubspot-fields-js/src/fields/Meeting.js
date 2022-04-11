const _HublField = require('./_HublField');

module.exports = class Meeting extends _HublField {

	constructor(data) {
		super(data);

		this.data = Object.assign(this.data, {
			/**
			 * @readonly
			 * @private
			 */
			type: "meeting",
			
			name: this.data.name || 'meeting_field',
			label: this.data.label || 'Meeting field'
		});
	}

}
