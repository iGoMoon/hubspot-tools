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
 * @property {NumberStep} step The step attribute specifies the size of each movement (an increment or jump between values). The step attribute is used to limit down the amount of allowed values. [default=1]
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
		this.step(this.data.step)
		// Default
		this.default(this.data.default)
	}
	
	/**
	 * Set Default
	 * @param {NumberDefault} number
	 */
	default(number) {
		number = parseInt(number || this.data.default) || 0
		this.data.default = number || null;
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
	 * Set the minimum value
	 * @param {NumberMin} value Minimum number that can be chosen.
	 */
	min(value) {
		this.data.min = !isNaN(value = parseInt(value || this.data.min)) ? value : null;
        return this;
	}

	/**
	 * Set the maximum value
	 * @param {NumberMax} value Maximum number that can be chosen.
	 */
	max(value) {
		this.data.max = !isNaN(value = parseInt(value || this.data.max)) ? value : null;
		return this;
	}

	/**
	 * Set the step value
	 * @param {NumberStep} value The step attribute specifies the size of each movement (an increment or jump between values). The step attribute is used to limit down the amount of allowed values.
	 */
	step(value) {
		this.data.step = !isNaN(value = parseInt(value || this.data.step)) ? value : 1;
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
	
	/**
	 * Set Suffix
	 * @param {NumberSuffix} suffix Added as a suffix to the number field. Note: Using the suffix parameters has no effect on the numerical value of the field.
	 */
	suffix(suffix) {
		suffix = (suffix || this.data.suffix);
		this.data.suffix = ['string', 'number'].includes(typeof suffix) ? ''+suffix : null;
		return this
	}

}