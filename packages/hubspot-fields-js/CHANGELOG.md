# Changelog

All notable changes to this project will be documented in this file.


## [1.3.0] - 2022-11-01
- FIX: Recent changes to the compilation assets, were prevent assets from being emitted to the HubSpotAutoUploadPlugin for upload.
    - Plugin will now correctly check if the asset is emitted
- Field JS files will no only be transformed if asset was emitted, it is the first compile or a file in one of the `extraDirsToWatch` was modifed
    - If a file in one of the `extraDirsToWatch` was modified, then ALL fields.js file found in the `src` directory will be transformed.
- Plugin Now uses the Webpack Logger Interface, similar to how the HubSpotAutoUploadPlugin does it, to report when a file is being transformed.
    - eg. `<i> [FieldsPlugin] FieldsJS is tranforming src/hubl/modules/test.module/fields.js`

## [1.2.0] - 2022-01-01
- BREAKING CHANGE: Js Partials are now imported relative to src file, NOT from final dist file. Field JS tranformation using the src file and then updates webpack's emission functionlity to properly handle the upload.
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
