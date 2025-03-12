const test = require("../fixtures/page");

test("Successful Registration Flow", async ({ homePage, registrationPage }) => {
  // Navigate to the homepage
  await homePage.navigateToPage("/");

  // Assert the homepage heading
  await homePage.assertText(homePage.pageHeading, "Welcome to the Home Page!");

  // Click on the "Go to Registration" button
  await homePage.clickButton("Go to Registration");

  // Assert registration page heading
  await registrationPage.assertText(registrationPage.pageHeading, "Registration Form");

  // Fill out the registration form with valid data
  await registrationPage.inputRegistrationData(
    "janistest123",
    "janis@test.com",
    "Parole!23",
    "Parole!23"
  );

  // Click on the "Register" button
  await registrationPage.clickButton("Register");

  // Assert the success message on the homepage
  await homePage.assertSuccessMessage("You have registered successfully!");
});