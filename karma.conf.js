module.exports = function (config) {
    config.set({

        basePath: '',

        frameworks: ['jasmine'],

        files: [
            'src/**/*.js',

            'test/**/*.spec.js'
        ],

        exclude: [],

        browsers: ['Safari'],

        preprocessors: {},

        reporters: ['progress'],

        port: 9876,

        colors: true,

        logLevel: config.LOG_INFO,

        autoWatch: true,

        singleRun: false
    });
};