var { setWorldConstructor } = require("cucumber");
var { setDefaultTimeout } = require("cucumber");
var config = require('./../../resources/config.json')[process.env.ENV || 'default'];
var HomePage = require("./../pages/home-page.js");
var CreateUserModal = require("./../pages/modals/create-user-modal.js");

var EC = protractor.ExpectedConditions;


class World {
  constructor() {
    this.testData = {};
    this.appURL = config.appURL;
    this.homePage = new HomePage(EC);
    this.createUserModal = new CreateUserModal(EC);
    this.newUser = config.newUser;
  }
}

setWorldConstructor(World);
setDefaultTimeout(25 * 1000);
