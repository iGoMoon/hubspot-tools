const _HublField = require('./_HublField');

/**
 * @typedef {Object} AlignmentDefault 
 * @property {('LEFT'|'RIGHT'|'CENTER')} horizontal_align  Default for horizontal alignment when `HORIZONTAL` or `BOTH` is used for alignment_direction parameter
 * @property {('TOP'|'BOTTOM'|'MIDDLE')} vertical_align Default for vertical alignment when `VERTICAL` or `BOTH` is used for alignment_direction parameter
 * 
 * @typedef {('HORIZONTAL'|'VERTICAL'|'BOTH')} AlignmentDirection 
 * 
 * @typedef {Object} AlignmentDefinition
 * @property {AlignmentDefault} default Object containing "horizontal_align" and "vertical_align".
 * @property {AlignmentDirection} alignment_direction Determines if only horizontal, only vertical, or both alignment controls should be shown [default: "BOTH"]
 * 
 * @typedef {_HublField.FieldType & AlignmentDefinition} AlignmentType
 * Combine into complete definition for Alignment
 */

/**
 * Alignment Field Class
 * @since 2.0.0
 */
module.exports = class Alignment extends _HublField {

	/**
	 * Alignment Field Constructor
	 * 
	 * This field provides content creators a way to position an element within a container. This should not be used for text alignment as there is a field type specifically for that.
	 * 
	 * Alignment fields are supported in modules. Alignment fields can only be used as style fields.
	 * 
	 * @see {@link https://developers.hubspot.com/docs/cms/building-blocks/module-theme-fields#alignment}
	 * @see {@link https://developers.hubspot.com/docs/cms/building-blocks/module-theme-fields-overview#style-fields}
	 * @param {AlignmentType} data
	 */
	constructor(data) {
		super(data);

		this.data = Object.assign(this.data, {
			/**
			 * @readonly
			 * @private
			 */
			type: "alignment",
			
			// Name and Label
			name: this.data.name || 'alignment_field',
			label: this.data.label || 'Alignment field',
		});

		// Additional Keys
		this.direction(this.data.alignment_direction || 'BOTH'),
		// Default
		this.default(this.data.default)
	}

	/**
	 * Set Default
	 * @param {AlignmentDefault} data
	 */
	default(data = {}) {
		let { horizontal_align: h, vertical_align: v } = data
		// Set
		this.data.default = {
			horizontal_align: ['LEFT','RIGHT','CENTER'].includes(h = (h || this.data.default?.horizontal_align)?.toUpperCase()) ? h : null,
			vertical_align: ['TOP','BOTTOM','MIDDLE'].includes(v = (v || this.data.default?.vertical_align)?.toUpperCase()) ? v : null,
		}
		return this
	}

	/**
	 * Set alignment Direction type
	 * @param {AlignmentDirection} direction Determines if only horizontal, only vertical, or both alignment controls should be shown [default: "BOTH"]
	 */
	direction(direction) {
		direction = direction?.toUpperCase()
        this.data.alignment_direction = ['HORIZONTAL','VERTICAL','BOTH'].includes(direction) ? direction : 'BOTH';
        return this;
	}

	/**
	 * Set alignment direction as both
	 */
    bothDirections() {
        return this.direction('BOTH');
	}

	/**
	 * Set alignment direction as Vertical
	 */
    verticalOnly() {
        return this.direction('VERTICAL');
	}

	/**
	 * Set alignment direction as Horizontal
	 */
    horizontalOnly() {
        return this.direction('HORIZONTAL');
	}

}
