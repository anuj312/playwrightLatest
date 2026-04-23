import { test } from "../src/fixtures/test"


test.describe("Login", () => {
    test("Check Invalid login @smoke", async({loginPage, page}) => {
       
        await  loginPage.goto();
        await  loginPage.Invalidlogin();
    });

    test("Check valid login", async({page,loginPage}) => {
        
           await  loginPage.goto();
           await  loginPage.Validlogin();
    });













});