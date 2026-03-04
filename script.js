(() => {
  const content = {
    hero: {
      eyebrow: "AI-Native Conversational Intelligence",
      title: "Revenue conversations, optimized in real time.",
      subtitle:
        "VOCA AI turns every call into a growth engine with live upsell and cross-sell nudges, post-call reachouts, and multilingual voice automation."
    },
    painPoints: [
      {
        title: "High-intent calls go cold",
        body: "Booking-ready callers drop off when agents do not get live nudges at objection moments."
      },
      {
        title: "Upsell and cross-sell are missed",
        body: "Attach opportunities are visible in intent patterns but lost without contextual prompt timing."
      },
      {
        title: "Coaching stays reactive",
        body: "Supervisors diagnose outcomes post-call rather than steering outcomes while the call is active."
      },
      {
        title: "Post-call recovery is manual",
        body: "Dropped near-booked calls often sit unworked without automated follow-up orchestration."
      }
    ],
    productCards: [
      {
        tag: "During + Post Call Assist",
        title: "VOCA AssistIQ",
        summary:
          "A real-time copilot that drives better close rates with in-call nudges and post-call recovery automation.",
        bullets: [
          "Upsell and cross-sell nudge engine by intent",
          "Objection rescue prompts in live conversation",
          "Post-call reachouts via callback, SMS, and email"
        ]
      },
      {
        tag: "Autonomous Voice Agent",
        title: "VOCA VoiceOS",
        summary:
          "A fully voice-agent stack for qualification, resolution, and booking flows with multilingual coverage.",
        bullets: [
          "Natural conversation orchestration",
          "Seamless human handoff controls",
          "Indic + English language handling"
        ]
      }
    ],
    assistLoopFeatures: [
      {
        kicker: "Live Call",
        title: "Nudge stream for upsell and cross-sell",
        body: "AssistIQ scores product fit and injects next-best offer nudges while the caller is still engaged.",
        metric: "Up to 2.4x higher attach prompt coverage"
      },
      {
        kicker: "Live Call",
        title: "Objection rescue playbooks",
        body: "Dynamic rebuttal prompts are selected by objection type, tone, and intent confidence.",
        metric: "Response latency under 1.5s"
      },
      {
        kicker: "Post Call",
        title: "Instant reachout orchestration",
        body: "Dropped high-intent calls trigger callback queueing, SMS follow-up, and email workflows.",
        metric: "Reachout triggers in under 60s"
      },
      {
        kicker: "Post Call",
        title: "Supervisor recovery queue",
        body: "Near-booked leads are prioritized by value, urgency, and conversion probability.",
        metric: "Priority ranking across all active queues"
      },
      {
        kicker: "QA + Coaching",
        title: "Nudge acceptance analytics",
        body: "Track which nudges reps accept and correlate behavior with close outcomes.",
        metric: "Coach by behavior, not guesswork"
      },
      {
        kicker: "Revenue Ops",
        title: "Cross-sell playbook experiments",
        body: "Run offer prompts as controlled experiments and optimize by queue, team, and language.",
        metric: "Continuous playbook tuning cycle"
      }
    ],
    benchmarkSpotlight: [
      {
        label: "Recoverable annual revenue potential",
        value: "$500K-$3M+",
        note: "Modeled upside band for mid-size to enterprise voice programs.",
        primary: true
      },
      {
        label: "Combined uplift potential",
        value: "13-34%",
        note: "Conversion + cross-sell improvement bands across optimized queues."
      },
      {
        label: "Pilot-to-impact window",
        value: "6-12 weeks",
        note: "Typical range to establish signal loops and measurable gains."
      }
    ],
    benchmarkBands: [
      {
        kpi: "5-15%",
        title: "Conversion uplift potential",
        body: "Improved live guidance and objection handling during high-intent moments.",
        fill: 88,
        badge: "Core growth",
        signal: "High impact",
        priority: "high"
      },
      {
        kpi: "8-19%",
        title: "Cross-sell attach uplift potential",
        body: "Contextual nudges increase relevant add-on and multi-service conversion rates.",
        fill: 79,
        badge: "Attach engine",
        signal: "High impact",
        priority: "high"
      },
      {
        kpi: "10-20%",
        title: "Near-miss recovery potential",
        body: "Automated post-call reachouts recover dropped calls with strong booking intent.",
        fill: 82,
        badge: "Revenue save",
        signal: "High impact",
        priority: "high"
      },
      {
        kpi: "8-18%",
        title: "AHT efficiency potential",
        body: "Faster resolution through contextual prompts and structured conversation paths.",
        fill: 74,
        badge: "Efficiency",
        signal: "Performance",
        priority: "normal"
      },
      {
        kpi: "12-25%",
        title: "Rep productivity potential",
        body: "Reduced performance variance between top and average performers.",
        fill: 84,
        badge: "Team lift",
        signal: "Performance",
        priority: "normal"
      },
      {
        kpi: "6-14%",
        title: "CSAT lift potential",
        body: "Higher comprehension and trust with native-language support and smoother escalation.",
        fill: 68,
        badge: "Experience",
        signal: "Stability",
        priority: "normal"
      }
    ],
    languageList: [
      "Assamese",
      "Bengali",
      "Bodo",
      "Dogri",
      "English",
      "Gujarati",
      "Hindi",
      "Kannada",
      "Kashmiri",
      "Konkani",
      "Maithili",
      "Malayalam",
      "Manipuri",
      "Marathi",
      "Nepali",
      "Odia",
      "Punjabi",
      "Sanskrit",
      "Santali",
      "Sindhi",
      "Tamil",
      "Telugu",
      "Urdu"
    ],
    accents: [
      "US English",
      "Indian English",
      "Hindi",
      "Tamil",
      "Telugu",
      "Bengali",
      "Marathi",
      "Gujarati"
    ],
    segments: [
      { label: "Intro", time: 0 },
      { label: "Intent routing", time: 26 },
      { label: "Offer handling", time: 61 },
      { label: "Language shift", time: 93 },
      { label: "Escalation", time: 121 }
    ],
    transcript: [
      { time: 11, text: "Understood. I can help you with availability and next steps right now." },
      { time: 38, text: "I can also check the annual plan option that reduces total cost." },
      { time: 56, text: "Would you like me to bundle the maintenance add-on with this booking?" },
      { time: 71, text: "Would you prefer to continue in Hindi, English, or your regional language?" },
      { time: 108, text: "I am triggering a callback and message follow-up with your context attached." }
    ],
    faq: [
      {
        q: "Does VOCA AI replace my call center team?",
        a: "No. VOCA AI is built to augment reps and supervisors with real-time intelligence while keeping human control where required."
      },
      {
        q: "Can we start with AssistIQ before VoiceOS?",
        a: "Yes. Teams often deploy AssistIQ first for fast conversion gains, then roll out VoiceOS by queue and language."
      },
      {
        q: "Does AssistIQ support post-call reachouts?",
        a: "Yes. It can trigger callback tasks, messaging workflows, and prioritized follow-up queues for dropped high-intent calls."
      },
      {
        q: "How long does implementation take?",
        a: "Pilot-ready integrations are typically scoped in weeks, with staged rollout aligned to priority call flows."
      },
      {
        q: "How do you handle multilingual operations?",
        a: "VoiceOS supports broad Indic language coverage plus English variants with configurable escalation logic."
      }
    ],
    cta: {
      title: "Map your conversion upside in one focused demo.",
      subtitle:
        "Share your call volume and priorities. We will tailor a VOCA AssistIQ + VoiceOS blueprint with upsell, cross-sell, and reachout workflows."
    }
  };

  const minimalTheme = document.body.classList.contains("theme-minimal");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function renderCopy() {
    const heroEyebrow = document.getElementById("hero-eyebrow");
    const heroTitle = document.getElementById("hero-title");
    const heroSubtitle = document.getElementById("hero-subtitle");
    const painPoints = document.getElementById("pain-points");
    const productCards = document.getElementById("product-cards");
    const assistLoopGrid = document.getElementById("assist-loop-grid");
    const languageCloud = document.getElementById("language-cloud");
    const benchmarkSpotlight = document.getElementById("benchmark-spotlight");
    const benchmarkCards = document.getElementById("benchmark-cards");
    const faqList = document.getElementById("faq-list");
    const ctaTitle = document.getElementById("cta-title");
    const ctaSubtitle = document.getElementById("cta-subtitle");
    const segmentRow = document.getElementById("segment-row");
    const accentRow = document.getElementById("accent-row");
    const transcriptStrip = document.getElementById("transcript-strip");

    heroEyebrow.textContent = content.hero.eyebrow;
    heroTitle.textContent = content.hero.title;
    heroSubtitle.textContent = content.hero.subtitle;

    painPoints.innerHTML = content.painPoints
      .map(
        (item) => `
          <article class="pain-card" data-reveal>
            <h3>${item.title}</h3>
            <p>${item.body}</p>
          </article>
        `
      )
      .join("");

    productCards.innerHTML = content.productCards
      .map(
        (item) => `
          <article class="product-card tilt-card" data-reveal>
            <div class="product-card-inner">
              <span class="product-tag">${item.tag}</span>
              <h3>${item.title}</h3>
              <p>${item.summary}</p>
              <ul>
                ${item.bullets.map((line) => `<li>${line}</li>`).join("")}
              </ul>
            </div>
          </article>
        `
      )
      .join("");

    assistLoopGrid.innerHTML = content.assistLoopFeatures
      .map(
        (item) => `
          <article class="assist-loop-card tilt-card" data-reveal>
            <span class="assist-kicker">${item.kicker}</span>
            <h3>${item.title}</h3>
            <p>${item.body}</p>
            <div class="assist-metric">${item.metric}</div>
          </article>
        `
      )
      .join("");

    languageCloud.innerHTML = content.languageList.map((item) => `<span class="chip">${item}</span>`).join("");

    benchmarkSpotlight.innerHTML = content.benchmarkSpotlight
      .map(
        (item) => `
          <article class="spotlight-card${item.primary ? " primary" : ""}" data-reveal>
            <p class="spotlight-label">${item.label}</p>
            <p class="spotlight-value">${item.value}</p>
            <p class="spotlight-note">${item.note}</p>
          </article>
        `
      )
      .join("");

    benchmarkCards.innerHTML = content.benchmarkBands
      .map(
        (item) => `
          <article class="benchmark-card" data-reveal data-priority="${item.priority}">
            <div class="benchmark-topline">
              <span class="benchmark-badge">${item.badge}</span>
              <span class="benchmark-signal">${item.signal}</span>
            </div>
            <div class="benchmark-kpi">${item.kpi}</div>
            <h3>${item.title}</h3>
            <p>${item.body}</p>
            <div class="bar-track"><i data-fill="${item.fill}"></i></div>
          </article>
        `
      )
      .join("");

    faqList.innerHTML = content.faq
      .map(
        (item) => `
          <details class="faq-item" data-reveal>
            <summary>${item.q}</summary>
            <p>${item.a}</p>
          </details>
        `
      )
      .join("");

    ctaTitle.textContent = content.cta.title;
    ctaSubtitle.textContent = content.cta.subtitle;

    segmentRow.innerHTML = content.segments
      .map(
        (item) => `<button type="button" class="segment-btn" data-segment-time="${item.time}">${item.label}</button>`
      )
      .join("");

    accentRow.innerHTML = content.accents
      .map((item) => `<button type="button" class="segment-btn" data-accent-chip>${item}</button>`)
      .join("");

    transcriptStrip.innerHTML = content.transcript
      .map(
        (item) => `
          <button type="button" class="transcript-item" data-transcript-time="${item.time}">
            ${item.text}
          </button>
        `
      )
      .join("");

    document.getElementById("year").textContent = String(new Date().getFullYear());
  }

  function formatTime(seconds) {
    const sec = Math.max(0, Math.floor(Number(seconds) || 0));
    const min = Math.floor(sec / 60);
    const remain = sec % 60;
    return `${String(min).padStart(2, "0")}:${String(remain).padStart(2, "0")}`;
  }

  function initWaveCanvases() {
    const canvases = Array.from(document.querySelectorAll("canvas[data-wave-tone], #hero-wave"));
    if (!canvases.length) {
      return;
    }

    const contexts = canvases
      .map((canvas) => {
        const context = canvas.getContext("2d");
        if (!context) {
          return null;
        }
        const tone = canvas.getAttribute("data-wave-tone") || "hero";
        const id = canvas.id || "";
        let label = "";
        if (id === "assist-wave") {
          label = "VOCA AssistIQ";
        } else if (id === "voice-wave") {
          label = "VOCA VoiceOS";
        } else if (id === "wave-divider-leak") {
          label = "VOCA AssistIQ   x   VOCA VoiceOS";
        }
        return { canvas, context, tone, label };
      })
      .filter(Boolean);

    if (!contexts.length) {
      return;
    }

    function getPalette(tone) {
      if (tone === "coral") {
        return [
          ["rgba(255, 191, 84, 0.9)", 13, 0.012, 0.2],
          ["rgba(255, 140, 97, 0.75)", 18, 0.015, 1.0],
          ["rgba(46, 206, 255, 0.56)", 10, 0.018, 1.7]
        ];
      }
      if (tone === "teal") {
        return [
          ["rgba(25, 239, 208, 0.88)", 14, 0.011, 0.1],
          ["rgba(43, 200, 255, 0.78)", 18, 0.014, 0.7],
          ["rgba(255, 191, 84, 0.5)", 9, 0.019, 1.6]
        ];
      }
      return [
        ["rgba(25, 239, 208, 0.85)", 18, 0.011, 0.0],
        ["rgba(43, 200, 255, 0.8)", 30, 0.014, 0.8],
        ["rgba(255, 140, 97, 0.68)", 12, 0.018, 1.2]
      ];
    }

    function drawCanvasFrame(canvas, context, tone, label, time) {
      const width = canvas.width;
      const height = canvas.height;
      const centerY = height / 2;
      const fillAlpha = minimalTheme ? (tone === "hero" ? 0.22 : 0.36) : tone === "hero" ? 0.45 : 0.75;

      context.clearRect(0, 0, width, height);
      context.fillStyle = `rgba(6, 11, 20, ${fillAlpha})`;
      context.fillRect(0, 0, width, height);

      const palette = getPalette(tone);
      palette.forEach(([color, amplitude, freq, phase], index) => {
        context.beginPath();
        context.lineWidth = minimalTheme ? 1.2 : tone === "hero" ? 2 : 1.7;
        context.strokeStyle = color;
        for (let x = 0; x <= width; x += 2) {
          const waveDrift = tone === "hero" ? 0.0016 : 0.0022;
          const y =
            centerY +
            Math.sin(x * Number(freq) + Number(phase) + time * waveDrift) * Number(amplitude) +
            Math.sin(x * 0.003 + time * (0.0011 + index * 0.0002)) * (tone === "hero" ? 8 : 4);
          if (x === 0) {
            context.moveTo(x, y);
          } else {
            context.lineTo(x, y);
          }
        }
        context.stroke();
      });

      if (!label || minimalTheme) {
        return;
      }

      const fontSize = Math.max(22, Math.min(42, height * 0.27));
      context.textAlign = "center";
      context.textBaseline = "middle";
      context.font = `700 ${fontSize}px "Syne", "Trebuchet MS", sans-serif`;

      const textY = centerY;
      const textX = width / 2;
      const measuredWidth = context.measureText(label).width;

      context.lineWidth = 1;
      context.strokeStyle = "rgba(161, 222, 255, 0.35)";
      context.strokeText(label, textX, textY);

      context.fillStyle = "rgba(199, 229, 255, 0.22)";
      context.fillText(label, textX, textY);

      // Animated left-to-right scan that makes the text feel wave-written.
      const sweepProgress = ((Math.sin(time * 0.0013 + width * 0.0008) + 1) / 2) * 0.88 + 0.12;
      const left = textX - measuredWidth / 2;
      const revealWidth = measuredWidth * sweepProgress;

      context.save();
      context.beginPath();
      context.rect(left, textY - fontSize * 0.62, revealWidth, fontSize * 1.24);
      context.clip();

      const textGradient = context.createLinearGradient(left, 0, left + measuredWidth, 0);
      textGradient.addColorStop(0, "rgba(130, 248, 236, 0.94)");
      textGradient.addColorStop(0.45, "rgba(120, 223, 255, 0.98)");
      textGradient.addColorStop(1, "rgba(255, 206, 146, 0.94)");
      context.fillStyle = textGradient;
      context.shadowColor = "rgba(47, 209, 255, 0.55)";
      context.shadowBlur = 24;
      context.fillText(label, textX, textY);
      context.restore();

      const scannerX = left + revealWidth;
      context.save();
      context.strokeStyle = "rgba(149, 239, 255, 0.55)";
      context.lineWidth = 2;
      context.beginPath();
      context.moveTo(scannerX, textY - fontSize * 0.78);
      context.lineTo(scannerX, textY + fontSize * 0.78);
      context.stroke();
      context.restore();
    }

    if (reducedMotion) {
      contexts.forEach((item) => {
        drawCanvasFrame(item.canvas, item.context, item.tone, item.label, 0);
      });
      return;
    }

    function animate(time) {
      contexts.forEach((item) => {
        drawCanvasFrame(item.canvas, item.context, item.tone, item.label, time);
      });
      window.requestAnimationFrame(animate);
    }

    window.requestAnimationFrame(animate);
  }

  function initAudioDemo() {
    const audio = document.getElementById("demo-audio");
    const playToggle = document.getElementById("play-toggle");
    const seekSlider = document.getElementById("seek-slider");
    const currentTime = document.getElementById("current-time");
    const totalTime = document.getElementById("total-time");
    const visualizer = document.getElementById("audio-visualizer");
    const segmentRow = document.getElementById("segment-row");
    const accentRow = document.getElementById("accent-row");
    const transcriptStrip = document.getElementById("transcript-strip");

    if (!audio || !playToggle || !seekSlider || !currentTime || !totalTime || !visualizer) {
      return;
    }

    const canvasCtx = visualizer.getContext("2d");
    let audioContext;
    let analyser;
    let source;
    let dataArray;
    let timeDataArray;
    let visualizerReady = false;

    function drawVisualizer() {
      if (!canvasCtx || !analyser || !dataArray) {
        return;
      }
      analyser.getByteFrequencyData(dataArray);
      analyser.getByteTimeDomainData(timeDataArray);
      const width = visualizer.width;
      const height = visualizer.height;
      canvasCtx.clearRect(0, 0, width, height);

      canvasCtx.fillStyle = "rgba(4, 9, 18, 0.9)";
      canvasCtx.fillRect(0, 0, width, height);

      const barWidth = width / dataArray.length;
      for (let i = 0; i < dataArray.length; i += 1) {
        const value = dataArray[i];
        const barHeight = (value / 255) * (height - 20);
        const x = i * barWidth;
        const y = height - barHeight;
        const hue = 165 + (i / dataArray.length) * 35;
        canvasCtx.fillStyle = `hsla(${hue}, 95%, 64%, 0.88)`;
        canvasCtx.fillRect(x, y, Math.max(1, barWidth - 2), barHeight);
      }

      canvasCtx.beginPath();
      canvasCtx.lineWidth = 2.2;
      canvasCtx.strokeStyle = "rgba(156, 238, 255, 0.92)";
      for (let i = 0; i < timeDataArray.length; i += 1) {
        const x = (i / (timeDataArray.length - 1)) * width;
        const y = (timeDataArray[i] / 255) * height;
        if (i === 0) {
          canvasCtx.moveTo(x, y);
        } else {
          canvasCtx.lineTo(x, y);
        }
      }
      canvasCtx.stroke();

      if (!audio.paused) {
        window.requestAnimationFrame(drawVisualizer);
      }
    }

    function drawIdleVisualizer() {
      if (!canvasCtx) {
        return;
      }
      const width = visualizer.width;
      const height = visualizer.height;
      canvasCtx.clearRect(0, 0, width, height);
      canvasCtx.fillStyle = "rgba(4, 9, 18, 0.9)";
      canvasCtx.fillRect(0, 0, width, height);
      canvasCtx.strokeStyle = "rgba(101, 220, 255, 0.4)";
      canvasCtx.lineWidth = 2;
      canvasCtx.beginPath();
      for (let x = 0; x <= width; x += 8) {
        const y = height / 2 + Math.sin(x * 0.04) * 10;
        if (x === 0) {
          canvasCtx.moveTo(x, y);
        } else {
          canvasCtx.lineTo(x, y);
        }
      }
      canvasCtx.stroke();
    }

    function setupVisualizerGraph() {
      if (visualizerReady || reducedMotion || !window.AudioContext) {
        return;
      }
      audioContext = new window.AudioContext();
      source = audioContext.createMediaElementSource(audio);
      analyser = audioContext.createAnalyser();
      analyser.fftSize = 128;
      dataArray = new Uint8Array(analyser.frequencyBinCount);
      timeDataArray = new Uint8Array(analyser.fftSize);
      source.connect(analyser);
      analyser.connect(audioContext.destination);
      visualizerReady = true;
    }

    function setActiveSegment(timeValue) {
      const segmentButtons = segmentRow.querySelectorAll("[data-segment-time]");
      segmentButtons.forEach((button) => {
        const current = Number(button.getAttribute("data-segment-time"));
        button.classList.toggle("active", Math.abs(current - timeValue) <= 1);
      });
    }

    function updateTimeUI() {
      seekSlider.max = String(audio.duration || 0);
      seekSlider.value = String(audio.currentTime || 0);
      currentTime.textContent = formatTime(audio.currentTime);
      totalTime.textContent = formatTime(audio.duration);
    }

    playToggle.addEventListener("click", async () => {
      if (audio.paused) {
        setupVisualizerGraph();
        if (audioContext && audioContext.state === "suspended") {
          await audioContext.resume();
        }
        await audio.play();
      } else {
        audio.pause();
      }
    });

    audio.addEventListener("loadedmetadata", updateTimeUI);
    audio.addEventListener("timeupdate", () => {
      updateTimeUI();
      setActiveSegment(audio.currentTime);
    });

    audio.addEventListener("play", () => {
      playToggle.textContent = "Pause audio";
      if (visualizerReady) {
        drawVisualizer();
      } else {
        drawIdleVisualizer();
      }
    });

    audio.addEventListener("pause", () => {
      playToggle.textContent = "Play audio";
      drawIdleVisualizer();
    });

    audio.addEventListener("ended", () => {
      playToggle.textContent = "Play audio";
      drawIdleVisualizer();
    });

    seekSlider.addEventListener("input", () => {
      audio.currentTime = Number(seekSlider.value);
      updateTimeUI();
      setActiveSegment(audio.currentTime);
    });

    segmentRow.addEventListener("click", async (event) => {
      const target = event.target;
      if (!(target instanceof HTMLElement)) {
        return;
      }
      const jumpButton = target.closest("[data-segment-time]");
      if (!jumpButton) {
        return;
      }
      const nextTime = Number(jumpButton.getAttribute("data-segment-time"));
      audio.currentTime = nextTime;
      setActiveSegment(nextTime);
      if (audio.paused) {
        setupVisualizerGraph();
        if (audioContext && audioContext.state === "suspended") {
          await audioContext.resume();
        }
        await audio.play();
      }
    });

    accentRow.addEventListener("click", (event) => {
      const target = event.target;
      if (!(target instanceof HTMLElement)) {
        return;
      }
      const chip = target.closest("[data-accent-chip]");
      if (!chip) {
        return;
      }
      accentRow.querySelectorAll("[data-accent-chip]").forEach((button) => {
        button.classList.remove("active");
      });
      chip.classList.add("active");
    });

    transcriptStrip.addEventListener("click", async (event) => {
      const target = event.target;
      if (!(target instanceof HTMLElement)) {
        return;
      }
      const transcriptItem = target.closest("[data-transcript-time]");
      if (!transcriptItem) {
        return;
      }
      const point = Number(transcriptItem.getAttribute("data-transcript-time"));
      audio.currentTime = point;
      setActiveSegment(point);
      if (audio.paused) {
        setupVisualizerGraph();
        if (audioContext && audioContext.state === "suspended") {
          await audioContext.resume();
        }
        await audio.play();
      }
    });

    drawIdleVisualizer();
  }

  function initFormHandler() {
    const form = document.getElementById("demo-form");
    const toast = document.getElementById("toast");
    if (!form || !toast) {
      return;
    }

    let toastTimer;

    function showToast(message, error = false) {
      toast.textContent = message;
      toast.classList.add("show");
      toast.classList.toggle("error", error);
      window.clearTimeout(toastTimer);
      toastTimer = window.setTimeout(() => {
        toast.classList.remove("show");
      }, 4500);
    }

    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      const submitButton = form.querySelector('button[type="submit"]');
      if (!(submitButton instanceof HTMLButtonElement)) {
        return;
      }

      const formData = new FormData(form);
      if (String(formData.get("_honey") || "").trim()) {
        showToast("Spam signal detected. Submission skipped.", true);
        return;
      }

      if (window.location.protocol === "file:") {
        showToast("Use a local web server to submit this form. file:// pages are blocked.", true);
        return;
      }

      submitButton.disabled = true;
      submitButton.textContent = "Submitting...";

      try {
        const response = await fetch(form.action, {
          method: "POST",
          headers: {
            Accept: "application/json"
          },
          body: formData
        });

        if (!response.ok) {
          throw new Error(`Form request failed: ${response.status}`);
        }

        const result = await response.json();
        if (!result.success || result.success === "false") {
          const responseMessage = result.message || "Form submission failed.";
          throw new Error(responseMessage);
        }

        showToast("Demo request sent. We will contact you shortly.");
        form.reset();
      } catch (error) {
        const message = error instanceof Error ? error.message : "";
        if (/Activation/i.test(message)) {
          showToast(
            "FormSubmit activation pending. Check krish.sharma@zapcg.com and click the activation link once.",
            true
          );
        } else {
          showToast(
            "Form submission failed. Verify FormSubmit activation for krish.sharma@zapcg.com or use direct email.",
            true
          );
        }
      } finally {
        submitButton.disabled = false;
        submitButton.textContent = "Request Demo";
      }
    });
  }

  function initTiltCards() {
    if (reducedMotion || window.matchMedia("(hover: none)").matches) {
      return;
    }

    const cards = document.querySelectorAll(".tilt-card");
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

  function initHeaderUI() {
    const header = document.querySelector(".site-header");
    const navLinks = Array.from(document.querySelectorAll('.site-nav a[href^="#"]'));
    if (!(header instanceof HTMLElement)) {
      return;
    }

    function setActiveLink(activeLink) {
      navLinks.forEach((link) => {
        link.classList.toggle("active", link === activeLink);
      });
    }

    function syncHeaderScrollState() {
      header.classList.toggle("scrolled", window.scrollY > 18);
    }

    syncHeaderScrollState();
    window.addEventListener("scroll", syncHeaderScrollState, { passive: true });

    if (!navLinks.length) {
      return;
    }

    const sections = navLinks
      .map((link) => {
        const target = link.getAttribute("href");
        if (!target) {
          return null;
        }
        const section = document.querySelector(target);
        if (!(section instanceof HTMLElement)) {
          return null;
        }
        return { link, section };
      })
      .filter(Boolean);

    if (!sections.length) {
      return;
    }

    setActiveLink(sections[0].link);
    navLinks.forEach((link) => {
      link.addEventListener("click", () => setActiveLink(link));
    });

    if (!("IntersectionObserver" in window)) {
      return;
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
          setActiveLink(match.link);
        }
      },
      {
        rootMargin: "-45% 0px -45% 0px",
        threshold: [0.1, 0.25, 0.45, 0.65]
      }
    );

    sections.forEach((item) => sectionObserver.observe(item.section));
  }

  function initMotion() {
    const heroElements = document.querySelectorAll("[data-hero-stagger]");
    const revealElements = document.querySelectorAll("[data-reveal]");
    const benchmarkBars = document.querySelectorAll("[data-fill]");
    const counterElements = document.querySelectorAll("[data-count-to]");

    if (
      reducedMotion ||
      typeof window.gsap === "undefined" ||
      typeof window.ScrollTrigger === "undefined"
    ) {
      heroElements.forEach((item) => {
        item.style.opacity = "1";
        item.style.transform = "none";
      });
      revealElements.forEach((item) => {
        item.style.opacity = "1";
        item.style.transform = "none";
      });
      benchmarkBars.forEach((bar) => {
        if (bar instanceof HTMLElement) {
          bar.style.width = `${bar.dataset.fill || 0}%`;
        }
      });
      counterElements.forEach((counter) => {
        const target = Number(counter.getAttribute("data-count-to")) || 0;
        const label = counter.parentElement?.querySelector(".metric-label")?.textContent || "";
        counter.textContent = label.includes("%") ? `${target}%` : `${target}`;
      });
      return;
    }

    window.gsap.registerPlugin(window.ScrollTrigger);

    if (!minimalTheme) {
      window.gsap.to(".ambient-a", {
        x: 36,
        y: -18,
        duration: 14,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1
      });
      window.gsap.to(".ambient-b", {
        x: -28,
        y: 24,
        duration: 16,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1
      });
      window.gsap.to(".ambient-c", {
        x: 24,
        y: -20,
        duration: 18,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1
      });

      window.gsap.to(".wave-panel", {
        y: -6,
        duration: 3.6,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        stagger: 0.35
      });

      window.gsap.to(".hero-kicker-pill", {
        boxShadow: "0 0 28px rgba(76, 210, 255, 0.32)",
        duration: 1.9,
        yoyo: true,
        repeat: -1,
        stagger: 0.22,
        ease: "sine.inOut"
      });

      window.gsap.to(".hero-floating-a", {
        y: -5,
        x: 2,
        duration: 2.8,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1
      });

      window.gsap.to(".hero-floating-b", {
        y: 5,
        x: -2,
        duration: 3.3,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1
      });
    }

    window.gsap.to("[data-hero-stagger]", {
      opacity: 1,
      y: 0,
      stagger: 0.12,
      duration: 0.75,
      ease: "power2.out"
    });

    window.gsap.fromTo(
      ".hero-proof-item",
      { opacity: 0, y: 16, rotateX: -4 },
      {
        opacity: 1,
        y: 0,
        rotateX: 0,
        duration: 0.85,
        stagger: 0.14,
        delay: 0.22,
        ease: "power2.out"
      }
    );

    window.gsap.fromTo(
      ".hero-cta .btn",
      { opacity: 0, y: 12, scale: 0.97 },
      { opacity: 1, y: 0, scale: 1, duration: 0.65, stagger: 0.1, delay: 0.35, ease: "power2.out" }
    );

    window.gsap.fromTo(
      ".hero-visual",
      { scale: minimalTheme ? 0.995 : 0.975, rotateX: minimalTheme ? 0 : -3, y: 22, opacity: 0 },
      {
        scale: 1,
        rotateX: 0,
        y: 0,
        opacity: 1,
        duration: minimalTheme ? 0.78 : 1.1,
        ease: minimalTheme ? "power2.out" : "power3.out"
      }
    );

    window.gsap.utils.toArray("[data-reveal]").forEach((item) => {
      window.gsap.fromTo(
        item,
        {
          opacity: 0,
          y: 38,
          scale: 0.98,
          rotateX: -2,
          filter: "blur(8px)"
        },
        {
        opacity: 1,
        y: 0,
          scale: 1,
          rotateX: 0,
          filter: "blur(0px)",
          duration: 0.92,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 87%"
          }
        }
      );
    });

    const legacyAfter = document.querySelector(".legacy-after");
    if (legacyAfter) {
      window.gsap.fromTo(
        legacyAfter,
        { clipPath: "inset(0 100% 0 0 round 24px)" },
        {
          clipPath: "inset(0 0% 0 0 round 24px)",
          ease: "none",
          scrollTrigger: {
            trigger: "#legacy-shell",
            start: "top 72%",
            end: "bottom 42%",
            scrub: 1
          }
        }
      );
    }

    counterElements.forEach((counter) => {
      const target = Number(counter.getAttribute("data-count-to")) || 0;
      const label = counter.parentElement?.querySelector(".metric-label")?.textContent || "";
      const value = { current: 0 };

      window.gsap.to(value, {
        current: target,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: counter,
          start: "top 88%",
          once: true
        },
        onUpdate: () => {
          const rounded = Math.round(value.current);
          counter.textContent = label.includes("%") ? `${rounded}%` : `${rounded}`;
        }
      });
    });

    benchmarkBars.forEach((bar) => {
      if (!(bar instanceof HTMLElement)) {
        return;
      }
      const fill = Number(bar.dataset.fill || 0);
      window.gsap.to(bar, {
        width: `${fill}%`,
        duration: 1.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: bar,
          start: "top 90%",
          once: true
        }
      });
    });

    window.gsap.utils.toArray(".benchmark-card[data-priority='high']").forEach((card) => {
      if (!minimalTheme) {
        window.gsap.fromTo(
          card,
          { boxShadow: "0 0 0 rgba(0,0,0,0)" },
          {
            boxShadow: "0 0 42px rgba(25, 239, 208, 0.22)",
            duration: 1.5,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
          }
        );
      }
    });
  }

  renderCopy();
  initWaveCanvases();
  initHeaderUI();
  initAudioDemo();
  initFormHandler();
  initMotion();
  initTiltCards();
})();
