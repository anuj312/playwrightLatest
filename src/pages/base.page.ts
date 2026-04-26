
import {Page,Locator,expect} from "@playwright/test"
export class base {

  

constructor(protected readonly page:Page){}


async clickbtn(target:Locator){
await expect(target).toBeVisible();
await target.click();


}


async fillbtn(target:Locator, value:string){
await expect(target).toBeVisible();
await target.fill(value);


}


}