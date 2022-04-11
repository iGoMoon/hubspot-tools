const _HublField = require('./_HublField');

/**
 * @typedef {Object} ChoiceDefinition
 * @property {Array<Array<string>>} choices Array of value and label pairs. Values are listed first. {@example: [['value 1', 'Label 1'], ['value 2', 'Label 2']]}
 * @property {String} default Sets the default selected value from the choice array.
 * @property {Boolean} multiple Optional. To allow multiple options to be selected, set the value to true. 
 * @property {('select'|'radio'|'checkbox')} display Set the field's appearance. When not including multiple, you can set this as either "radio" or "select". When multiple is set to true, you can set this as either "checkbox" or "select".
 * 
 * @typedef {_HublField.FieldType & ChoiceDefinition} ChoiceType
 * Combine into complete definition for Choice
 */

/**
 * Choice Field Class
 * @since 2.0.0
 */
module.exports = class Choice extends _HublField {

	/**
	 * Choice Field Constructor
	 * 
	 * Choice fields allow a content creator to select one or more items from a list of options, either within a dropdown menu, radio select, or checkboxes.
	 * 
	 * The options for a choice field can have separate labels for their values. After a module's been used in a page, the option labels can be modified without impacting sites, since the value is still the same. Changing the value, however, and any modules that previously had that value will become disassociated.
	 * 
	 * @see {@link https://developers.hubspot.com/docs/cms/building-blocks/module-theme-fields#choice}
	 * @param {ChoiceType} data
	 */
	constructor(data) {
		super(data);

		this.data = Object.assign(this.data, {
			/**
			 * @readonly
			 * @private
			 */
			type: "choice",
			
			// Name and Label
			name: this.data.name || 'choice_field',
			label: this.data.label || 'Choice field',

			// Additional Keys
			choices: this.data.choices || [ [ 'value 1', 'Example Label 1' ], [ 'value 2', 'Example Label 2' ] ],
		});
	}

	/**
	 * Set display type
	 * @param {('select'|'radio'|'checkbox')} display Set the field's appearance. When not including multiple, you can set this as either "radio" or "select". When multiple is set to true, you can set this as either "checkbox" or "select".
	 */
	display(display) {
		display = display?.toLowerCase()
        this.data.display = ['select','radio','checkbox'].includes(display) ? display : 'select';
        return this;
	}

	/**
	 * Set display type as select
	 */
    select() {
        this.display('select');
        return this;
	}

	/**
	 * Set display type as radio if single or checkbox if multiple select
	 */
    radio() {
        this.display(this.data.multiple ? 'checkbox' : 'radio');
        return this;
	}

	/**
	 * Set display type as radio if single or checkbox if multiple select.
	 * Alias for `radio()`
	 */
    checkbox() {
        this.radio();
        return this;
	}

	/**
	 * Allow multiple options to be selected
	 * @param {Boolean} multiple Optional. To allow multiple options to be selected, set the value to true. 
	 */
    multiple(flag = true) {
        this.data.multiple = !!flag;
        return this;
	}

	/**
     * Set children for choice.
     * @param {Array<Array<string>>} choices Array of value and label pairs. Values are listed first. {@example: [['value 1', 'Label 1'], ['value 2', 'Label 2']]}
     */
	choices(choices = []) {
		this.data.choices = choices;
		return this;
    }

}
