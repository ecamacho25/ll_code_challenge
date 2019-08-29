class HomePage {
  constructor(EC) {
    this.ADD_USER_BUTTON_SELECTOR = "table button[type='add']";
    this.ADD_USER_BUTTON = By.css(this.ADD_USER_BUTTON_SELECTOR);
    this.EC = EC;
  }
  async clickOnAddUser() {
    await browser.wait(this.EC.visibilityOf($(this.ADD_USER_BUTTON_SELECTOR)), 5000);
    return browser.findElement(this.ADD_USER_BUTTON).click();
  }
}

module.exports = HomePage;
