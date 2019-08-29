class HomePage {
  constructor(EC) {
    this.ADD_USER_BUTTON = By.css("table button[type='addw']");
    this.EC = EC;
  }
  async clickOnAddUser() {
    await browser.wait(browser.findElement(this.ADD_USER_BUTTON), 5000);
    return browser.findElement(this.ADD_USER_BUTTON).click();
  }
}

module.exports = HomePage;
