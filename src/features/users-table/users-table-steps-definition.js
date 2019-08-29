const { Given, When, Then } = require("cucumber");

let loginPage;
let loginAssertions;

Given(
  "Juan access the webtables application in his web browser",
  async function() {
    await browser.get("http://www.way2automation.com/angularjs-protractor/webtables/");
    return browser.waitForAngular();
  }
);

When("attempts to create a new user", async function() {
});

When("attempts to delete user {string}", async function(username) {
});

Then("can see the new user in the table", async function() {
});

Then("can not see the user {string} in the table", async function(username) {
});

When("reloads the page", async function() {
});
