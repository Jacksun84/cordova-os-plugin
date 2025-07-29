var exec = require('cordova/exec');

let ZoomPlugin = {
    showToast: (message, duration, successCallback, errorCallback) => {
        exec(successCallback, errorCallback, 'ZoomPlugin', 'showToast', [message, duration]);
    },

    coolMethod: (arg0, success, error) => {
        exec(success, error, 'ZoomPlugin', 'coolMethod', [arg0]);
    }

};

module.exports = ZoomPlugin;