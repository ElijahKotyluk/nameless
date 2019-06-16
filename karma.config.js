const webpackConfig = require('./webpack.config.js');

module.exports = function(config) {
  var configuration = {
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
    browsers: ['Chrome'],
    customLaunchers: {
      Chrome_travis_ci: {
        base: 'Chrome',
        flags: ['--no-sandbox']
      }
    },
    singleRun: true,
    concurrency: Infinity
  }

  if(process.env.TRAVIS) {
    configuration.browsers = ['Chrome_travis_ci'];
  }

  config.set(configuration);
}
