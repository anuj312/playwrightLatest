import { expect, Locator, Page } from "@playwright/test";
import { base } from "./base.page";
import { ENV } from "../utils/env";

export class login extends base {


    readonly loginbtn:Locator;
    readonly username:Locator;
    readonly password:Locator;
    readonly submit:Locator;
    readonly msg:Locator;





     constructor(page:Page){
        super(page);
        this.loginbtn=page.getByRole('link', {name:'Test Login Page'});
        this.username=page.getByLabel('Username');
        this.password=page.getByLabel('Password');
        this.submit=page.getByRole('button', {name:'Submit'});
        this.msg=page.locator('#error');
        

      }



      async goto(){
        await this.page.goto(ENV.BASE_URL);
      }

      async Invalidlogin(){
         await this.loginbtn.click();
         await this.username.fill(ENV.USERNAME);
          await this.page.waitForTimeout(2000);
         await this.password.fill(ENV.PASSWORD);
          await this.page.waitForTimeout(2000);
         await this.submit.click();
               await this.page.waitForTimeout(2000);
         expect(this.msg).toHaveText('Your user is invalid!');


      }

      async Validlogin(){
         await this.loginbtn.click();
         await this.username.fill(ENV.USERNAME);
          await this.page.waitForTimeout(2000);
         await this.password.fill(ENV.USERNAME);
          await this.page.waitForTimeout(2000);
         await this.submit.click();
          await this.page.waitForTimeout(2000);
         expect(this.msg).toHaveText('Your password is invalid!');


      }





    
}