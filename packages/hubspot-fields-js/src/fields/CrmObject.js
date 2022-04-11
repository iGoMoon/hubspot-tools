const _HublField = require('./_HublField');

module.exports = class CrmObject extends _HublField {

	constructor(data) {
		super(data);

		this.data = Object.assign(this.data, {
			/**
			 * @readonly
			 * @private
			 */
			type: "crmobject",
			
			name: this.data.name || 'crmobject_field',
			label: this.data.label || 'CRM Object field'
		});
	}

	//"object_type" : "CONTACT",
	//"properties_to_fetch" : [ ],
	
	/**
     * Set default value of field
     * @param {*} value 
     */
    default(value) {
        this.data.default.id = value;
        return this;
	}

}
