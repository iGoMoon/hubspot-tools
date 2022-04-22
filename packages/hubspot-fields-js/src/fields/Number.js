const _HublField = require('./_HublField');

/**
 * @typedef {Number} NumberDefault
 * @typedef {('text'|'slider')} NumberDisplay
 * @typedef {Number|null} NumberMin
 * @typedef {Number|null} NumberMax
 * @typedef {Number|null} NumberStep
 * @typedef {String|null} NumberSuffix
 * @typedef {String|null} NumberPrefix
 * 
 * @typedef {Object} NumberDefinition
 * @property {NumberDefault} default A default number to be used.
 * @property {NumberDisplay} display Use a text spinner or a slider to select the number
 * @property {NumberMin} min Minimum number that can be chosen
 * @property {NumberMax} max Maximum number that can be chosen
 * @property {NumberStep} step Increment between number choices
 * @property {NumberSuffix} suffix Added as a suffix to the number field. Note: Using the suffix parameters has no effect on the numerical value of the field.
 * @property {NumberPrefix} prefix Added as a prefix to the number field. Note: Using the prefix parameters has no effect on the numerical value of the field.
 * 
 * @typedef {_HublField.FieldType & NumberDefinition} NumberType
 * Combine into complete definition for Number
 */

/**
 * Number Field Class
 * @since 2.0.0
 */
module.exports = class Number extends _HublField {

	/**
	 * Number Field Constructor
	 * 
	 * Number fields provide an easy interface for content creators to enter in or adjust numerical values and options. This can be used for creating percentage based items or anything where numbers are needed for input.
	 * 
	 * Number fields are supported in modules. Number fields can be used as style fields.
	 * 
	 * @see {@link https://developers.hubspot.com/docs/cms/building-blocks/module-theme-fields#number}
	 * @see {@link https://developers.hubspot.com/docs/cms/building-blocks/module-theme-fields-overview#style-fields}
	 * @param {NumberType} data
	 */
	constructor(data) {
		super(data);

		this.data = Object.assign(this.data, {
			/**
			 * @readonly
			 * @private
			 */
			type: "number",
			
			// Name and Label
			name: this.data.name || 'number_field',
			label: this.data.label || 'Number field',
		});

		// Additional Params
		this.display(this.data.display)
		// Default
		this.default(this.data.default)
	}

	// "display": "text", "slider"
	// "step": 1,
	// "min": null,
	// "max": null
	
	/**
	 * Set Default
	 * @param {NumberDefault} number
	 */
	default(number) {
		this.data.default = parseInt(number || this.data.default) || null;
		return this
	}

	/**
	 * Set display type
	 * @param {NumberDisplay} display Use a "text" spinner or a "slider" to select the number
	 */
	display(display) {
		display = display?.toLowerCase()
        this.data.display = ['text','slider'].includes(display) ? display : 'text';
        return this;
	}

	/**
	 * Set display type as text
	 */
    text() {
        this.display('text');
        return this;
	}

	/**
	 * Set display type as slider
	 */
    slider() {
        this.display('slider');
        return this;
	}
	
	/**
	 * Set Prefix
	 * @param {NumberPrefix} prefix Added as a prefix to the number field. Note: Using the prefix parameters has no effect on the numerical value of the field.
	 */
	prefix(prefix) {
		prefix = (prefix || this.data.prefix);
		this.data.prefix = ['string', 'number'].includes(typeof prefix) ? prefix+'' : null;
		return this
	}

}


/**

 * @param {object} data The JSON data used to generate the field.
 * slider below the input.
 * @param {number} [data.min] The maximum value of the input.
 * @param {number} [data.max] The minimum value of the input.
 * @param {string} [data.prefix] Added as a prefix to the number field. 
 * They are simply for display purposes in the content editor.
 * @param {suffix} [data.suffix] Added as a suffix to the number field. Note: Using the
 * suffix and prefix parameters has no effect on the numerical value of the field.
 * They are simply for display purposes in the content editor.
 * @param {number} [data.step=1] The step attribute specifies the size of each movement
 * (an increment or jump between values). The step attribute is used to limit down the
 * amount of allowed values. // @todo Make sure this works with number input (i.e. can't enter values manually outside of step)
 */