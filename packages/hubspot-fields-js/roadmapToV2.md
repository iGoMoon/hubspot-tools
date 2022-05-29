# Roadmap to Version 2.0.0

[Module and Theme Field Types](https://developers.hubspot.com/docs/cms/building-blocks/module-theme-fields)

- **@experimental**: Perform checks so only style fields can be output in a [StyleGroup.js](./src/fields/StyleGroup.js) Field
- **@experimental**: Only Allow 1 style group
- **@experimental**: Ceate an `after` method for cleanup
- **@experimental**: Remove unneccary default methods

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


-----

### Fields  

//-- Style
- [X] Alignment
- [X] Background Image
- [X] Border
- [X] Color

//-- Fields
- [X] Blog
- [X] Boolean
- [X] Choice
- [X] CTA
- [X] Date
- [X] Date Time
- [X] Email
- [X] File
- [X] FollowUp Email
- [X] Meeting
- [X] Menu
- [X] Page
- [X] SF Campaign
- [X] Number
- [X] Text

//-- Style
- [] Font
	- [] Type
	- [] Name and Label
	- [] Default Method
	- [] Additional Parameters
	- [] Helper Methods
	- [] Documentation
		- [] Correct URLs
		- [] Style URL
- [] Gradient
	- [] Type
	- [] Name and Label
	- [] Default Method
	- [] Additional Parameters
	- [] Helper Methods
	- [] Documentation
		- [] Correct URLs
		- [] Style URL
- [] Icon
	- [] Type
	- [] Name and Label
	- [] Default Method
	- [] Additional Parameters
	- [] Helper Methods
	- [] Documentation
		- [] Correct URLs
		- [] Style URL
- [] Spacing
	- [] Type
	- [] Name and Label
	- [] Default Method
	- [] Additional Parameters
	- [] Helper Methods
	- [] Documentation
		- [] Correct URLs
		- [] Style URL
- [] Text Alignment
	- [] Type
	- [] Name and Label
	- [] Default Method
	- [] Additional Parameters
	- [] Helper Methods
	- [] Documentation
		- [] Correct URLs
		- [] Style URL Alignment

//-- Fields
- [] Url
	- [] Type
	- [] Name and Label
	- [] Default Method
	- [] Additional Parameters
	- [] Helper Methods
	- [] Documentation
		- [] Correct URLs
		- [] Style URL
- [] Video
	- [] Type
	- [] Name and Label
	- [] Default Method
	- [] Additional Parameters
	- [] Helper Methods
	- [] Documentation
		- [] Correct URLs
		- [] Style URL
- [] Embed
	- [] Type
	- [] Name and Label
	- [] Default Method
	- [] Additional Parameters
	- [] Helper Methods
	- [] Documentation
		- [] Correct URLs
		- [] Style URL
- [] Form
	- [] Type
	- [] Name and Label
	- [] Default Method
	- [] Additional Parameters
	- [] Helper Methods
	- [] Documentation
		- [] Correct URLs
		- [] Style URL
- [] Group
	- [] Type
	- [] Name and Label
	- [] Default Method
	- [] Additional Parameters
	- [] Helper Methods
	- [] Documentation
		- [] Correct URLs
		- [] Style URL
- [] Image
	- [] Type
	- [] Name and Label
	- [] Default Method
	- [] Additional Parameters
	- [] Helper Methods
	- [] Documentation
		- [] Correct URLs
		- [] Style URL
- [] Link
	- [] Type
	- [] Name and Label
	- [] Default Method
	- [] Additional Parameters
	- [] Helper Methods
	- [] Documentation
		- [] Correct URLs
		- [] Style URL
- [] Logo
	- [] Type
	- [] Name and Label
	- [] Default Method
	- [] Additional Parameters
	- [] Helper Methods
	- [] Documentation
		- [] Correct URLs
		- [] Style URL
- [] Rich
	- [] Type
	- [] Name and Label
	- [] Default Method
	- [] Additional Parameters
	- [] Helper Methods
	- [] Documentation
		- [] Correct URLs
		- [] Style URL Text
- [] Simple
	- [] Type
	- [] Name and Label
	- [] Default Method
	- [] Additional Parameters
	- [] Helper Methods
	- [] Documentation
		- [] Correct URLs
		- [] Style URL Menu
- [] Tag
	- [] Type
	- [] Name and Label
	- [] Default Method
	- [] Additional Parameters
	- [] Helper Methods
	- [] Documentation
		- [] Correct URLs
		- [] Style URL

- [] Payment
	- [] Type
	- [] Name and Label
	- [] Default Method
	- [] Additional Parameters
	- [] Helper Methods
	- [] Documentation
		- [] Correct URLs
		- [] Style URL
- [] HubDB Row
	- [] Type
	- [] Name and Label
	- [] Default Method
	- [] Additional Parameters
	- [] Helper Methods
	- [] Documentation
		- [] Correct URLs
		- [] Style URL Row
- [] HubDB Table
	- [] Type
	- [] Name and Label
	- [] Default Method
	- [] Additional Parameters
	- [] Helper Methods
	- [] Documentation
		- [] Correct URLs
		- [] Style URL Table
- [] Crm Object
	- [] Type
	- [] Name and Label
	- [] Default Method
	- [] Additional Parameters
	- [] Helper Methods
	- [] Documentation
		- [] Correct URLs
		- [] Style URL Object
- [] Crm Object Property
	- [] Type
	- [] Name and Label
	- [] Default Method
	- [] Additional Parameters
	- [] Helper Methods
	- [] Documentation
		- [] Correct URLs
