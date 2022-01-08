const { Field, Group, randomId, parseArgs } = require('@igomoon/hubspot-fields-js');

module.exports = function (args = {}) {

	args = parseArgs({
		showEnable : false,
		showCssClass : false,
	}, args)
	
	let ids = { boolean : randomId() }

	return new Group()
		.children([

			// Enable Field
			(args.showEnable ?
				Field
					.boolean()
					.id(ids.boolean)
					.name('enable','Enable Field') 
					.set('display', 'toggle')
					.default(true)
			: null),
			
			// 
			Field
				.number()
				.name('number', 'Number Fields')
				.applyIf(
					args.showEnable,
					field => field.visibleIf(ids.boolean, true)
				),
			
			(args.showCssClass ?
				Field
					.text()
					.name('css_class', 'CSS Class')
					.set( "validation_regex", "-?[a-zA-Z]+[a-zA-Z0-9- ]+")
					.inlineHelpText("Enter a CSS class for additional styling")
			: null)
		])
} 