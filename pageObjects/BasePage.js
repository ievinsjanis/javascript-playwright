const { expect } = require("@playwright/test");

class BasePage {
  constructor(page) {
    this.page = page;
    this.pageHeading = this.page.locator("h1.text-2xl.font-bold.mb-6")
    this.blueButton = this.page.locator("button.w-full.bg-blue-600")
  }

  async navigateToPage(url) {
    await this.page.goto(url);
  }

  async assertText(selector, text) {
    await expect(selector).toHaveText(text);
  }

  async clickButton(text) {
    const button = this.blueButton.filter({ hasText: text });
    await button.click();
  }
}

module.exports = BasePage;