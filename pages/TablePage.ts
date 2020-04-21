import { $, ElementFinder } from "protractor";

export class TablePageObject {
    public addUserLink: ElementFinder;
    public usernameFirstRowTable: ElementFinder;
    public DeleteOKButton: ElementFinder;


    constructor() {
        this.addUserLink = $("button[class='btn btn-link pull-right']");
        this.usernameFirstRowTable = $("body > table > tbody > tr:nth-child(1) > td:nth-child(3)");
        this.DeleteOKButton = $("button[class='btn ng-scope ng-binding btn-primary']");
    }
}