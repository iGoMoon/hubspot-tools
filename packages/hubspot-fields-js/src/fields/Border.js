const _HublField = require('./_HublField');

/**
 * @typedef {Object} BorderSide 
 * @property {Object} width Object Container value and Units
 * @property {Number} width.value Border width amount 
 * @property {('px'|'rem'|'em'|'pt'|'pc'|'in'|'mm'|'cm')} width.units Units for border width [default: "px"]
 * @property {Number} opacity Opacity value for border color [default: 100]
 * @property {('dotted'|'dashed'|'solid'|'double'|'groove'|'ridge'|'inset'|'outset'|'initial'|'inheirt'|'none')} style Style of Border [default: "solid"]
 * @property {String} color Hex value for color of border
 * 
 * @typedef {Object} BorderDefault 
 * @property {BorderSide} top Defintion for top border
 * @property {BorderSide} bottom Defintion for bottom border
 * @property {BorderSide} left Defintion for left border
 * @property {BorderSide} right Defintion for right border
 * 
 * @typedef {Boolean} BorderCustomSides 
 * 
 * @typedef {Object} BorderDefinition
 * @property {BorderDefault} default Object with keys for border radius, top, bottom, left, and right sides.
 * @property {BorderCustomSides} allow_custom_border_sides If true, allow each side to be defined individually in content editor. [default: false]
 * 
 * @typedef {_HublField.FieldType & BorderDefinition} BorderType
 * Combine into complete definition for Border
 */

/**
 * Border Field Class
 * @since 2.0.0
 */
module.exports = class Border extends _HublField {

	/**
	 * Border Field Constructor
	 * 
	 * This field provides content creators a user interface for creating a border around an element. Border fields have a .css property that returns CSS based on the field's value. 
	 * 
	 * Border fields are supported in modules. Border fields can only be used as style fields.
	 * 
	 * @see {@link https://developers.hubspot.com/en/docs/cms/building-blocks/module-theme-fields#border}
	 * @see {@link https://developers.hubspot.com/docs/cms/building-blocks/module-theme-fields-overview#style-fields}
	 * @see {@link https://developers.hubspot.com/docs/cms/building-blocks/module-theme-fields-overview#generated-css}
	 * @param {BorderType} data
	 */
	constructor(data) {
		super(data);

		this.data = Object.assign(this.data, {
			/**
			 * @readonly
			 * @private
			 */
			type: "border",
			
			// Name and Label
			name: this.data.name || 'border_field',
			label: this.data.label || 'Border field'
		});

		// Additional Keys
		this.customSides(this.data.allow_custom_border_sides)
		// Default
		this.default(this.data.default)
	}

	/**
	 * Set Default
	 * @param {BorderDefault} data
	 * 
     * @example {
     *   top: {
     *     width: {
     *       value: 1,
     *       units: 'px'
     *     },
     *     opacity: 100,
     *     style: 'solid',
     *     color: '#ffffff'
     *   },
     *   bottom: {
     *     width: {
     *       value: 1,
     *       units: 'px'
     *     },
     *     opacity: 100,
     *     style: 'solid',
     *     color: '#ffffff'
     *   },
     *   left: null,
     *   right: null
     * }
	 */
	default(data = {}) {
		let { top: t, bottom: b, left: l, right: r } = data
		// Set
		this.defaultSide('top',t)
		this.defaultSide('bottom',b)
		this.defaultSide('left',l)
		this.defaultSide('right', r)
		
		return this
	}

	/**
	 * Set Default for a Specific Side
	 * @param {('top'|'bottom'|'left'|'right')} side
	 * @param {BorderSide} data
	 */
	defaultSide(side, data) {
		// Define Options
		let validOptions = {
			sides: ['top','bottom','left','right'],
			units: ['px','rem','em','pt','pc','in','mm','cm'],
			style: ['dotted','dashed','solid','double','groove','ridge','inset','outset','initial','inheirt','none']
		}

		// Valid Side?
		if (validOptions.sides.indexOf(side = side?.toLowerCase()) < 0) {
			return this
		}

		// Make sure parent Object is set
		this.data.default = this.data.default || {}

		// Return Null?
		if (!data) {
			this.data.default[side] = null;
			return this
		}
		
		// Destructure
		let { width: w = {}, opacity: o, style: s, color: c } = data
		let { value: v, units: u } = w

		// Set
		this.data.default[side] = {
			width: {
				value : parseInt(v || this.data.default[side]?.width?.value) || 1,
				units : validOptions.units.includes(u = (u || this.data.default[side]?.width?.units)?.toLowerCase()) ? u : 'px'
			},
			opacity: parseInt(o || this.data.default[side]?.opacity) || 100,
			style: validOptions.style.includes(s = (s || this.data.default[side]?.style)?.toLowerCase()) ? u : 'solid',
			color: (!!c && new RegExp(/^#([0-9A-Fa-f]{3}){1,2}$/,'i').test(c || this.data.default[side]?.color)) ? c : '#000000'
		}
		return this
	}

	/**
	 * Set Border Custom Sides
	 * @param {BorderCustomSides} flag If true, allow each side to be defined individually in content editor.
	 */
	customSides(flag = false) {
        this.data.allow_custom_border_sides = !!flag;
        return this;
	}

}