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


/**
 * Icon fields provide an icon picker UI to make it easier for content creators to add
 * icons to your modules. The Icon field is preloaded with FontAwesome Icons. Icon fields
 * are supported in modules. Icon fields can be used as style fields.
 * @see {@link https://developers.hubspot.com/en/docs/cms/building-blocks/module-theme-fields#icon}
 * @param {object} data The JSON data used to generate the field.
 * @param {object} [data.default={}] Icon object. // @todo Document subproperties
 * @param {('fontawesome-5.14.0'|'fontawesome-5.0.10')} [data.icon_set='fontawesome-5.14.0']
 * The FontAwesome icon set to use. Possible values are "fontawesome-5.14.0" or
 * "fontawesome-5.0.10"
 * 
 * icon_field={name=angle-double-down, unicode=f103, type=SOLID, icon_set=fontawesome-5.14.0}}
 */