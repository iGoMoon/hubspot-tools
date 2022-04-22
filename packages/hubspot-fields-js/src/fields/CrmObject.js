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

	//"object_type" : "CONTACT", //company, contact, deal, marketing_event, product, quote, ticket
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

/** 

"object_type" : "contact",
  "properties_to_fetch" : [ "date_of_birth" ], // Specify which object properties you want to access in HubL via module.crmobject_field.properties. If none are selected, all object properties will be included. It is best practice to select only the properties you will need.
  "display_properties" : [ "firstname", "lastname" ], //Specify which object properties you want to display for the choice label in the CRM object selector. If nothing is selected, the choice label will default to the CRM object defined label. Multi-line text, checkboxes, and file upload property types are not supported.
  "display_format" : "%0 %1", //Enter the format you would like the CRM object instance to display in the dropdown selector using the percent symbol and number to designate a property value. i.e '%1, %0' for ['first_name', 'last_name'] would yield the label 'Doe, John'. The default formatting is separated by spaces.
  "type" : "crmobject",
  "default" : {
    "id" : 1
  }

 */