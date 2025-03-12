const BasePage = require("./BasePage");

class RegistrationPage extends BasePage {
  constructor(page) {
    super(page);
    this.page = page;
    this.usernameField = this.page.locator('input[name="username"]');
    this.emailField = this.page.locator('input[name="email"]');
    this.passwordField = this.page.locator('input[name="password"]');
    this.confirmPasswordField = this.page.locator('input[name="confirmPassword"]');
  }

  async inputRegistrationData(username, email, password, confirmPassword) {
    await this.usernameField.fill(username);
    await this.emailField.fill(email);
    await this.passwordField.fill(password);
    await this.confirmPasswordField.fill(confirmPassword);
  }
}

module.exports = RegistrationPage;