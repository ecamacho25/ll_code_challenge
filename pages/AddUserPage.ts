import { $, ElementFinder } from "protractor";

export class AddUserPageObject {
    public FirtsNameTextBox: ElementFinder;
    public LastNameTextBox: ElementFinder;
    public UserNameTextBox: ElementFinder;
    public PasswordTextBox: ElementFinder;
    public CustomerRadio: ElementFinder;
    public RoleDropdown: ElementFinder;
    public EmailTextBox: ElementFinder;
    public CellphoneTextBox: ElementFinder;
    public CloseButton: ElementFinder;
    public SaveButton: ElementFinder;


    constructor() {
        this.FirtsNameTextBox = $("input[name='FirstName']");
        this.LastNameTextBox = $("input[name='LastName']");
        this.UserNameTextBox = $("input[name='UserName']");
        this.PasswordTextBox = $("input[name='Password']");
        this.CustomerRadio = $("input[name='optionsRadios']");
        this.RoleDropdown = $("select[name='RoleId']");
        this.EmailTextBox = $("input[name='Email']");
        this.CellphoneTextBox = $("input[name='Mobilephone']");
        this.CloseButton = $("button[ng-click='close()']")
        this.SaveButton = $("button[ng-click='save(user)']")
    }
}