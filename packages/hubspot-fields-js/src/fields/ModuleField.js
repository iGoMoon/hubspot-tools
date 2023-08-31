class ModuleField {

	/**
     * 
     */
	applyIf(show, callback) {
		if (!!show) {
			return callback(this)
        }
        return this;
    }

    /**
     * Set field Visibility
	 * 
     * @param {string} controllingField The controlling field name. Including nesting with group.name
     * @param {string} regex The regular expression in the controlling field that needs to be present for the field to display. The regex must match the entire string (not a subset) and is run case-sensitively.
     * @param {string} type The operator that defines how the controlling_value_regex value needs to be met.
     * @param {string} property Sets visibility based on a specific property of the target field. For example, you can enable visibility when an image field's src property is equal to a specific value. By default, if no value is provided for this field, visibility is based on the stringified value of controlling_value_regex.
     */
    visibleIf(controlling_field_path, regex, type = "EQUAL", property) {
        if (!this.data.visibility) {
            this.data.visibility = {};
        }

        this.data.visibility = Object.assign(this.data.visibility, {
            "controlling_field_path": controlling_field_path,
            "controlling_value_regex": regex,
			"operator": type || 'EQUAL',
			property,
        });

        return this;
	}
	
	/**
     * Set Advanced field Visibility
	 * 
	 * Only applies if more than 1 rule. Operator defaults to "EQUAL" if ommitted
	 * 
	 * @example
	 * .advancedVisibleIf([
	 * 	["text_field", "value","EQUAL"],
	 * 	["text_field", null ,"NOT_EMPTY"],
	 * ],"OR")
	 * OR
	 * .advancedVisibleIf([
	 * 	{ controlling_field_path: "text_field",controlling_value_regex: "value",operator: "EQUAL"},
	 * 	["text_field", null ,"NOT_EMPTY"]
	 * ])
	 * 
     * @param {[string,string,string,string][]|object[]} criteria
 	 * @param {string} [operator="AND"] The operator that defines how the controlling_value_regex value needs to be met.
	 */
	advancedVisibleIf(criteria = [], operator = "AND") {
		if (criteria.length == 1) { 
			let [controlling_field_path, regex, operator, property] = criteria[0] || []
			return this.visibleIf(controlling_field_path, regex, operator || null, property)
		}
		 
		if (!this.data.advanced_visibility) {
			this.data.advanced_visibility = {};
		}

		criteria = criteria.map(c => {
			if (typeof c != 'object') {
				return null
			}
			if (Array.isArray(c) && c.length > 1) {
				let [field, value, operator = "EQUAL", property] = c
				c = { controlling_field_path : field, controlling_value_regex : value, operator, property, ...c }
			}
			return c
		}).filter(c => !!c)
		
		this.data.visibility_rules = "ADVANCED";
		this.data.advanced_visibility = {
			boolean_operator : ['AND','OR'].includes(operator) ? operator : 'AND',
			criteria
		}

        return this;
	}

    /**
     * Group should repeat
     * @param {Object} overrides 
     */
    repeat(overrides = {}) {
        this.data.occurrence = Object.assign({
            "min": null,
            "max": null,
            "sorting_label_field": null,
            "default": null
        }, overrides);
        this.data.default = [];

        return this;
    }

    /**
     * 
     * @param {object} subFields eg. {opacity: true}
     */
    hiddenSubfields(subFields) {
        if (!this.data.visibility) {
            this.data.visibility = {};
        }

        this.data.visibility.hidden_subfields = subFields;
        return this;
    }

    /**
     * Set Access
     * @param {Array} scopes 
     * @param {Array} gates 
     * @param {['HAS_ALL','HAS_ANY','HAS_NONE']} operator 
     */
    setAccess(scopes = [], gates = [], operator = 'HAS_ALL') {
        if (!this.data.visibility) {
            this.data.visibility = {};
        }

		"access": {
			"operator": "HAS_ALL",
			"scopes": [],
			"gates": [
				"ContextualAutomation:FormsEmailsAccess"
			]
		}

		this.data.visibility.access = {
			operator,
			scopes,
			gates
		};
        return this;
    }

    /**
     * Set name and label
     * @param {String} name 
     * @param {String} label 
     */
    name(name, label) {
        this.data.name = name;
        this.data.label = label;
        return this;
    }

    /**
     * Set inline help text
     * @param {String} text 
     */
    inlineHelpText(text) {
        this.data.inline_help_text = text;
        return this;
    }

    /**
     * Set help text
     * @param {String} text 
     */
    helpText(text) {
        this.data.help_text = text;
        return this;
    }

    /**
     * Determines if the field can be left blank in the editor. If true, content will not be allowed to publish without filling out this field.
     * @param {boolean}
     */
    required(required = true) {
        this.data.required = Boolean(required);
        return this;
    }

    /**
     * Determines if the field is editable in the content editor. If "true", the field will not appear in the content editor.
     * @param {boolean} 
     */
    locked(locked = true) {
        this.data.locked = Boolean(locked);
        return this;
    }

    /**
     * Set any key.
     * @param {string} key 
     * @param {string} value 
     */
    set(key, value) {
        this.data[key] = value;
        return this;
    }

    /**
     * Set id
     * @param {String} id 
     */
    id(id) {
        this.data.id = id;
        return this;
    }

    /**
     * Set label
     * @param {String} label 
     */
    label(label) {
        this.data.label = label;
        return this;
    }

    /**
     * Set default value of field
     * @param {*} value 
     */
    default(value) {
        this.data.default = value;
        return this;
	}

    /**
     * Set chocies for choice
     * @param {Array} choices
     */
	choices(choices = []) {
		if (this.data.type == 'choice') {
			this.data.choices = choices;
		}
        return this;
    }

    /**
     * Set children for choice
     * @param {Array} children
     */
	children(children = []) {
		if (this.data.type == 'group') {
			this.data.children = children;
		}
        return this;
    }

}

module.exports = ModuleField;