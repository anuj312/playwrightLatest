import {Page,Locator,expect,test} from "@playwright/test"
import { LoginPage } from  "../src/pages/bolt.page"
import { ENV } from "../src/utils/env";


test.describe("Tescase", () => {
 test.beforeEach("launch browser", async({page}) => {

      await page.goto(ENV.BASE_URL);

   });

   test("Verify Register Page", async({page}) =>{

        const reg = new LoginPage(page);
        await reg.Register();

});

});