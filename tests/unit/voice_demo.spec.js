// @ts-check
const { test, expect } = require('@playwright/test');

/**
 * Unit tests: Voice demo player — controls, segment buttons, accent chips, transcript strip
 */

test.describe('Voice demo player UI', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('domcontentloaded');
    await page.locator('#voice-demo').scrollIntoViewIfNeeded();
  });

  test('audio element is present', async ({ page }) => {
    await expect(page.locator('#demo-audio')).toBeAttached();
    await expect(page.locator('#demo-audio')).toHaveAttribute('src', 'assets/voca-demo.mp3');
  });

  test('play/pause button is visible with initial "Play audio" text', async ({ page }) => {
    const btn = page.locator('#play-toggle');
    await expect(btn).toBeVisible();
    await expect(btn).toHaveText('Play audio');
  });

  test('seek slider is visible', async ({ page }) => {
    const slider = page.locator('#seek-slider');
    await expect(slider).toBeVisible();
    await expect(slider).toHaveAttribute('type', 'range');
  });

  test('time display elements are present', async ({ page }) => {
    await expect(page.locator('#current-time')).toBeVisible();
    await expect(page.locator('#total-time')).toBeVisible();
    await expect(page.locator('#current-time')).toHaveText('00:00');
  });

  test('audio visualizer canvas is present', async ({ page }) => {
    await expect(page.locator('#audio-visualizer')).toBeAttached();
  });

  test('renders five segment jump buttons', async ({ page }) => {
    await expect(page.locator('#segment-row .segment-btn')).toHaveCount(5);
  });

  test('segment buttons have correct labels', async ({ page }) => {
    const labels = ['Intro', 'Intent routing', 'Offer handling', 'Language shift', 'Escalation'];
    const buttons = page.locator('#segment-row .segment-btn');
    for (let i = 0; i < labels.length; i++) {
      await expect(buttons.nth(i)).toHaveText(labels[i]);
    }
  });

  test('renders eight accent coverage chips', async ({ page }) => {
    await expect(page.locator('#accent-row .segment-btn')).toHaveCount(8);
  });

  test('accent chips include US English and Indian English', async ({ page }) => {
    const row = page.locator('#accent-row');
    await expect(row.locator('.segment-btn', { hasText: 'US English' })).toBeAttached();
    await expect(row.locator('.segment-btn', { hasText: 'Indian English' })).toBeAttached();
  });

  test('renders five transcript items', async ({ page }) => {
    await expect(page.locator('#transcript-strip .transcript-item')).toHaveCount(5);
  });

  test('transcript items are clickable buttons', async ({ page }) => {
    const items = page.locator('#transcript-strip .transcript-item');
    await expect(items.first()).toHaveAttribute('type', 'button');
    await expect(items.first()).toHaveAttribute('data-transcript-time');
  });

  test('clicking an accent chip marks it active', async ({ page }) => {
    const firstChip = page.locator('#accent-row .segment-btn').first();
    await firstChip.click();
    await expect(firstChip).toHaveClass(/active/);
  });

  test('clicking another accent chip removes active from previous', async ({ page }) => {
    const chips = page.locator('#accent-row .segment-btn');
    await chips.nth(0).click();
    await chips.nth(1).click();
    await expect(chips.nth(0)).not.toHaveClass(/active/);
    await expect(chips.nth(1)).toHaveClass(/active/);
  });
});
