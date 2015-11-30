// conf.js
var HtmlReporter = require('protractor-html-screenshot-reporter');
var reporter=new HtmlReporter({
    baseDirectory: './protractor-result', // a location to store screen shots.
    docTitle: 'Protractor Demo Reporter',
    docName:    'protractor-demo-tests-report.html'
});

exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['todo-spec.js'],
    jasmineNodeOpts: {defaultTimeoutInterval: 50000},
    capabilities: {
        browserName: 'firefox'
    },
    onPrepare: function() {
        jasmine.getEnv().addReporter(reporter);
    }
}
