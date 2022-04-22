const _HublField = require('./_HublField');

module.exports = class Spacing extends _HublField {

	constructor(data) {
		super(data);

		this.data = Object.assign(this.data, {
			/**
			 * @readonly
			 * @private
			 */
			type: "spacing",
			
			name: this.data.name || 'spacing_field',
			label: this.data.label || 'Spacing field',
			default : this.data.default || {
				padding: null,
				margin: null
			} 
		});
	}

}


/*
   * This field provides a user interface (UI) for content creators to set padding and
   * margin. Spacing fields have a .css property that returns CSS based on the field's
   * value. Learn more about the generated CSS property. Spacing fields are supported in
   * modules. Spacing fields can only be used as style fields.
   * @see {@link https://developers.hubspot.com/en/docs/cms/building-blocks/module-theme-fields#spacing}
   * @see {@link https://developers.hubspot.com/docs/cms/building-blocks/module-theme-fields-overview#generated-css}
   * @param {object} data The JSON data used to generate the field.
   * @param {object} [data.default={}] object containing a padding object and margin object.
   * Margin at this time only supports "top" and "bottom" adjustments.
   * @param {object} [data.default.padding] // @todo
   * @param {object} [data.default.padding.top] // @todo
   * @param {number} [data.default.padding.top.value] // @todo
   * @param {string} [data.default.padding.top.units] // @todo
   * @param {object} [data.default.padding.bottom] // @todo
   * @param {number} [data.default.padding.bottom.value] // @todo
   * @param {string} [data.default.padding.bottom.units] // @todo
   * @param {object} [data.default.padding.left] // @todo
   * @param {number} [data.default.padding.left.value] // @todo
   * @param {string} [data.default.padding.left.units] // @todo
   * @param {object} [data.default.padding.right] // @todo
   * @param {number} [data.default.padding.right.value] // @todo
   * @param {string} [data.default.padding.right.units] // @todo
   * @param {object} [data.default.margin] // @todo
   * @param {object} [data.default.margin.top] // @todo
   * @param {number} [data.default.margin.top.value] // @todo
   * @param {string} [data.default.margin.top.units] // @todo
   * @param {object} [data.default.margin.bottom] // @todo
   * @param {number} [data.default.margin.bottom.value] // @todo
   * @param {string} [data.default.margin.bottom.units] // @todo



    "default" : {
      "margin" : {
        "top" : {
          "value" : -43,
          "units" : "px"
        },
        "bottom" : {
          "value" : -92,
          "units" : "px"
        }
      },
      "padding" : {
        "top" : {
          "value" : 36,
          "units" : "px"
        },
        "bottom" : {
          "value" : 39,
          "units" : "px"
        },
        "left" : {
          "value" : 38,
          "units" : "px"
        },
        "right" : {
          "value" : 33,
          "units" : "px"
        }
      }
    }


*/