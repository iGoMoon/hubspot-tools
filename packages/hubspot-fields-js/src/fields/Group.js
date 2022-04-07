const ModuleField = require('./ModuleField');
const { transformDataToJson } = require('../lib/FieldTransformer')

class Group extends ModuleField {

    constructor(overrides = {}, children) {
        super();
        this.data = Object.assign({
            "name": "group",
            "label": "Group",
            "required": false,
            "locked": false,
            "children": children,
            "type": "group",
            "inline_help_text": "",
            "help_text": "",
            "default": {}
        }, overrides);
    }


    /**
     * Return field as JSON
     */
	toJSON() {
		this.data.children = transformDataToJson(this.data.children.filter(c => !!c))
        return this.data
    }


}

module.exports = Group;