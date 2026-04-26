import { ENV } from "../utils/env";
import { base } from "./base.page";
import {Page,Locator,expect} from "@playwright/test"
import { users } from "./data/user";

export class LoginPage extends base{


    readonly joinReal:Locator;
    readonly firstname:Locator;
    readonly lastname:Locator;
    readonly username:Locator;
    readonly email:Locator;
    readonly password:Locator;
    readonly confirmpass:Locator;
    readonly consent:Locator;
    readonly consentmesage:Locator;
    readonly createAccount:Locator;


   constructor(page:Page){
    super(page);

    this.joinReal = page.getByText('Join Real');
    this.firstname = page.getByPlaceholder('Enter your first name');
    this.lastname = page.getByPlaceholder('Enter your last name');
    this.username = page.getByTestId('text-input-Username');
    this.email = page.getByTestId('email-input-Email');
    this.password = page.getByPlaceholder('Choose password');
    this.confirmpass = page.getByPlaceholder('Confirm password');
    this.consent = page.getByTestId('consentedToTerms');
    this.consentmesage = page.getByTestId('consentedToCallMessage');
    this.createAccount = page.getByTestId('button-default').first();



    }

    async Register(){
      
       await this.joinReal
       await this.firstname.fill(ENV.FIRST);
       await this.lastname.fill(ENV.LAST);
       await this.username.fill(ENV.USERNAME);
       await this.email.fill(users.validUser.email);
       await this.password.fill(users.validUser.password);
       await this.confirmpass.fill(ENV.CPASSWORD);
       await this.consent.click();
       await this.consentmesage.click();
       await this.createAccount.click();
       await this.page.waitForTimeout(3000);
     

    }

 

}