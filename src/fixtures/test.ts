import { test as base } from "@playwright/test";
import { login } from "../pages/login.page";

type Fixtures = {
  loginPage: login;
};

export const test = base.extend<Fixtures>({
  loginPage: async ({ page }, use) => {
    const loginPage = new login(page);
    await use(loginPage);
  },
});

export { expect } from "@playwright/test";