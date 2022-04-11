const _HublField = require('./_HublField');

module.exports = class HubdbRow extends _HublField {

	constructor(data) {
		super(data);

		this.data = Object.assign(this.data, {
			/**
			 * @readonly
			 * @private
			 */
			type: "hubdbrow",
			
			name: this.data.name || 'hubdbrow_field',
			label: this.data.label || 'HubDB field',

			table_name_or_id : this.data.table_name_or_id || ""
		});
	}

	// "columns_to_fetch" : [],
	// "display_columns" : [],
	// "display_format" : "%0 - %1",
	
	/**
     * Set default value of field
     * @param {*} value 
     */
    default(value) {
        this.data.default.id = value;
        return this;
	}

}
