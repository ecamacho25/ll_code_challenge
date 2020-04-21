import { AddUserPageObject } from "../pages/AddUserPage";
const { When } = require("cucumber");
const AddUserPage: AddUserPageObject = new AddUserPageObject();

When(/^I input (.*?) as First Name$/, async (text) => {
    await AddUserPage.FirtsNameTextBox.sendKeys(text);
});

When(/^I input (.*?) as Last Name$/, async (text) => {
    await AddUserPage.LastNameTextBox.sendKeys(text);
});

When(/^I input (.*?) as User Name$/, async (text) => {
    await AddUserPage.UserNameTextBox.sendKeys(text);
});

When(/^I input (.*?) as Password$/, async (text) => {
    await AddUserPage.PasswordTextBox.sendKeys(text);
});

When(/^I Select the option (.*?) in the customer field$/, async (text) => {
    if (text === "Company AAA") {
        await AddUserPage.CustomerRadio.$('[value="15"]').click();
    } else if (text === "Company BBB") {
        await AddUserPage.CustomerRadio.$('[value="16"]').click();
    }
});

When(/^I Select the option (.*?) in the role drop-down$/, async (text) => {
    if (text === "Sales Team") {
        await AddUserPage.RoleDropdown.$('[value="0"]').click();
    } else if (text === "Customer") {
        await AddUserPage.RoleDropdown.$('[value="1"]').click();
    } else if (text === "Admin") {
        await AddUserPage.RoleDropdown.$('[value="2"]').click();
    }
});

When(/^I input (.*?) as E-mail$/, async (text) => {
    await AddUserPage.EmailTextBox.sendKeys(text);
});

When(/^I input (.*?) as Cell Phone$/, async (text) => {
    await AddUserPage.CellphoneTextBox.sendKeys(text);
});

When(/^I click the Save button$/, async () => {
    await AddUserPage.SaveButton.click();
});

