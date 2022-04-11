const _HublField = require('./_HublField');

module.exports = class Menu extends _HublField {

	constructor(data) {
		super(data);

		this.data = Object.assign(this.data, {
			/**
			 * @readonly
			 * @private
			 */
			type: "menu",
			
			name: this.data.name || 'menu_field',
			label: this.data.label || 'Menu field',

			default : this.data.default || "default"
		});
	}

}
