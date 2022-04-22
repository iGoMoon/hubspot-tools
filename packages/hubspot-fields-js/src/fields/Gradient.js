const _HublField = require('./_HublField');

module.exports = class Gradient extends _HublField {

	constructor(data) {
		super(data);

		this.data = Object.assign(this.data, {
			/**
			 * @readonly
			 * @private
			 */
			type: "gradient",
			
			// Name and Label
			name: this.data.name || 'gradient_field',
			label: this.data.label || 'Gradient field'
		});
	}


}


  /**
   * This field provides a way for content creators to create and configure gradients. At
   * this time linear gradients support up to 5 color stops. Gradient fields have a .css
   * property that returns CSS based on the field's value. Gradient fields are supported
   * in modules. Gradient fields can only be used as style fields.
   * @see {@link https://developers.hubspot.com/en/docs/cms/building-blocks/module-theme-fields#gradient}
   * @see {@link https://developers.hubspot.com/docs/cms/building-blocks/module-theme-fields-overview#generated-css}
   * @param {object} data The JSON data used to generate the field.
   * @param {object} [data.default={}] Object containing directional settings for a
   * gradient ("side_or_corner") and color stops for the gradient as an array of objects.
   * @param {Array<object>} [data.default.colors] // @todo
   * @param {object} [data.default.colors.color] // @todo
   * @param {object} [data.default.side_or_corner] // @todo
   * @param {('LEFT'|'RIGHT'|'CENTER')/* @todo Not sure if these are right} [data.default.side_or_corner.horizontalSide] // @todo
   * @param {('TOP'|'BOTTOM'|'MIDDLE')/* @todo Not sure if these are right} [data.default.side_or_corner.verticalSide] // @todo

  
		"side_or_corner": {
			"verticalSide": "BOTTOM", //BOTTOM,TOP
			"horizontalSide": null // LEFT (Right to Left), Right (Left to right)
		},




		"colors": [
			{
				"color": {
					"r": 246,
					"g": 178,
					"b": 107,
					"a": 0.95
				}
			},
			{
				"color": {
					"r": 230,
					"g": 145,
					"b": 56,
					"a": 1
				}
			},
			{
				"color": {
					"r": 241,
					"g": 194,
					"b": 51,
					"a": 0.95
				}
			}
		]
	}


   */