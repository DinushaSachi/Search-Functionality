import { test, expect } from '@playwright/test';
import { matchers } from 'expect-playwright'

expect.extend(matchers)

const SEARCH_BOX = '#searchField1';
const SEARCH_RESULTS_TEXT = 'div.search__result.search__result--space > span.result__suffix';
const BOOK_NAME = "Health care Science";


test('Verify the Search functionality of onlinelibrary.willey.com', async ({ page }) => {
  await page.goto('https://onlinelibrary.wiley.com/');

  await page.waitForSelector(SEARCH_BOX);
  
  await page.fill(SEARCH_BOX,BOOK_NAME);

  await page.keyboard.press('Enter');

  await page.waitForSelector(SEARCH_RESULTS_TEXT)

  await expect(page).toMatchText(SEARCH_RESULTS_TEXT, `"${BOOK_NAME}" anywhere `)

});


