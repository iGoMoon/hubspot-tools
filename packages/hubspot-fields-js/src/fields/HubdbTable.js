const _HublField = require('./_HublField');

module.exports = class HubdbTable extends _HublField {

	constructor(data) {
		super(data);

		this.data = Object.assign(this.data, {
			/**
			 * @readonly
			 * @private
			 */
			type: "hubdbtable",
			
			name: this.data.name || 'hubdbtable_field',
			label: this.data.label || 'HubDB table field'
		});
	}

}
