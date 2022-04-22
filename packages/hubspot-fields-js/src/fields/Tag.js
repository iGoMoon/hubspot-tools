const _HublField = require('./_HublField');

module.exports = class Tag extends _HublField {

	constructor(data) {
		super(data);

		this.data = Object.assign(this.data, {
			/**
			 * @readonly
			 * @private
			 */
			type: "tag",
			
			name: this.data.name || 'tag_field',
			label: this.data.label || 'Tag field'
		});
	}

	////"tag_value": "SLUG", "ID", "NAME", "ALL"
	// URL slug for the tag
	//An object containing the name, unique id, and url slug of the tag

}
