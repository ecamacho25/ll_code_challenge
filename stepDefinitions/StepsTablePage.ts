import { browser, by, element } from "protractor";
import { TablePageObject } from "../pages/TablePage";
const { Given, When, Then } = require("cucumber");
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;

const TablePage: TablePageObject = new TablePageObject();

Given(/^I go to (.*?)$/, async (url) => {
    if (url === "http://www.way2automation.com/angularjs-protractor/webtables/") {
        await expect(browser.getTitle()).to.eventually.equal("Protractor practice website - WebTables");
    }
});

When(/^I click Add User botton$/, async () => {
    await TablePage.addUserLink.click();
});

Then(/^The user is created succesfully$/, async () => {
    console.log('\n******************************************************');
    console.log('The user was created successfully');
    console.log('******************************************************');
});

Then(/^The user (.*?) is added to the table$/, async (text) => {
    await expect(TablePage.usernameFirstRowTable.getText()).to.eventually.equal(text);
});


When(/^I click delete option in the row associate to user (.*?)$/, async (user) => {
    var deleteLink = element(by.xpath(`//tr[contains(., '${user}')]//button[@ng-click='delUser()']`));
    await deleteLink.click();

    //****************************************************************************************************************************************//
    // In the following code I was trying to iterate the table to search the username in the tr elements and then, navigate to the link associate.
    //****************************************************************************************************************************************//

    // var arrayElements = element(by.xpath("//table[@table-title='Smart Table example']/tbody")).all(by.tagName('tr'));
    // await arrayElements.then(function (elements) {
    //      elements.forEach(function (ele) {
    //              ele.getText().then(function (text) {
    //                 console.log(text);
    //                 if(text==user){
    //                     console.log('\n******************************************************');
    //                     console.log('\nfound!
    //                     console.log('\n******************************************************');
    //                 }
    //               })

    //   })
    // });

});

When(/^I click OK option in the Confirmation Dialog$/, async () => {
    await browser.sleep(1000);
    await TablePage.DeleteOKButton.click();
});

Then(/^The user is deleted succesfully$/, async () => {
    console.log('\n******************************************************');
    console.log('The user was deleted successfully');
    console.log('******************************************************');
});


Then(/^The user (.*?) is deleted from the table$/, async (user) => {
    await element(by.xpath(`//tr[contains(., '${user}')]`)).isPresent().then(function (present) {
        expect(present).equal(false);
    });

});
