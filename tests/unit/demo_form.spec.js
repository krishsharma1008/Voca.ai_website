// @ts-check
const { test, expect } = require('@playwright/test');

/**
 * Unit tests: Demo request form — fields, validation, honeypot, submit button
 */

test.describe('Demo form structure', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('domcontentloaded');
    // Scroll to the CTA section where the form lives
    await page.locator('#cta').scrollIntoViewIfNeeded();
  });

  test('form is present and visible', async ({ page }) => {
    await expect(page.locator('#demo-form')).toBeVisible();
  });

  test('form has Full name field', async ({ page }) => {
    await expect(page.locator('#full_name')).toBeVisible();
    await expect(page.locator('label[for="full_name"]')).toHaveText('Full name');
  });

  test('form has Work email field', async ({ page }) => {
    await expect(page.locator('#work_email')).toBeVisible();
    await expect(page.locator('label[for="work_email"]')).toHaveText('Work email');
  });

  test('form has Company field', async ({ page }) => {
    await expect(page.locator('#company')).toBeVisible();
    await expect(page.locator('label[for="company"]')).toHaveText('Company');
  });

  test('form has Monthly call volume dropdown', async ({ page }) => {
    await expect(page.locator('#monthly_call_volume')).toBeVisible();
    await expect(page.locator('label[for="monthly_call_volume"]')).toHaveText('Monthly call volume');
  });

  test('monthly call volume dropdown has four options plus placeholder', async ({ page }) => {
    const options = page.locator('#monthly_call_volume option');
    await expect(options).toHaveCount(5); // 1 placeholder + 4 real options
  });

  test('form has Primary interest dropdown', async ({ page }) => {
    await expect(page.locator('#interest')).toBeVisible();
    await expect(page.locator('label[for="interest"]')).toHaveText('Primary interest');
  });

  test('interest dropdown has AssistIQ, VoiceOS, Both options', async ({ page }) => {
    const select = page.locator('#interest');
    await expect(select.locator('option[value="AssistIQ"]')).toBeAttached();
    await expect(select.locator('option[value="VoiceOS"]')).toBeAttached();
    await expect(select.locator('option[value="Both"]')).toBeAttached();
  });

  test('form has Message textarea', async ({ page }) => {
    await expect(page.locator('#message')).toBeVisible();
    await expect(page.locator('label[for="message"]')).toContainText('Message');
  });

  test('form has submit button with correct text', async ({ page }) => {
    await expect(page.locator('#demo-form button[type="submit"]')).toHaveText('Request Demo');
  });

  test('honeypot field is inaccessible to users (aria-hidden, tabindex=-1)', async ({ page }) => {
    const honeypot = page.locator('input[name="_honey"]');
    await expect(honeypot).toBeAttached();
    await expect(honeypot).toHaveAttribute('aria-hidden', 'true');
    await expect(honeypot).toHaveAttribute('tabindex', '-1');
    // Positioned far off-screen via CSS (left: -9999px) rather than display:none
    await expect(honeypot).toHaveCSS('position', 'absolute');
  });

  test('fallback mailto link is present', async ({ page }) => {
    await expect(page.locator('#fallback-mailto')).toBeAttached();
    await expect(page.locator('#fallback-mailto')).toHaveAttribute(
      'href',
      /mailto:krish\.sharma@zapcg\.com/
    );
  });
});

test.describe('Demo form field interactions', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('domcontentloaded');
    await page.locator('#cta').scrollIntoViewIfNeeded();
  });

  test('user can type into the Full name field', async ({ page }) => {
    await page.locator('#full_name').fill('Jane Doe');
    await expect(page.locator('#full_name')).toHaveValue('Jane Doe');
  });

  test('user can type a valid email', async ({ page }) => {
    await page.locator('#work_email').fill('jane@example.com');
    await expect(page.locator('#work_email')).toHaveValue('jane@example.com');
  });

  test('user can type a company name', async ({ page }) => {
    await page.locator('#company').fill('Acme Corp');
    await expect(page.locator('#company')).toHaveValue('Acme Corp');
  });

  test('user can select a call volume option', async ({ page }) => {
    await page.locator('#monthly_call_volume').selectOption('10k-50k');
    await expect(page.locator('#monthly_call_volume')).toHaveValue('10k-50k');
  });

  test('user can select a product interest', async ({ page }) => {
    await page.locator('#interest').selectOption('AssistIQ');
    await expect(page.locator('#interest')).toHaveValue('AssistIQ');
  });

  test('user can enter a message', async ({ page }) => {
    await page.locator('#message').fill('Testing the form.');
    await expect(page.locator('#message')).toHaveValue('Testing the form.');
  });
});
