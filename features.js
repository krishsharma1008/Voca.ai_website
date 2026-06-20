(() => {
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // ─── 1. Reveal animations ────────────────────────────────────────────────────
  function initRevealCards() {
    if (!("IntersectionObserver" in window)) {
      document.querySelectorAll(".feature-card").forEach((card) => {
        card.classList.add("visible");
      });
      return;
    }

    const cards = document.querySelectorAll(".feature-card");
    if (!cards.length) {
      return;
    }

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: "0px 0px -10% 0px",
        threshold: 0.1
      }
    );

    cards.forEach((card) => revealObserver.observe(card));
  }

  // ─── 2. Sticky subnav highlight ──────────────────────────────────────────────
  function initSubnavHighlight() {
    const subnav = document.querySelector(".features-subnav");
    if (!subnav) {
      return;
    }

    const navLinks = Array.from(subnav.querySelectorAll("a[href^='#']"));
    if (!navLinks.length) {
      return;
    }

    const sections = navLinks
      .map((link) => {
        const id = link.getAttribute("href");
        if (!id) {
          return null;
        }
        const section = document.querySelector(id);
        if (!(section instanceof HTMLElement)) {
          return null;
        }
        return { link, section };
      })
      .filter(Boolean);

    if (!sections.length || !("IntersectionObserver" in window)) {
      return;
    }

    function setActiveNavLink(activeLink) {
      navLinks.forEach((link) => {
        link.classList.toggle("active", link === activeLink);
      });
    }

    // Compute offset of subnav + site header so rootMargin accounts for sticky bars.
    function getTopOffset() {
      const header = document.querySelector(".site-header");
      const headerH = header instanceof HTMLElement ? header.offsetHeight : 0;
      const subnavH = subnav instanceof HTMLElement ? subnav.offsetHeight : 0;
      return headerH + subnavH;
    }

    const visibilityMap = new Map();
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visibilityMap.set(entry.target, entry.intersectionRatio);
          } else {
            visibilityMap.delete(entry.target);
          }
        });

        if (!visibilityMap.size) {
          return;
        }

        const bestVisible = [...visibilityMap.entries()].sort((a, b) => b[1] - a[1])[0][0];
        const match = sections.find((item) => item.section === bestVisible);
        if (match) {
          setActiveNavLink(match.link);
        }
      },
      {
        rootMargin: `-${getTopOffset() + 8}px 0px -40% 0px`,
        threshold: [0.1, 0.25, 0.5]
      }
    );

    sections.forEach((item) => sectionObserver.observe(item.section));

    // Activate first link by default.
    if (sections.length) {
      setActiveNavLink(sections[0].link);
    }
  }

  // ─── 3. Counter animations ───────────────────────────────────────────────────
  function initCounters() {
    const counterElements = document.querySelectorAll("[data-count-to]");
    if (!counterElements.length) {
      return;
    }

    if (reducedMotion || !("IntersectionObserver" in window)) {
      counterElements.forEach((counter) => {
        const target = Number(counter.getAttribute("data-count-to")) || 0;
        const label = counter.parentElement?.querySelector(".metric-label")?.textContent || "";
        counter.textContent = label.includes("%") ? `${target}%` : `${target}`;
      });
      return;
    }

    function animateCounter(counter) {
      const target = Number(counter.getAttribute("data-count-to")) || 0;
      const label = counter.parentElement?.querySelector(".metric-label")?.textContent || "";
      const duration = 1200;
      const start = performance.now();

      function tick(now) {
        const elapsed = Math.min(now - start, duration);
        const progress = elapsed / duration;
        // Ease out cubic
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = Math.round(eased * target);
        counter.textContent = label.includes("%") ? `${current}%` : `${current}`;
        if (elapsed < duration) {
          requestAnimationFrame(tick);
        }
      }

      requestAnimationFrame(tick);
    }

    const counterObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCounter(entry.target);
            counterObserver.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: "0px 0px -8% 0px",
        threshold: 0.25
      }
    );

    counterElements.forEach((counter) => counterObserver.observe(counter));
  }

  // ─── 4. Smooth scroll for subnav anchor links ────────────────────────────────
  function initSmoothScroll() {
    const subnav = document.querySelector(".features-subnav");
    if (!subnav) {
      return;
    }

    subnav.addEventListener("click", (event) => {
      const target = event.target;
      if (!(target instanceof HTMLElement)) {
        return;
      }
      const anchor = target.closest("a[href^='#']");
      if (!anchor) {
        return;
      }
      const href = anchor.getAttribute("href");
      if (!href) {
        return;
      }
      const targetSection = document.querySelector(href);
      if (!(targetSection instanceof HTMLElement)) {
        return;
      }

      event.preventDefault();

      const header = document.querySelector(".site-header");
      const headerH = header instanceof HTMLElement ? header.offsetHeight : 0;
      const subnavH = subnav instanceof HTMLElement ? subnav.offsetHeight : 0;
      const offset = headerH + subnavH + 8;

      const top = targetSection.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    });
  }

  // ─── 5. Tilt effect on .feature-card.tilt-card ───────────────────────────────
  function initTiltCards() {
    if (reducedMotion || window.matchMedia("(hover: none)").matches) {
      return;
    }

    const cards = document.querySelectorAll(".feature-card.tilt-card");
    cards.forEach((card) => {
      card.addEventListener("mousemove", (event) => {
        const rect = card.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width;
        const y = (event.clientY - rect.top) / rect.height;
        const rotateY = (x - 0.5) * 10;
        const rotateX = (0.5 - y) * 10;
        card.style.transform = `perspective(980px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg)`;
      });

      card.addEventListener("mouseleave", () => {
        card.style.transform = "";
      });
    });
  }

  // ─── 6. Footer year ──────────────────────────────────────────────────────────
  function initFooterYear() {
    const yearSpan = document.getElementById("year");
    if (yearSpan) {
      yearSpan.textContent = String(new Date().getFullYear());
    }
  }

  // ─── 7. Mobile nav toggle ────────────────────────────────────────────────────
  function initMobileNav() {
    const header = document.querySelector(".site-header");
    if (!(header instanceof HTMLElement)) {
      return;
    }

    const hamburger = header.querySelector(".nav-hamburger, [data-nav-toggle], .mobile-menu-toggle");
    const mobileNav = header.querySelector(".mobile-nav, .nav-drawer, [data-mobile-nav]");

    if (!hamburger || !mobileNav) {
      return;
    }

    function setMenuState(open) {
      const isOpen = Boolean(open);
      hamburger.setAttribute("aria-expanded", String(isOpen));
      mobileNav.classList.toggle("open", isOpen);
      document.body.classList.toggle("nav-open", isOpen);
    }

    hamburger.addEventListener("click", () => {
      const currentlyOpen = hamburger.getAttribute("aria-expanded") === "true";
      setMenuState(!currentlyOpen);
    });

    // Close on outside click.
    document.addEventListener("click", (event) => {
      if (!(event.target instanceof Node)) {
        return;
      }
      if (!header.contains(event.target)) {
        setMenuState(false);
      }
    });

    // Close on nav link click.
    mobileNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => setMenuState(false));
    });

    // Close on Escape.
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        setMenuState(false);
      }
    });
  }

  // ─── Init ────────────────────────────────────────────────────────────────────
  initRevealCards();
  initSubnavHighlight();
  initCounters();
  initSmoothScroll();
  initTiltCards();
  initFooterYear();
  initMobileNav();
})();
