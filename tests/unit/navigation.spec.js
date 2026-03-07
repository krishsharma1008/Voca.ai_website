// @ts-check
const { test, expect } = require('@playwright/test');

/**
 * Unit tests: Navigation — header links, anchor targets, smooth scroll behaviour
 */

test.describe('Header navigation', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('domcontentloaded');
  });

  test('nav has correct accessible label', async ({ page }) => {
    await expect(page.locator('nav.site-nav')).toHaveAttribute('aria-label', 'Primary Navigation');
  });

  test('brand logo link points to #top', async ({ page }) => {
    await expect(page.locator('a.brand')).toHaveAttribute('href', '#top');
  });

  test('brand logo link has aria-label', async ({ page }) => {
    await expect(page.locator('a.brand')).toHaveAttribute('aria-label', 'VOCA AI Home');
  });

  test('"Products" nav link navigates to products section', async ({ page }) => {
    await page.locator('.site-nav a[href="#products"]').click();
    await expect(page.locator('#products')).toBeInViewport({ ratio: 0.05 });
  });

  test('"Assist Loop" nav link navigates to assist-loop section', async ({ page }) => {
    await page.locator('.site-nav a[href="#assist-loop"]').click();
    await expect(page.locator('#assist-loop')).toBeInViewport({ ratio: 0.05 });
  });

  test('"Voice Demo" nav link navigates to voice-demo section', async ({ page }) => {
    await page.locator('.site-nav a[href="#voice-demo"]').click();
    await expect(page.locator('#voice-demo')).toBeInViewport({ ratio: 0.05 });
  });

  test('"Outcomes" nav link navigates to benchmarks section', async ({ page }) => {
    await page.locator('.site-nav a[href="#benchmarks"]').click();
    await expect(page.locator('#benchmarks')).toBeInViewport({ ratio: 0.05 });
  });

  test('"Book Demo" nav link navigates to cta section', async ({ page }) => {
    await page.locator('.site-nav a[href="#cta"]').click();
    await expect(page.locator('#cta')).toBeInViewport({ ratio: 0.05 });
  });

  test('"Talk to Sales" header CTA navigates to cta section', async ({ page }) => {
    await page.locator('.header-cta').click();
    await expect(page.locator('#cta')).toBeInViewport({ ratio: 0.05 });
  });
});

test.describe('Hero CTA links', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('domcontentloaded');
  });

  test('"Book a Demo" hero button points to #cta', async ({ page }) => {
    await expect(page.locator('.hero-cta a', { hasText: 'Book a Demo' })).toHaveAttribute('href', '#cta');
  });

  test('"Hear the AI Voice Stack" hero button points to #voice-demo', async ({ page }) => {
    await expect(
      page.locator('.hero-cta a', { hasText: 'Hear the AI Voice Stack' })
    ).toHaveAttribute('href', '#voice-demo');
  });

  test('"Book a Demo" hero button scrolls to cta section', async ({ page }) => {
    await page.locator('.hero-cta a', { hasText: 'Book a Demo' }).click();
    await expect(page.locator('#cta')).toBeInViewport({ ratio: 0.05 });
  });
});
