// @ts-check
const { test, expect } = require('@playwright/test');

/**
 * Unit tests: Dynamic content rendering — hero, pain points, products, FAQ, CTA, etc.
 */

test.describe('Hero section content', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('domcontentloaded');
  });

  test('renders hero eyebrow text', async ({ page }) => {
    await expect(page.locator('#hero-eyebrow')).toHaveText('AI-Native Conversational Intelligence');
  });

  test('renders hero title text', async ({ page }) => {
    await expect(page.locator('#hero-title')).toHaveText(
      'Revenue conversations, optimized in real time.'
    );
  });

  test('renders hero subtitle text', async ({ page }) => {
    await expect(page.locator('#hero-subtitle')).toContainText('VOCA AI turns every call into a growth engine');
  });

  test('renders hero kicker pills', async ({ page }) => {
    const pills = page.locator('.hero-kicker-pill');
    await expect(pills).toHaveCount(2);
    await expect(pills.nth(0)).toHaveText('VOCA AssistIQ');
    await expect(pills.nth(1)).toHaveText('VOCA VoiceOS');
  });

  test('renders three metric chips with correct labels', async ({ page }) => {
    const chips = page.locator('.metric-chip');
    await expect(chips).toHaveCount(3);
    await expect(chips.nth(0)).toContainText('conversion uplift potential');
    await expect(chips.nth(1)).toContainText('near-miss recovery potential');
    await expect(chips.nth(2)).toContainText('Indic languages + English');
  });

  test('hero has "Book a Demo" and "Hear the AI Voice Stack" buttons', async ({ page }) => {
    await expect(page.locator('.hero-cta a').filter({ hasText: 'Book a Demo' })).toBeVisible();
    await expect(page.locator('.hero-cta a').filter({ hasText: 'Hear the AI Voice Stack' })).toBeVisible();
  });

  test('live intent stream feed is visible with three items', async ({ page }) => {
    await expect(page.locator('.live-feed li')).toHaveCount(3);
  });
});

test.describe('Pain points section', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('domcontentloaded');
  });

  test('renders four pain point cards', async ({ page }) => {
    await expect(page.locator('.pain-card')).toHaveCount(4);
  });

  test('first pain card has correct title', async ({ page }) => {
    await expect(page.locator('.pain-card').nth(0)).toContainText('High-intent calls go cold');
  });

  test('all pain card titles are present', async ({ page }) => {
    const titles = ['High-intent calls go cold', 'Upsell and cross-sell are missed', 'Coaching stays reactive', 'Post-call recovery is manual'];
    for (const title of titles) {
      await expect(page.locator('.pain-card h3', { hasText: title })).toBeAttached();
    }
  });
});

test.describe('Products section', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('domcontentloaded');
  });

  test('renders two product cards', async ({ page }) => {
    await expect(page.locator('#product-cards .product-card')).toHaveCount(2);
  });

  test('first product card is VOCA AssistIQ', async ({ page }) => {
    const card = page.locator('#product-cards .product-card').nth(0);
    await expect(card).toContainText('VOCA AssistIQ');
    await expect(card).toContainText('During + Post Call Assist');
  });

  test('second product card is VOCA VoiceOS', async ({ page }) => {
    const card = page.locator('#product-cards .product-card').nth(1);
    await expect(card).toContainText('VOCA VoiceOS');
    await expect(card).toContainText('Autonomous Voice Agent');
  });

  test('each product card has bullet points', async ({ page }) => {
    const cards = page.locator('#product-cards .product-card');
    await expect(cards.nth(0).locator('li')).toHaveCount(3);
    await expect(cards.nth(1).locator('li')).toHaveCount(3);
  });
});

test.describe('AssistIQ detail section', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('domcontentloaded');
  });

  test('renders AssistIQ signal map card', async ({ page }) => {
    await expect(page.locator('#assistiq .detail-card')).toBeAttached();
    await expect(page.locator('#assistiq')).toContainText('AssistIQ Signal Map');
  });

  test('signal map has four signal items', async ({ page }) => {
    await expect(page.locator('#assistiq .signal-item')).toHaveCount(4);
  });

  test('feature list has five items', async ({ page }) => {
    await expect(page.locator('#assistiq .feature-list li')).toHaveCount(5);
  });
});

