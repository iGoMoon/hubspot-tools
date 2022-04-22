const _HublField = require('./_HublField');

module.exports = class RichText extends _HublField {

	constructor(data) {
		super(data);

		this.data = Object.assign(this.data, {
			/**
			 * @readonly
			 * @private
			 */
			type: "richtext",
			
			name: this.data.name || 'richtext_field',
			label: this.data.label || 'Rich text field'
		});
	}

	//enabled_features

}


/**
 * Rich Text fields provide content creators with a WYSIWYG text editor experience. When
 * a rich text field's value is printed it is printed as HTML. When you do not want
 * content creators to have formatting capabilities use text fields. Rich text fields
 * are supported in modules.
 * @see {@link https://developers.hubspot.com/en/docs/cms/building-blocks/module-theme-fields#rich-text}
 * @param {object} data The JSON data used to generate the field.
 * @param {string|null} [data.default=null] String of content to be displayed supports
 * HTML. Note: You cannot use the `get_asset_url` function within this default property.
 * @param {Array<string>} [data.enabled_features] An array of items that
 * allows you to configure the Rich Text Editor Toolbar and what options are available
 * for content editors. Array options are "colors", "fonts", "indents", "lists",
 * "standard_emphasis", "advanced_emphasis", "glyphs", "block", "font_family",
 * "font_size", "bold", "italic", "underline", "text_color", "background_color",
 * "alignment", "bulleted_list", "numbered_list", "lineheight", "outdent", "indent",
 * "strikethrough", "superscript", "subscript", "code_format", "link", "image", "emoji",
 * "personalize", "cta", "embed", "video", "table", "charmap", "anchor", "hr",
 * "nobreaking_space", "icon", "source_code", "visual_blocks".
 * {@link https://developers.hubspot.com/docs/cms/building-blocks/module-theme-fields/rich-text-editor}
 */