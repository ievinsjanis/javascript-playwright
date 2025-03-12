const { test: baseTest } = require("@playwright/test");
const BasePage = require("../pageObjects/BasePage");
const HomePage = require("../pageObjects/HomePage");
const RegistrationPage = require("../pageObjects/RegistrationPage");

const test = baseTest.extend({
  basePage: async ({ page }, use) => await use(new BasePage(page)),
  homePage: async ({ page }, use) => await use(new HomePage(page)),
  registrationPage: async ({ page }, use) => await use(new RegistrationPage(page)),
});

module.exports = test;