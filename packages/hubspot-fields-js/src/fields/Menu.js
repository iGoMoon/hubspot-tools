const _HublField = require('./_HublField');

/**
 * @typedef {Number} MenuDefault 
 * 
 * @typedef {Object} MenuDefinition
 * @property {MenuDefault} default The menu ID for the menu. The default value of null, defaults to the default menu under navigation. {@link https://app.hubspot.com/l/menus}
 * 
 * @typedef {_HublField.FieldType & MenuDefinition} MenuType
 * Combine into complete definition for Menu
 */

/**
 * Menu Field Class
 * @since 2.0.0
 */
module.exports = class Menu extends _HublField {

	/**
	 * Menu Field Constructor
	 * 
	 * Menu fields provide an easy interface for content creators to create, edit and select a navigation menu that is re-usable on other pages. This field is great for use in menus that are used across multiple pages like main navigation and footer navigation and other global content.  Use this field in tandem with the menu tag or menu() function, to render a menu inside of your module. For menus that don't make sense to re-use on other pages, like a table of contents menu, use the simple menu field.
	 * 
	 * Menu fields are supported in modules.
	 * 
	 * @see {@link https://developers.hubspot.com/en/docs/cms/building-blocks/module-theme-fields#menu}
	 * @param {MenuType} data
	 */
	constructor(data) {
		super(data);

		this.data = Object.assign(this.data, {
			/**
			 * @readonly
			 * @private
			 */
			type: "menu",
			
			// Name and Label
			name: this.data.name || 'menu_field',
			label: this.data.label || 'Menu field'
		});

		// Default
		this.default(this.data.default)
	}

	/**
	 * Set Default Menu ID
	 * @param {MenuDefault} menuId The menu ID for the menu. The default value of null, defaults to the default menu under navigation. {@link https://app.hubspot.com/l/menus}
	 */
	default(menuId) {
		this.data.default = (menuId != 'default' && !isNaN(menuId = parseInt(menuId))) ? menuId : 'default'	
		return this
	}

}
