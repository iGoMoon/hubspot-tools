const _HublField = require('./_HublField');

module.exports = class Number extends _HublField {

	constructor(data) {
		super(data);

		this.data = Object.assign(this.data, {
			/**
			 * @readonly
			 * @private
			 */
			type: "number",
			
			name: this.data.name || 'number_field',
			label: this.data.label || 'Number field',

			step: this.data.step || 1
		});
	}

	// "display": "text", "slider"
	// "step": 1,
	// "min": null,
	// "max": null

}


/**
 * Number fields provide an easy interface for content creators to enter in or adjust
 * numerical values and options. This can be used for creating percentage based items or
 * anything where numbers are needed for input. Number fields are supported in modules.
 * Number fields can be used as style fields.
 * @see {@link https://developers.hubspot.com/en/docs/cms/building-blocks/module-theme-fields#number}
 * @param {object} data The JSON data used to generate the field.
 * @param {number|null} [data.default=null] A default number to be used.
 * @param {'slider'|undefined} [data.display] If set to "slider", displays a number
 * slider below the input.
 * @param {number} [data.min] The maximum value of the input.
 * @param {number} [data.max] The minimum value of the input.
 * @param {string} [data.prefix] Added as a prefix to the number field. Note: Using the
 * suffix and prefix parameters has no effect on the numerical value of the field.
 * They are simply for display purposes in the content editor.
 * @param {suffix} [data.suffix] Added as a suffix to the number field. Note: Using the
 * suffix and prefix parameters has no effect on the numerical value of the field.
 * They are simply for display purposes in the content editor.
 * @param {number} [data.step=1] The step attribute specifies the size of each movement
 * (an increment or jump between values). The step attribute is used to limit down the
 * amount of allowed values. // @todo Make sure this works with number input (i.e. can't enter values manually outside of step)
 */