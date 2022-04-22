const _HublField = require('./_HublField');

/**
 * @typedef {('default'|Number)} BlogDefault 
 * 
 * @typedef {Object} BlogDefinition
 * @property {BlogDefault} default Specifies which blog is selected by default. This parameter accepts arguments of either 'default' or a blog ID (available in the URL of the Blog dashboard).
 * 
 * @typedef {_HublField.FieldType & BlogDefinition} BlogType
 * Combine into complete definition for Blog
 */

/**
 * Blog Field Class
 * @since 2.0.0
 */
module.exports = class Blog extends _HublField {

	/**
	 * Blog Field Constructor
	 * 
	 * This field provides a way for content editors to select a blog, providing you, the developer the blog's id. This is useful for situations like pulling teaser information for featured blogs in modules.
	 * 
	 * Blog fields are supported in modules.
	 * 
	 * @see {@link https://developers.hubspot.com/docs/cms/building-blocks/module-theme-fields#blog}
	 * @param {BlogType} data
	 */
	constructor(data) {
		super(data);

		this.data = Object.assign(this.data, {
			/**
			 * @readonly
			 * @private
			 */
			type: "blog",
			
			// Name and Label
			name: this.data.name || 'blog_field',
			label: this.data.label || 'Blog field'
		});

		// Default
		this.default(this.data.default)
	}

	/**
	 * Set Default
	 * @param {BlogDefault} blogId Specifies which blog is selected by default. This parameter accepts arguments of either 'default' or a blog ID (available in the URL of the Blog dashboard).
	 */
	default(blogId = null) {
		this.data.default = (blogId != 'default' && !isNaN(blogId = parseInt(blogId))) ? blogId : 'default'
		return this
	}

}
