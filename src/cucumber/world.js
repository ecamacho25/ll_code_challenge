var { setWorldConstructor } = require("cucumber");
var { setDefaultTimeout } = require("cucumber");
setDefaultTimeout(25 * 1000);
var config = require('./../../resources/config.json')[process.env.ENV || 'default'];

class World {
  constructor() {
    this.testData = {};
    this.appURL = config.appURL;
  }
}

setWorldConstructor(World);
