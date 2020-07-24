// This is for an imaginary login page

import Page from './page';

class LoginPage extends Page {
  open() { super.open('/login'); }

  get emailInput() { return $('#user_email') }
  get passwordInput() { return $('#user_password') }
  get loginButton() { return $('button=Sign in') }

  login(email, password) {
    this.open();

    // User is redirected to home page if already logged in.
    // Only login if we are still on the login page.
    if (browser.getUrl().includes('login')) {
      this.emailInput.setValue(email);
      this.passwordInput.setValue(password);
      this.loginButton.click();
    } else {
      console.log('ALREADY LOGGED IN');
    }
  }
}

export default new LoginPage();
