// Example: require('@igomoon/laravel-mix-hubspot')(mix)

module.exports = (mix = null) => { 
	if (!!mix) {
		const MixHubspot = require('./MixHubspot')
		mix.extend('hubspot', new MixHubspot())
	}
}