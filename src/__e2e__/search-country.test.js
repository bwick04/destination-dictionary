const puppeteer = require("puppeteer");
let browser, page;

beforeAll(async () => {
  browser = await puppeteer.launch({
    headless: false,  //shows the browser
    devtools: true,  // shows devtools
    slowMo: 250 // slow down by 250ms
  });
  page = await browser.newPage();
});

describe("Filter search", () => {
  test("user can search a specific country", async () => {
    await page.goto("http://localhost:3000/");
    await page.waitForSelector("[data-testid=CountryCard");
    await page.type("[data-testid=search-filter]", "taiwan");
    expect("[data-testid=CountryCard-name]").toBeTruthy();
  }, 20000);

  test("user can view info modal", async () => {
    await page.goto("http://localhost:3000/");
    await page.waitForSelector("[data-testid=info-button");
    await page.click("[data-testid=info-button]");
    await page.waitForSelector("[data-testid=info-modal]");
    expect("[data-testid=info-modal]").toBeTruthy();
  }, 20000);

    test("user can view map modal", async () => {
      await page.goto("http://localhost:3000/");
      await page.waitForSelector("[data-testid=map-button");
      await page.click("[data-testid=map-button]");
      expect("[data-testid=map-modal]").toBeTruthy();
    }, 20000);
});

afterAll(() => {
  browser.close();
});
