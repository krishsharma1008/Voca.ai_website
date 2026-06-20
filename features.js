"use strict";

/**
 * features.js — VOCA AI Features Page
 *
 * Handles sticky subnav highlight as the user scrolls through feature sections.
 *
 * IMPORTANT: The subnav element selector (".features-subnav") MUST match the
 * class used on the <nav> in features.html.  Using any other class (e.g.
 * ".features-anchor-nav") will cause initSubnavHighlight() to silently fail.
 */

// ── Subnav highlight ────────────────────────────────────────────────────────

function initSubnavHighlight() {
  // Selector matches <nav class="features-subnav"> in features.html
  const subnav = document.querySelector(".features-subnav");
  if (!subnav) {
    return;
  }

  const links = Array.from(subnav.querySelectorAll(".features-subnav-link"));
  if (!links.length) {
    return;
  }

  // Build a map of section-id → anchor link
  const sectionMap = links
    .map((link) => {
      const href = link.getAttribute("href");
      if (!href || !href.startsWith("#")) return null;
      const section = document.querySelector(href);
      if (!(section instanceof HTMLElement)) return null;
      return { link, section };
    })
    .filter(Boolean);

  if (!sectionMap.length) {
    return;
  }

  function setActiveLink(activeLink) {
    links.forEach((link) => {
      link.classList.toggle("active", link === activeLink);
    });
  }

  // Activate first link by default
  setActiveLink(sectionMap[0].link);

  // Click sets active immediately
  links.forEach((link) => {
    link.addEventListener("click", () => setActiveLink(link));
  });

  if (!("IntersectionObserver" in window)) {
    return;
  }

  const visibilityMap = new Map();
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          visibilityMap.set(entry.target, entry.intersectionRatio);
        } else {
          visibilityMap.delete(entry.target);
        }
      });

      if (!visibilityMap.size) return;

      // Highlight the section with the most visibility
      const mostVisible = [...visibilityMap.entries()].sort((a, b) => b[1] - a[1])[0][0];
      const match = sectionMap.find((item) => item.section === mostVisible);
      if (match) {
        setActiveLink(match.link);
      }
    },
    {
      // Treat the middle 40% of the viewport as "active"
      rootMargin: "-30% 0px -30% 0px",
      threshold: [0, 0.25, 0.5, 0.75, 1],
    }
  );

  sectionMap.forEach(({ section }) => observer.observe(section));
}

// ── Smooth scroll with subnav offset ───────────────────────────────────────

function initSmoothScroll() {
  const subnav = document.querySelector(".features-subnav");

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      const href = anchor.getAttribute("href");
      if (!href) return;
      const target = document.querySelector(href);
      if (!(target instanceof HTMLElement)) return;

      e.preventDefault();

      const subnavHeight = subnav instanceof HTMLElement ? subnav.offsetHeight : 0;
      const headerHeight =
        document.querySelector(".site-header")?.offsetHeight ?? 0;
      const offset = subnavHeight + headerHeight;

      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    });
  });
}

// ── Init ────────────────────────────────────────────────────────────────────

document.addEventListener("DOMContentLoaded", () => {
  initSubnavHighlight();
  initSmoothScroll();
});
