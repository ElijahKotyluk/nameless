const webpackConfig = require('./webpack.config.js');

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      'src/*.js',
      'test/*.spec.js'
    ],
    webpack: webpackConfig,
    exclude: [
    ],
    preprocessors: {
      'src/*.js': ['webpack', 'sourcemap'],
      'tests/*.spec.js': ['webpack', 'sourcemap']
    },
    plugins: [
      'karma-webpack',
      'karma-jasmine',
      'karma-chrome-launcher',
      'karma-jasmine-html-reporter',
      'karma-sourcemap-loader'
    ],
    reporters: ['progress', 'kjhtml'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['Chrome', 'ChromeHeadless', 'MyHeadlessChrome'],
    customLaunchers: {
      MyHeadlessChrome: {
        base: 'ChromeHeadless',
        flags: ['--disable-translate', '--disable-extensions',
                '--no-first-run', '--disable-background-networking',
                '--remote-debugging-port=9223']
      }
    },
    //singleRun: false,
    concurrency: Infinity
  })
}
