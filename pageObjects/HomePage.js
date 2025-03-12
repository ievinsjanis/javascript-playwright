const BasePage = require("./BasePage");

class HomePage extends BasePage {
  constructor(page) {
    super(page);
    this.page = page;
    this.successMessage = this.page.locator("p.text-green-500.mb-4");
  }

  async assertSuccessMessage(text) {
    await this.assertText(this.successMessage, text);
  }
}

module.exports = HomePage;