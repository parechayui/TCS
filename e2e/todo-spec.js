describe('Protractor Demo App', function() {
    it('should have a title', function() {
        browser.get('http://localhost:63342/TCS/index.html#');

        /*home url test case*/
        element(by.id('home')).click();
        expect(browser.getCurrentUrl()).toEqual('http://localhost:63342/TCS/index.html#/home');

        /*nested view url test case*/
        element(by.id('para')).click();
        expect(browser.getCurrentUrl()).toEqual('http://localhost:63342/TCS/index.html#/home/paragraph');


        /*about url test case*/
        element(by.id('about')).click();
        expect(browser.getCurrentUrl()).toEqual('http://localhost:63342/TCS/index.html#/about');


        element(by.id('contact')).click();
        element(by.model('a')).sendKeys(2);
        element(by.model('b')).sendKeys(3);
        expect(element(by.id('sum')).getText()).
        toEqual('5'); // This is wrong!
    });
});