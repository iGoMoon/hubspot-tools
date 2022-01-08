let mix = require('laravel-mix');
(require('@igomoon/laravel-mix-hubspot')(mix))

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
