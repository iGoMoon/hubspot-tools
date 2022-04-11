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
