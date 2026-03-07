// @ts-check
const { test, expect } = require('@playwright/test');

/**
 * Unit tests: Page structure — title, meta, sections, header, footer
 */

test.describe('Page structure', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('domcontentloaded');
  });

  test('has correct page title', async ({ page }) => {
    await expect(page).toHaveTitle('VOCA AI | Revenue Conversations, Optimized');
  });

  test('has correct meta description', async ({ page }) => {
    const meta = page.locator('meta[name="description"]');
    await expect(meta).toHaveAttribute(
      'content',
      'VOCA AI transforms voice operations with real-time call-center assist and autonomous multilingual voice agents.'
    );
  });

  test('renders site header with brand', async ({ page }) => {
    await expect(page.locator('.site-header')).toBeVisible();
    await expect(page.locator('.brand-text')).toHaveText('VOCA AI');
    await expect(page.locator('.brand-sub')).toHaveText('Revenue Voice OS');
  });

  test('header has all nav links', async ({ page }) => {
    const nav = page.locator('.site-nav');
    await expect(nav).toBeVisible();
    await expect(nav.locator('a[href="#products"]')).toBeVisible();
    await expect(nav.locator('a[href="#assist-loop"]')).toBeVisible();
    await expect(nav.locator('a[href="#voice-demo"]')).toBeVisible();
    await expect(nav.locator('a[href="#benchmarks"]')).toBeVisible();
    await expect(nav.locator('a[href="#cta"]')).toBeVisible();
  });

  test('header has "Talk to Sales" CTA button', async ({ page }) => {
    const cta = page.locator('.header-cta');
    await expect(cta).toBeVisible();
    await expect(cta).toHaveText('Talk to Sales');
    await expect(cta).toHaveAttribute('href', '#cta');
  });

  test('all main sections are present in the DOM', async ({ page }) => {
    for (const id of [
      'hero', 'leak', 'legacy', 'products', 'assistiq',
      'assist-loop', 'voiceos', 'voice-demo', 'benchmarks',
      'integrations', 'guardrails', 'faq', 'cta',
    ]) {
      await expect(page.locator(`#${id}`)).toBeAttached();
    }
  });

  test('footer is visible and contains copyright text', async ({ page }) => {
    const footer = page.locator('.site-footer');
    await expect(footer).toBeVisible();
    await expect(footer.locator('#year')).toHaveText(String(new Date().getFullYear()));
    await expect(footer).toContainText('VOCA AI. All rights reserved.');
  });

  test('toast element is present in the DOM', async ({ page }) => {
    await expect(page.locator('#toast')).toBeAttached();
  });
});
