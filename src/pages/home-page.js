class HomePage {
  constructor(EC) {
    this.ADD_USER_BUTTON_SELECTOR = "table button[type='add']";
    this.TABLE_DATA_SELECTOR = By.css("table tbody tr");
    this.ADD_USER_BUTTON = By.css(this.ADD_USER_BUTTON_SELECTOR);
    this.EC = EC;
  }
  async clickOnAddUser() {
    await browser.wait(this.EC.visibilityOf($(this.ADD_USER_BUTTON_SELECTOR)), 5000);
    return browser.findElement(this.ADD_USER_BUTTON).click();
  }
  async searchForUserNameInTable(userName){
    return new Promise(async function(resolve, reject) {
      let tableRows = await browser.findElements(this.TABLE_DATA_SELECTOR);
      for(let row of tableRows) {
          let item = await row.findElement(By.css(":nth-child(2)"))
          if(await item.getText() == userName) resolve(true);
      }
      resolve(false);
    }.bind(this));
  }
}

module.exports = HomePage;
