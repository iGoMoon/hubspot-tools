const _HublField = require('./_HublField');

module.exports = class _StaticFields extends _HublField {

	/**
	 * Alignment field
	 * @deprecated {@since 2.0.0} Instantiate the class for this field type instead: `new Alignment()`
	 */
	static alignment = (overrides = {}) => new (require('./Alignment'))(overrides);

	/**
	 * Background Image field
	 * @deprecated {@since 2.0.0} Instantiate the class for this field type instead: `new BackgroundImage()`
	 */
	static blog = (overrides = {}) => new (require('./BackgroundImage'))(overrides);

	/**
	 * Blog field
 	 * @deprecated {@since 2.0.0} Instantiate the class for this field type instead: `new Blog()`
	 */
	static blog = (overrides = {}) => new (require('./Blog'))(overrides);

	/**
	 * Boolean field
 	 * @deprecated {@since 2.0.0} Instantiate the class for this field type instead: `new Boolean()`
	 */
	static boolean = (overrides = {}) => new (require('./Boolean'))(overrides);

	/**
	 * Border field
 	 * @deprecated {@since 2.0.0} Instantiate the class for this field type instead: `new Border()`
	 */
	static border = (overrides = {}) => new (require('./Border'))(overrides);

	/**
	 * Choice field
 	 * @deprecated {@since 2.0.0} Instantiate the class for this field type instead: `new Choice()`
	 */
	static choice = (overrides = {}, choices = []) => new (require('./Choice'))(overrides).choices(choices);

	/**
	 * Color field
 	 * @deprecated {@since 2.0.0} Instantiate the class for this field type instead: `new Color()`
	 */
	static color = (overrides = {}) => new (require('./Color'))(overrides);

	/**
	 * CRM Object field
 	 * @deprecated {@since 2.0.0} Instantiate the class for this field type instead: `new CrmObject()`
	 */
	static crmObject = (overrides = {}) => new (require('./CrmObject'))(overrides);

	/**
	 * CRM Object Property field
 	 * @deprecated {@since 2.0.0} Instantiate the class for this field type instead: `new CrmObjectProperty()`
	 */
	static CrmObjectProperty = (overrides = {}) => new (require('./CrmObjectProperty'))(overrides);

	/**
	 * Cta field
 	 * @deprecated {@since 2.0.0} Instantiate the class for this field type instead: `new Cta()`
	 */
	static cta = (overrides = {}) => new (require('./Cta'))(overrides);

	/**
	 * Date field
 	 * @deprecated {@since 2.0.0} Instantiate the class for this field type instead: `new Date()`
	 */
	static date = (overrides = {}) => new (require('./Date'))(overrides);

	/**
	 * DateTime field
 	 * @deprecated {@since 2.0.0} Instantiate the class for this field type instead: `new DateTime()`
	 */
	static dateTime = (overrides = {}) => new (require('./DateTime'))(overrides);

	/**
	 * Email field
 	 * @deprecated {@since 2.0.0} Instantiate the class for this field type instead: `new Email()`
	 */
	static email = (overrides = {}) => new (require('./Email'))(overrides);

	/**
	 * Embed field
 	 * @deprecated {@since 2.0.0} Instantiate the class for this field type instead: `new Embed()`
	 */
	static embed = (overrides = {}) => new (require('./Embed'))(overrides);

	/**
	 * File field
 	 * @deprecated {@since 2.0.0} Instantiate the class for this field type instead: `new File()`
	 */
	static file = (overrides = {}) => new (require('./File'))(overrides);

	/**
	 * Follow up email field
 	 * @deprecated {@since 2.0.0} Instantiate the class for this field type instead: `new FollowUpEmail()`
	 */
	static followUpEmail = (overrides = {}) => new (require('./FollowUpEmail'))(overrides);

	/**
	 * Font field
 	 * @deprecated {@since 2.0.0} Instantiate the class for this field type instead: `new Font()`
	 */	
	static font = (overrides = {}) => new (require('./Font'))(overrides);

	/**
	 * Form field
 	 * @deprecated {@since 2.0.0} Instantiate the class for this field type instead: `new Form()`
	 */
	static form = (overrides = {}) => new (require('./Form'))(overrides);

	/**
	 * HubDB Row field
 	 * @deprecated {@since 2.0.0} Instantiate the class for this field type instead: `new HubdbRow()`
	 */
	static hubdbRow = (overrides = {}) => new (require('./HubdbRow'))(overrides);

	/**
	 * HubDB Table field
 	 * @deprecated {@since 2.0.0} Instantiate the class for this field type instead: `new HubdbTable()`
	 */
	static hubdbTable = (overrides = {}) => new (require('./HubdbTable'))(overrides);

	/**
	 * Icon field
 	 * @deprecated {@since 2.0.0} Instantiate the class for this field type instead: `new Icon()`
	 */
	static icon = (overrides = {}) => new (require('./Icon'))(overrides);

	/**
	 * Image field
 	 * @deprecated {@since 2.0.0} Instantiate the class for this field type instead: `new Image()`
	 */
	static image = (overrides = {}) => new (require('./Image'))(overrides);

	/**
	 * Link field
 	 * @deprecated {@since 2.0.0} Instantiate the class for this field type instead: `new Link()`
	 */
	static link = (overrides = {}) => new (require('./Link'))(overrides);

	/**
	 * Logo field
 	 * @deprecated {@since 2.0.0} Instantiate the class for this field type instead: `new Logo()`
	 */
	static logo = (overrides = {}) => new (require('./Logo'))(overrides);

	/**
	 * Meeting field
 	 * @deprecated {@since 2.0.0} Instantiate the class for this field type instead: `new Meeting()`
	 */
	static meeting = (overrides = {}) => new (require('./Meeting'))(overrides);

	/**
	 * Menu field
 	 * @deprecated {@since 2.0.0} Instantiate the class for this field type instead: `new Menu()`
	 */
	static menu = (overrides = {}) => new (require('./Menu'))(overrides);

	/**
	 * Number field
 	 * @deprecated {@since 2.0.0} Instantiate the class for this field type instead: `new Number()`
	 */
	static number = (overrides = {}) => new (require('./Number'))(overrides);

	/**
	 * Page field
 	 * @deprecated {@since 2.0.0} Instantiate the class for this field type instead: `new Page()`
	 */
	static page = (overrides = {}) => new (require('./Page'))(overrides);

	/**
	 * Payment field
 	 * @deprecated {@since 2.0.0} Instantiate the class for this field type instead: `new Payment()`
	 */
	static payment = (overrides = {}) => new (require('./Payment'))(overrides);

	/**
	 * Rich text field
 	 * @deprecated {@since 2.0.0} Instantiate the class for this field type instead: `new RichText()`
	 */
	static richText = (overrides = {}) => new (require('./RichText'))(overrides);

	/**
	 * Salesforce Campaign field
	 * @deprecated {@since 2.0.0} Instantiate the class for this field type instead: `new SfCampaign()`
	 */
	static sfCampaign = (overrides = {}) => new (require('./SfCampaign'))(overrides);
	
	/**
	 * Simple Menu field
 	 * @deprecated {@since 2.0.0} Instantiate the class for this field type instead: `new SimpleMenu()`
	 */
	static simpleMenu = (overrides = {}) => new (require('./SimpleMenu'))(overrides);
	
	/**
	 * Spacing field
 	 * @deprecated {@since 2.0.0} Instantiate the class for this field type instead: `new Spacing()`
	 */
	static spacing = (overrides = {}) => new (require('./Spacing'))(overrides);

	/**
	 * Tag field
 	 * @deprecated {@since 2.0.0} Instantiate the class for this field type instead: `new Tag()`
	 */
	static tag = (overrides = {}) => new (require('./Tag'))(overrides);

	/**
	 * Text Field
	 * @deprecated {@since 2.0.0} Instantiate the class for this field type instead: `new Text()`
	 */
	static text = (overrides = {}) => new (require('./Text'))(overrides);

	/**
	 * Text Alignment Field
	 * @deprecated {@since 2.0.0} Instantiate the class for this field type instead: `new TextAlignment()`
	 */
	static text = (overrides = {}) => new (require('./TextAlignment'))(overrides);
	
	/**
	 * URL field
 	 * @deprecated {@since 2.0.0} Instantiate the class for this field type instead: `new Url()`
	 */	
	static url = (overrides = {}) => new (require('./Url'))(overrides);

	/**
	 * Video field
 	 * @deprecated {@since 2.0.0} Instantiate the class for this field type instead: `new Video()`
	 */
	static video = (overrides = {}) => new (require('./Video'))(overrides);

}