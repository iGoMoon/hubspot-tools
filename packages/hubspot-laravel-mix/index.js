// Example: require('@igomoon/hubspot-laravel-mix')(mix)

module.exports = (mix = null) => {
    if (!!mix) {
        const MixHubspot = require('./MixHubspot');
        mix.extend('hubspot', new MixHubspot());
    }
};
