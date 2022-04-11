const _HublField = require('./_HublField');

/**
 * @typedef {Object} BooleanDefinition
 * @property {Boolean} default Sets whether the default state of this field is true or false.
 * @property {('checkbox'|'toggle')} display Choose the visual display style for the field. Can appear as either a "toggle" or a "checkbox".
 * 
 * @typedef {_HublField.FieldType & BooleanDefinition} BooleanType
 * Combine into complete definition for Boolean
 */

/**
 * Boolean Field Class
 * @since 2.0.0
 */
module.exports = class Boolean extends _HublField {

	/**
	 * Boolean Field Constructor
	 * 
	 * This field provides a way for content editors to enable/disable functionality. Booleans can only be true or false. Often it makes sense to make groups or fields conditional based on boolean fields. If you think you might need to provide more than two states down the road, a Choice field may be a better option as you can grow into that with less effort should needs change later.
	 * 
	 * @see {@link https://developers.hubspot.com/docs/cms/building-blocks/module-theme-fields#boolean}
	 * @param {BooleanType} data
	 */
	constructor(data) {
		super(data);

		this.data = Object.assign(this.data, {
			/**
			 * @readonly
			 * @private
			 */
			type: "boolean",
			
			// Name and Label
			name: this.data.name || 'boolean_field',
			label: this.data.label || 'Boolean field'
		});
	}

	/**
	 * Set display type
	 * @param {('checkbox'|'toggle')} display Choose the visual display style for the field. Can appear as either a "toggle" or a "checkbox".
	 */
	display(display) {
		display = display?.toLowerCase()
        this.data.display = ['checkbox','toggle'].includes(display) ? display : 'checkbox';
        return this;
	}

	/**
	 * Set display type as checkbox
	 */
    checkbox() {
        this.display('checkbox');
        return this;
	}

	/**
	 * Set display type as toggle
	 */
    toggle() {
        this.display('toggle');
        return this;
	}

}
