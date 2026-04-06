import { test, expect } from '@playwright/test';

const LANGUAGE_PAIRS = [
  { sk: '/', en: '/en' },
  { sk: '/o-nas', en: '/en/about' },
  { sk: '/sluzby', en: '/en/services' },
  { sk: '/svadobne-saty', en: '/en/dresses' },
  { sk: '/galeria', en: '/en/galeria' },
  { sk: '/blog', en: '/en/blog' },
  { sk: '/komisny-predaj', en: '/en/consignment' },
  { sk: '/prenajom-dekoracii', en: '/en/decorations' },
  { sk: '/partneri', en: '/en/partners' },
  { sk: '/kontakt', en: '/en/contact' },
];

for (const pair of LANGUAGE_PAIRS) {
  test(`Switching from SK (${pair.sk}) to EN`, async ({ page }) => {
    await page.goto(pair.sk);
    
    // Find language switcher - it has "SK / EN" or similar
    // According to LanguageSwitcher.astro, it's an <a> with class "language-switcher"
    const switcher = page.locator('a.language-switcher');
    await expect(switcher).toBeVisible();
    
    await switcher.click();
    
    // Check if the URL is correct
    const expectedUrl = pair.en;
    await page.waitForURL(`**${expectedUrl}**`);
    expect(page.url()).toContain(expectedUrl);
    
    // Verify it's not 404
    const bodyText = await page.innerText('body');
    expect(bodyText.toLowerCase()).not.toContain('404');
    expect(bodyText.toLowerCase()).not.toContain('page not found');
  });

  test(`Switching from EN (${pair.en}) to SK`, async ({ page }) => {
    await page.goto(pair.en);
    
    const switcher = page.locator('a.language-switcher');
    await expect(switcher).toBeVisible();
    
    await switcher.click();
    
    const expectedUrl = pair.sk;
    // For root, it might be just the domain
    if (expectedUrl === '/') {
       // Just check it doesn't contain /en
       expect(page.url()).not.toContain('/en');
    } else {
       await page.waitForURL(`**${expectedUrl}**`);
       expect(page.url()).toContain(expectedUrl);
    }
    
    const bodyText = await page.innerText('body');
    expect(bodyText.toLowerCase()).not.toContain('404');
  });
}

test('Handles blog post language switching', async ({ page }) => {
  // Use one of the known blog posts
  const skPost = '/blog/svadobne-trendy-2026';
  const enPost = '/en/blog/wedding-trends-2026';
  
  await page.goto(skPost);
  await page.locator('a.language-switcher').click();
  
  await page.waitForURL(`**${enPost}**`);
  expect(page.url()).toContain(enPost);
  
  await page.locator('a.language-switcher').click();
  await page.waitForURL(`**${skPost}**`);
  expect(page.url()).toContain(skPost);
});
