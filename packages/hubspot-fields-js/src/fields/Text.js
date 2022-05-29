const _HublField = require('./_HublField');

/**
 * @typedef {string} TextDefault
 * @typedef {RegExp} TextValidation
 * @typedef {boolean} TextNewLine
 * @typedef {boolean} TextShowEmoji 
 * 
 * @typedef {Object} TextDefinition
 * @property {TextDefault} default Default Text to show in Field
 * @property {TextValidation} validation_regex Set Validation Regex to test value against on input
 * @property {TextNewLine} allow_new_line Allow Multiple Lines
 * @property {TextShowEmoji} show_emoji_picker Emoji
 * 
 * Combine into complete definition for Text
 * @typedef {_HublField.FieldType & TextDefinition} TextType
 */

/**
 * Text Field Class
 * @since 2.0.0
 */
module.exports = class Text extends _HublField {

	/**
	 * Text Field Constructor
	 * 
	 * Text fields provide content creators a simple text editing experience with no rich text functionality. Text fields initially show as a single line, but can actually expand to be textareas, supporting multiple lines. Use these when you do not want content creators to have control over formatting. If you do want to provide formatting controls use rich text fields. Text fields are supported in modules.
	 * 
	 * @see {@link https://developers.hubspot.com/en/docs/cms/building-blocks/module-theme-fields#text}
	 * @param {TextType} data
	 */
	constructor(data) {
		super(data);

		this.data = Object.assign(this.data, {
			/**
			 * @readonly
			 * @private
			 */
			type: "text",
			
			// Name and Label
			name: this.data.name || 'text',
			label: this.data.label || 'Text'
		});

		// Additional Keys
		this.validationRegex(this.data.validation_regex);
		this.allowNewLine(!!this.data.allow_new_line);
		this.emojiPicker(!!this.data.show_emoji_picker);
		// Default
		this.default(this.data.default)
	}

	/**
	 * Set Validation Regex to test value against on input
	 * @param {TextValidation} value
	 */
	validationRegex(value) {
        this.data.validation_regex = value || '';
        return this;
	}

	/**
	 * Set if multiple lines are allowed
	 * @param {TextNewLine} flag
	 */
    allowNewLine(flag = true) {
        this.data.allow_new_line = !!flag;
        return this;
	}
	
	/**
	 * Allow multiple lines
	 */
    multipleLines() {
        this.allowNewLine(true)
        return this;
    }
	
	/**
	 * Disallow multiple lines. Default Behaviour.
	 */
    singleLine() {
        this.allowNewLine(false)
        return this;
    }

	/**
	 * Set if Emoji Picker should show in Text Field
	 * @param {TextShowEmoji} flag
	 */
    emojiPicker(flag = true) {
        this.data.show_emoji_picker = !!flag;
        return this;
    }
	
	/**
	 * Show Emoji Picker
	 */
	showEmojiPicker() {
        this.emojiPicker(true)
        return this;
    }

}
