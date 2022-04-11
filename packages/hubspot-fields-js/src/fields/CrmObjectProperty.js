const _HublField = require('./_HublField');

module.exports = class CrmObjectProperty extends _HublField {

	constructor(data) {
		super(data);

		this.data = Object.assign(this.data, {
			/**
			 * @readonly
			 * @private
			 */
			type: "crmobjectproperty",
			
			name: this.data.name || 'crmobjectproperty_field',
			label: this.data.label || 'CRM object property field',
			object_type: this.data.object_type || 'contact',
			default : this.data.default || {
				property: null
			} 
		});
	}
	
	/**
     * Set default value of field
     * @param {*} value 
     */
    default(value) {
        this.data.default.color = value;
        return this;
	}


}
