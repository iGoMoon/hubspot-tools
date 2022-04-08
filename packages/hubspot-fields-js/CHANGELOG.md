# Changelog

All notable changes to this project will be documented in this file.

## [1.5.2] - 2022-04-08
- Fix FieldsPlugin key

## [1.5.1] - 2022-04-08
- Fix Readme Version Badge

## [1.5.0] - 2022-04-08

### .hsignore File checker
If you attempt to upload a fields.js file to HubSpot, you will receive anm error. The solution to this is to add "fields.js" to your .hsignore file.

To make this easier, a simple check will be performed for you, when the `transform` command is run. 

### FieldsJs CLI

-  FieldsJs CLI options now includes additional options
	- `--src`: Relative path from your current working directory to the directory your files are in. Defaults to current directory.
		- Will transform all `fields.js` files within this folder
	- `--watch|-w`: Watches the src and "extra" directories and will transform when a change is detected.
	- `--initial|-i`: **WATCH ONLY** - Will transform the fields.js files found when the watcher is first initiated.
	- `--extra`: **WATCH ONLY** - Comma separated list of relative paths from current folder to watch for changes.
		- Will transform transform **all fields.js** files when a change is detected in a js file within this directory
	- `--ignore`: **WATCH ONLY** - Comma separated list of [glob patterns](https://www.npmjs.com/package/glob) to ignore
 
#### Global Installation
`npm i @igomoon/hubspot-fields-js -g`
#### Examples
- `fields transform --src="./src"`
	- Transform **fields.js** files within `./src`
- `fields transform --src="./src" -w`
	- Transform **fields.js** files within `./src` and watch for changes
- `fields transform --src="./src" -w -i`
	- Transform **fields.js** files within `./src` and watch for changes
	- Transform when watcher is first initiated.
- `fields transform --src="./src" --extra="src/fields/" -w`
	- Transform **fields.js** files within `./src` and watch for changes
	- Watch for changes to **.js** files within `./src/fields` and transform **all fields.js** files when a change is detected
- `fields transform --src="./src" ----ignore="src/ignore/**" -w`
	- Transform **fields.js** files within `./src` and watch for changes
	- Ignores all changes within `src/ignore` and will NOT transform **fields.js** files within that folder

### Array Flattening
FieldsJS previously required your fields.js file to export an array of FieldsJs objects, so they can be converted to json that HubSpot expects for upload.

You can now include and import fields "sets" of fields as arrays and they will be flattened into a valid HubSpot fields.json array.

#### Example 

Example `fields.js` within a module.
```javascript
const { Field } = require("@igomoon/hubspot-fields-js");
module.exports = [
	Field.text().name("title","Title"),

	// array set of fields
	[
		Field.richText().name("text","Text"),

		// array sub-set of fields
		[
			Field.richText().name("text2","Text2")
		]
	]
]; 
```

becomes:
```json
[
    {
        "name": "title",
        "label": "Title",
        "type": "text",
		"..." : "..."
    },
    {
        "name": "text",
        "label": "Text",
        "type": "richtext",
		"..." : "..."
    },
    {
        "name": "text2",
        "label": "Text2",
        "type": "richtext",
		"..." : "..."
    }
]
```


## [1.4.0] - 2022-02-04
- Abstraction of methods
	- Now includes CLI command and webapck plugins within this single package
	- Dependencies added for the CLI
	- Package can be installed locally to use the CLI for any directory.

## [1.3.1] - 2022-11-01
- Update Readme Links

## [1.3.0] - 2022-01-11
- FIX: Recent changes to the compilation assets, were prevent assets from being emitted to the HubSpotAutoUploadPlugin for upload.
    - Plugin will now correctly check if the asset is emitted
- Field JS files will no only be transformed if asset was emitted, it is the first compile or a file in one of the `extraDirsToWatch` was modifed
    - If a file in one of the `extraDirsToWatch` was modified, then ALL fields.js file found in the `src` directory will be transformed.
- Plugin Now uses the Webpack Logger Interface, similar to how the HubSpotAutoUploadPlugin does it, to report when a file is being transformed.
    - eg. `<i> [FieldsPlugin] FieldsJS is tranforming src/hubl/modules/test.module/fields.js`

## [1.2.0] - 2022-01-01
- **BREAKING CHANGE**: Js Partials are now imported relative to src file, NOT from final dist file. Field JS tranformation using the src file and then updates webpack's emission functionlity to properly handle the upload.
    - A special mention and massive thanks goes out to [BJ Szyjakowski](https://github.com/jazzyclimber) from Spingroup for his contribution and collaboration on this feature.

```javascript
/*
Let’s say your webpack’s project folder structure looked like this.
- src
	- fieldPartials
		- partial.js
	- modules
		- example.module
			- fields.js
			- module.html
			- meta.json
- dist
	- modules
		- example.module
			- fields.js
			- module.html
			- meta.json
*/

//In < v1.2.0, you would include the file, relative to the dist folder like this:
let partial = require(`../../../src/fieldPartials/partial.js`)

//In >= v1.2.0, you can include it relative to the src folder: 
let partial = require(`../../fieldPartials/partial.js`)
```

- Plugin now accepts options
     - `src`: The starting directory to search for field.js files eg. "./src"
     - `extraDirsToWatch`: an array of relative paths to directories that will trigger a recompilation. Useful for FieldJS partials
     - `ignore`: An array of relative paths to ignore when searching for field.js files  

	```javascript
	new FieldsPlugin({
		"src": "",
		"extraDirsToWatch" : ["./src/fields"],
		"ignore": []
	})
	```

## [1.1.6] - 2021-11-11
- Allow null values in array and filter them out of the final JSON
- `applyIf` helper method
- `parseArgs` helper method

## [1.1.5] - 2021-05-11
- Hot fixes

## [1.1.4] - 2021-05-10
- Need some Defaults
 
## [1.1.3] - 2021-05-07
- Choices and Children helpers
 
## [1.1.2] - 2021-05-07
- Wrong version in ReadMe.md

## [1.1.1] - 2021-05-07 (Not published on NPM)
- Upadate this changelog

## [1.1.0] - 2021-05-07 (Not published on NPM)
- Update Readme and contributing file

## [1.0.4] - 2021-05-07
- Update Field methods so we dont override hubspot defaults

## [1.0.3] - 2021-02-25
- New Field Helper Functions: crmObject, hubdbRow, embed, video, sfCampaign

## [1.0.2] - 2021-02-16
- Package.json updates

## [1.0.1] - 2021-02-16
- Remove unnecessary dependencies

## [1.0.0] - 2021-02-16
- Initial Publish
