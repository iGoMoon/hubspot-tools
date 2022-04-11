const _HublField = require('./_HublField');

module.exports = class Icon extends _HublField {

	constructor(data) {
		super(data);

		this.data = Object.assign(this.data, {
			/**
			 * @readonly
			 * @private
			 */
			type: "icon",
			
			name: this.data.name || 'icon_field',
			label: this.data.label || 'Icon field'
		});
	}

	// this.default.type = this.default.type.toUpperCase?.(); 
	// icon_set

	/**
     * @example
     * default: {
     *   name: 'accessible-icon',
     *   unicode: 'f368',
     *   type: 'regular'
     * }
     */

}
