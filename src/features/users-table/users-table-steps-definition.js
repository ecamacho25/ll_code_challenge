const { Given, When, Then } = require("cucumber");

Given(
  "Juan access the webtables application in his web browser",
  async function() {
    await browser.get(this.appURL);
    return browser.waitForAngular();
  }
);

When("attempts to create a new user", async function() {
  await this.homePage.clickOnAddUser();
  await this.createUserModal.waitForCreateUserModalVisible();
  await this.createUserModal.attempToCreateUser(this.newUser);
});

When("attempts to delete user {string}", async function(userName) {

});

Then("can see the new user in the table", async function() {

});

Then("can not see the user {string} in the table", async function(userName) {

});

When("reloads the page", async function() {
  
});
