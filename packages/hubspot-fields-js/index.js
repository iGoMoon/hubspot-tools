const { randomId, parseArgs } = require('./src/Helpers');
const _HublField = require('./src/fields/_HublField');

/**
 * Exports everything needed to use HubSpot FieldsJS
 */
module.exports = {
    /**
     * Kept for backwards compatibility. Will be removed in a later version.
     * Instantiate the class for the specific field type instead. eg. `new Text()`
     *
     * @deprecated
     */
    Field: require('./src/fields/_StaticFields'),

    // Groups
    Group: require('./src/fields/Group'),
    StyleGroup: require('./src/fields/StyleGroup'),

    // Fields
    Alignment: require('./src/fields/Alignment'), // Style
    BackgroundImage: require('./src/fields/BackgroundImage'), // Style
    Blog: require('./src/fields/Blog'),
    Boolean: require('./src/fields/Boolean'), // Theme + Style
    Border: require('./src/fields/Border'), // Style
    Choice: require('./src/fields/Choice'), // Theme + Style
    Color: require('./src/fields/Color'), // Theme + Style
    CrmObject: require('./src/fields/CrmObject'), // CMS Hub Professional and Enterprise.
    CrmObjectProperty: require('./src/fields/CrmObjectProperty'), // CMS Hub Professional and Enterprise.
    Cta: require('./src/fields/Cta'), // CMS Hub Professional and Enterprise
    Date: require('./src/fields/Date'),
    DateTime: require('./src/fields/DateTime'),
    Email: require('./src/fields/Email'),
    Embed: require('./src/fields/Embed'),
    File: require('./src/fields/File'),
    FollowUpEmail: require('./src/fields/FollowUpEmail'),
    Font: require('./src/fields/Font'), // Theme + Style
    Form: require('./src/fields/Form'),
    Gradient: require('./src/fields/Gradient'),
    HubdbRow: require('./src/fields/HubdbRow'), // CMS Hub Professional and Enterprise.
    HubdbTable: require('./src/fields/HubdbTable'), // CMS Hub Professional and Enterprise.
    Icon: require('./src/fields/Icon'), // Style
    Image: require('./src/fields/Image'), // Style
    Link: require('./src/fields/Link'),
    Logo: require('./src/fields/Logo'),
    Meeting: require('./src/fields/Meeting'),
    Menu: require('./src/fields/Menu'),
    Number: require('./src/fields/Number'), // Style
    Page: require('./src/fields/Page'),
    Payment: require('./src/fields/Payment'),
    RichText: require('./src/fields/RichText'),
    SfCampaign: require('./src/fields/SfCampaign'),
    SimpleMenu: require('./src/fields/SimpleMenu'),
    Spacing: require('./src/fields/Spacing'), // Style
    Tag: require('./src/fields/Tag'),
    Text: require('./src/fields/Text'),
    TextAlignment: require('./src/fields/TextAlignment'), // Style
    Url: require('./src/fields/Url'),
    Video: require('./src/fields/Video'),

    /**
     * Imported for use with Webpack
     */
    FieldsPlugin: require('./src/plugins/FieldsPlugin'),

    // Helpers
    randomId,
    parseArgs,
};
