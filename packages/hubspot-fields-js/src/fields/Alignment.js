const _HublField = require('./_HublField');

module.exports = class Alignment extends _HublField {

	constructor(data) {
		super(data);

		this.data = Object.assign(this.data, {
			/**
			 * @readonly
			 * @private
			 */
			type: "alignment",
			
			name: this.data.name || 'alignment_field',
			label: this.data.label || 'Alignment field',
			default : this.data.default || {
				horizontal_align: null,
				vertical_align: null
			} 
		});
	}

	//alignment_direction

}
