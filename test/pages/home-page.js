class HomePage {

    open() {
        return browser.url('/');
    }

    get emailField() {
        return $('//input[@name="email"]');
    }

}

export default new HomePage();