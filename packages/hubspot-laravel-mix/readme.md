# Laravel Mix HubSpot Extension <!-- omit in toc -->

This is a Laravel Mix Extension for HubSpot Local Development

```javascript
let mix = require('laravel-mix');
(require('@igomoon/hubspot-laravel-mix')(mix))
```

### [Example package.json](examples/package.json)
```json
{
	"scripts": {
		"local": "mix",
		"watch": "mix watch -- --env hsAutoUpload=true",
		"build": "mix -- --env hsAutoUpload=true",
		"deploy": "mix --production -- --env hsAutoUpload=true"
	},
	"devDependencies": {
		"@igomoon/hubspot-laravel-mix": "^1.0.0",
		"laravel-mix": "^6.0.39"
	}
}
```

You can use "hsSilent" to mute the HubSpot Logger Information
```bash
mix watch -- --env hsAutoUpload=true "hsSilent=true"
```

### [Example webpack.mix.js](examples/webpack.mix.js)

```javascript
let mix = require('laravel-mix');
(require('@igomoon/hubspot-laravel-mix')(mix))

mix.js(`src/resources/js/main.js`, `assets/js/main.js`);

mix.sass(`src/resources/scss/main.dev.scss`, `assets/css/main.css`, {
	sassOptions: {
		indentWidth: 4,
		outputStyle: `expanded` // expanded | compressed
	}
});

mix.hubspot({
	Label: 'My Theme',
	Upload: {
		outputFolder: 'dist',
		dest: 'theme-folder',
		patterns: [
			{ from: 'src/hubl', to: 'hubl' },
			{ from: 'src/theme.json', to: 'theme.json' },
			{ from: 'src/resources/images', to: 'assets/images' },
			{ from: 'src/resources/icons', to: 'assets/icons' }
		]
	},
	FieldsJs: {
		extraDirsToWatch: ["./src/fields"]
	}
})

mix.options({
	manifest: false, // Disable manifest generation.
	processCssUrls: false, 	// Don't perform any css url rewriting by default
	autoprefixer: { remove: true } // Remove Outdated prefixes
})
```

Simply run npm install and then `npm run build`

This extensions uses:
- [copy-webpack-plugin](https://webpack.js.org/plugins/copy-webpack-plugin/)
- [@hubspot/webpack-cms-plugins](https://www.npmjs.com/package/@hubspot/webpack-cms-plugins)
- [@igomoon/hubspot-fields-js](https://www.npmjs.com/package/@igomoon/hubspot-fields-js)
- [webpack-build-notifier](https://www.npmjs.com/package/webpack-build-notifier) (Will override the Mix default)