const _HublField = require('./_HublField');

module.exports = class DateTime extends _HublField {

	constructor(data) {
		super(data);

		this.data = Object.assign(this.data, {
			/**
			 * @readonly
			 * @private
			 */
			type: "datetime",
			
			name: this.data.name || 'datetime_field',
			label: this.data.label || 'Date and time field'
		});
	}

	/**
	 * @param {number} step
	 */
    step(value) {
        this.data.step = value;
        return this;
	}

}
