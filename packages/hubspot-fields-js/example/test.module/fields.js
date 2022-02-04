const { Group, Field } = require('@igomoon/hubspot-fields-js');

let TestGroup = require('../fields/TestGroup');

module.exports = [

	Field
		.text()
		.name('text', 'Text'),
	
	TestGroup({
		showEnable: true,
		showCssClass: true
	}),

	TestGroup({
		showEnable: true,
		showCssClass: true
	})
		.name('group2','Group 2')
]