test.describe('Assist loop section', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('domcontentloaded');
  });

  test('renders six assist loop feature cards', async ({ page }) => {
    await expect(page.locator('#assist-loop-grid .assist-loop-card')).toHaveCount(6);
  });

  test('each card has a kicker, title, body and metric', async ({ page }) => {
    const card = page.locator('#assist-loop-grid .assist-loop-card').nth(0);
    await expect(card.locator('.assist-kicker')).toBeAttached();
    await expect(card.locator('h3')).toBeAttached();
    await expect(card.locator('p')).toBeAttached();
    await expect(card.locator('.assist-metric')).toBeAttached();
  });
});

test.describe('VoiceOS section', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('domcontentloaded');
  });

  test('renders language cloud with 23 language chips', async ({ page }) => {
    await expect(page.locator('#language-cloud .chip')).toHaveCount(23);
  });

  test('language cloud contains English', async ({ page }) => {
    await expect(page.locator('#language-cloud .chip', { hasText: 'English' })).toBeAttached();
  });

  test('language cloud contains Hindi', async ({ page }) => {
    await expect(page.locator('#language-cloud .chip', { hasText: 'Hindi' })).toBeAttached();
  });

  test('VoiceOS workflow list has five steps', async ({ page }) => {
    await expect(page.locator('#voiceos .workflow-list li')).toHaveCount(5);
  });
});

test.describe('Benchmarks section', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('domcontentloaded');
  });

  test('renders three spotlight cards', async ({ page }) => {
    await expect(page.locator('#benchmark-spotlight .spotlight-card')).toHaveCount(3);
  });

  test('primary spotlight card shows recoverable revenue', async ({ page }) => {
    await expect(page.locator('#benchmark-spotlight .spotlight-card.primary')).toContainText('$500K-$3M+');
  });

  test('renders six benchmark cards', async ({ page }) => {
    await expect(page.locator('#benchmark-cards .benchmark-card')).toHaveCount(6);
  });

  test('benchmark cards have correct kpi values', async ({ page }) => {
    const kpis = ['5-15%', '8-19%', '10-20%', '8-18%', '12-25%', '6-14%'];
    for (const kpi of kpis) {
      await expect(page.locator('#benchmark-cards .benchmark-kpi', { hasText: kpi })).toBeAttached();
    }
  });
});

test.describe('FAQ section', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('domcontentloaded');
  });

  test('renders five FAQ items', async ({ page }) => {
    await expect(page.locator('#faq-list .faq-item')).toHaveCount(5);
  });

  test('first FAQ asks about replacing the call center team', async ({ page }) => {
    await expect(page.locator('#faq-list .faq-item').nth(0)).toContainText(
      'Does VOCA AI replace my call center team?'
    );
  });

  test('FAQ item answer is accessible via details element', async ({ page }) => {
    const firstItem = page.locator('#faq-list details.faq-item').nth(0);
    await expect(firstItem.locator('summary')).toBeVisible();
    await expect(firstItem.locator('p')).toBeAttached();
  });
});

test.describe('CTA section content', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('domcontentloaded');
  });

  test('renders CTA title', async ({ page }) => {
    await expect(page.locator('#cta-title')).toHaveText(
      'Map your conversion upside in one focused demo.'
    );
  });

  test('renders CTA subtitle', async ({ page }) => {
    await expect(page.locator('#cta-subtitle')).toContainText('Share your call volume and priorities');
  });

  test('CTA has four bullet points', async ({ page }) => {
    await expect(page.locator('#cta .cta-bullets li')).toHaveCount(4);
  });
});

test.describe('Legacy comparison section', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('domcontentloaded');
  });

  test('has Traditional Flow and VOCA Revenue Flow panels', async ({ page }) => {
    await expect(page.locator('.legacy-before')).toContainText('Traditional Flow');
    await expect(page.locator('.legacy-after')).toContainText('VOCA Revenue Flow');
  });
});

test.describe('Integrations section', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('domcontentloaded');
  });

  test('stack strip shows key integration types', async ({ page }) => {
    const strip = page.locator('.stack-strip');
    await expect(strip).toContainText('CRM');
    await expect(strip).toContainText('Dialer');
    await expect(strip).toContainText('BI');
  });

  test('timeline grid has three phases', async ({ page }) => {
    await expect(page.locator('.timeline-grid article')).toHaveCount(3);
  });
});

test.describe('Guardrails section', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('domcontentloaded');
  });

  test('has three guardrail articles', async ({ page }) => {
    await expect(page.locator('.guardrail-grid article')).toHaveCount(3);
  });

  test('includes Human-in-the-loop, Approval gating, and Auditability', async ({ page }) => {
    const grid = page.locator('.guardrail-grid');
    await expect(grid).toContainText('Human-in-the-loop');
    await expect(grid).toContainText('Approval gating');
    await expect(grid).toContainText('Auditability');
  });
});
