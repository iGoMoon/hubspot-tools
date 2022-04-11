const _HublField = require('./_HublField');
const { transformDataToJson } = require('../../src/lib/FieldTransformer')

/**
 * @typedef {Object} GroupDefinition
 * @property {Array<object>} children An array of fields and groups they contain.
 * @property {Boolean} expanded Field groups can be set to be expanded by default by setting the expanded boolean property to true in the fields.json group properties as shown in the example code above. Field groups are not expanded by default and **when using nested field groups, the parent group cannot make use of this property.**
 * @property {Array|Object} default Default value matching the structure of the fields within.
 * 
 * @typedef {_HublField.FieldType & GroupDefinition} GroupType
 * Combine into complete definition for Group
 */

/**
 * Group Field Class
 * @since 2.0.0
 */
module.exports = class Group extends _HublField {

	/**
	 * Group Field Constructor
	 * 
	 * When fields are related to each other often it makes sense for them to be displayed visually grouped. Both modules and themes support grouping multiple fields together.
	 * 
	 * @see {@link https://developers.hubspot.com/docs/cms/building-blocks/module-theme-fields-overview#field-groups}
	 * @param {GroupType} data
	 */
	constructor(data, children = []) {
		super(data);

		this.data = Object.assign(this.data, {
			/**
			 * @readonly
			 * @private
			 */
			type: "group",
			
			/**
			 * Tab defaults to CONTENT.
			 * Can be overrriden with `tab()`, `set()` or `isStyleGroup()`
			 */
			tab: "CONTENT",
			
			/**
			 * Display width is useless for groups.
			 * @private
			 * @readonly
			 */
			display_width : null,
			
			// Name and Label
			name: this.data.name || 'group',
			label: this.data.label || 'Group',

			// Additional Keys
			children: children || this.data.children || [],
			expanded: !!this.data.expanded,
		});
	}

    /**
     * Set any key.
     * @param {string} key 
     * @param {string} value 
     */
	set(key, value) {
		if (key.toLowerCase() == 'tab') {
			return this.tab(value)
		}
        super.set(key,value)
        return this;
	}

	/**
	 * Set if group should be expanded on load.
	 * Field groups can be set to be expanded by default by setting the expanded boolean property to true in the fields.json group properties as shown in the example code above. Field groups are not expanded by default and **when using nested field groups, the parent group cannot make use of this property.**
	 * @param {Boolean} flag
	 */
    expanded(flag = true) {
        this.data.expanded = !!flag;
        return this;
	}

	/**
	 * Set tab
	 * @param {('CONTENT'|'STYLE')} tab The tab that the field should appear on in the content editor. It may either be "content" (default) or "style".
	 */
	tab(tab) {
		tab = tab?.toUpperCase()
		if (tab == "STYLE") { 
			return this.isStyleGroup()
		}
		// Defaults to CONTENT in constructor
        return this;
	}

	/**
	 * Set if Group is a style group. Will return a StyleGroup instance.
	 */
    isStyleGroup() {
        return new (require('./StyleGroup'))(this.data);
	}

	/**
     * Set children for group.
     * @param {Array<object>} children An array of fields and groups they contain.
     */
	children(children = []) {
		this.data.children = children;
		return this;
    }

    /**
     * Return group as JSON. Used in Transform process.
	 * @private
     */
	toJSON() {
		this.data.children = transformDataToJson(this.data.children)
        return this.data
    }

}
