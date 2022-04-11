# Roadmap to Version 2.0.0

[Module and Theme Field Types](https://developers.hubspot.com/docs/cms/building-blocks/module-theme-fields)

- **@todo**: Complete Documentation for all Fields
	- Using Type Definition to combine (@typedef) and provide Intellisense
	- Use [Text.js](./src/fields/Text.js) or [Group.js](./src/fields/Group.js)  as Example 
- **@todo**: Set Defaults are defined with correct schema for all fields
- **@todo**: Make sure additional keys are set for specific fields
- **@todo**: Define Helper methods for all Fields
- **@experimental**: Perform checks so only style fields can be output in a [StyleGroup.js](./src/fields/StyleGroup.js) Field
- **@todo**: Update Partials to use extend pattern

```javascript
class Style extends Group {
    constructor(children) {
        super({name:'style', label: 'Style'}, children || [
            Text(),
            Background()
        ]);
    }
}

new Style([
    new Text(),
    new Background(),
])
```