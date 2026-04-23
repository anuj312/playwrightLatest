import { Page,Locator,expect} from "@playwright/test"

export class base{


    constructor(readonly page:Page){


    }


    async click(target:Locator){
       await expect(target).toBeVisible();
       await target.click();    
    }

    async fill(target:Locator,value:string){
       await expect(target).toBeVisible();
       await target.fill(value);    
    }

  

  

}

