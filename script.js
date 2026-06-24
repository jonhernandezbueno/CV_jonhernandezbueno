/**
 * WEB_CV_P3R — Menú fiel a deltea/p3r-pause-menu
 * Vista única: menú SVG + panel detalle lateral
 */

(function () {
  const STORAGE_KEY = 'cv-p3r-lang';
  const SECTIONS = [
    'educacion', 'publicaciones', 'logros', 'bibliografia',
    'curiosidades', 'certificaciones', 'patentes'
  ];

  const SELECTOR_PATH = 'M 24.853754, 93.31573 135.14625, 49.684266 114.14751, 97.331142 Z';
  const SELECTOR_BG_PATH = 'M 12.7428765,95.50088 144.25712,47.499123 116.75625,95.465764 Z';

  const MENU_LAYOUT = [
    { rotation: -25, zIndex: 1, offsetX: -60, offsetY: 55 },
    { rotation: -15, zIndex: 0, offsetX: 0, offsetY: 30 },
    { rotation: -20, zIndex: 1, offsetX: -50, offsetY: 35 },
    { rotation: -15, zIndex: 2, offsetX: -80, offsetY: 40 },
    { rotation: 0, zIndex: 0, offsetX: 0, offsetY: 15 },
    { rotation: -14, zIndex: 1, offsetX: -40, offsetY: 20 },
    { rotation: -8, zIndex: 2, offsetX: -20, offsetY: 20 }
  ];

  const FILL_CLASSES = ['fill-1', 'fill-2', 'fill-3'];

  let currentLang = localStorage.getItem(STORAGE_KEY) || 'es';
  let sfxEnabled = true;
  let focusIndex = 0;
  let currentSection = null;
  let detailOpen = false;
  let audioCtx = null;

  const mainMenu = document.getElementById('mainMenu');
  const menuStage = document.getElementById('menuStage');
  const menuColumn = document.getElementById('menuColumn');
  const indexDisplay = document.getElementById('indexDisplay');
  const commandDesc = document.getElementById('commandDesc');
  const detailPanel = document.getElementById('detailPanel');
  const detailIndex = document.getElementById('detailIndex');
  const sectionTitle = document.getElementById('sectionTitle');
  const sectionTitleRed = document.getElementById('sectionTitleRed');
  const sectionCodename = document.getElementById('sectionCodename');
  const sectionBody = document.getElementById('sectionBody');
  const commandControls = document.getElementById('commandControls');
  const oceanCanvas = document.getElementById('oceanCanvas');
  const langButtons = document.querySelectorAll('.lang-btn');

  let optionWraps = [];

  function t(key) {
    const parts = key.split('.');
    let val = I18N[currentLang];
    for (const p of parts) val = val?.[p];
    return val ?? key;
  }

  function getSection(key) {
    return I18N[currentLang].sections[key];
  }

  function selectorTransform(name) {
    const scale = name.replace(/\s/g, '').length * 0.5 + 1.5;
    return `translate(-60, -10) rotate(8, 0, 100) scale(${scale}, 3)`;
  }

  function buildMenu() {
    menuColumn.innerHTML = '';
    optionWraps = [];

    SECTIONS.forEach((key, i) => {
      const layout = MENU_LAYOUT[i];
      const label = t(`menu.${key}`);
      const maskId = `selector-mask-${i}`;
      const transform = selectorTransform(label);
      const fillClass = FILL_CLASSES[(i + 2) % FILL_CLASSES.length];

      const wrap = document.createElement('div');
      wrap.className = 'menu-option-wrap';
      wrap.style.zIndex = String(layout.zIndex);
      wrap.dataset.idx = String(i);
      wrap.dataset.section = key;

      wrap.innerHTML = `
        <button type="button" class="menu-hit" aria-label="${label}"></button>
        <svg class="menu-svg" width="950" height="200" viewBox="0 0 950 200" xmlns="http://www.w3.org/2000/svg" style="transform-origin: 25% center">
          <defs>
            <mask id="${maskId}" maskUnits="userSpaceOnUse" maskContentUnits="userSpaceOnUse" x="0" y="0" width="950" height="200">
              <rect width="100%" height="100%" fill="black"/>
              <g transform="${transform}" transform-origin="left center">
                <path fill="white" d="${SELECTOR_PATH}"/>
                <path class="selector-bg-mask" fill="white" transform-origin="52 100" d="${SELECTOR_BG_PATH}"/>
              </g>
            </mask>
          </defs>
          <g class="selector-group" transform="${transform}" transform-origin="left center" style="display:none">
            <path class="selector-pink selector-bg" transform-origin="52 100" d="${SELECTOR_BG_PATH}"/>
            <path class="selector-white" d="${SELECTOR_PATH}"/>
          </g>
          <text class="menu-text ${fillClass}" x="150" y="120" transform-origin="25% center">${label}</text>
          <g class="red-mask-group" mask="url(#${maskId})" style="display:none">
            <text class="menu-text fill-red" x="150" y="120" transform-origin="25% center">${label}</text>
          </g>
        </svg>
      `;

      const svg = wrap.querySelector('.menu-svg');
      svg.style.transform = `translate(${layout.offsetX}px, ${layout.offsetY}px) rotate(${layout.rotation}deg)`;

      const hit = wrap.querySelector('.menu-hit');
      hit.addEventListener('mouseenter', () => {
        setFocus(i, false);
        if (detailOpen && SECTIONS[i] !== currentSection) {
          switchSection(SECTIONS[i]);
        }
      });
      hit.addEventListener('click', () => {
        setFocus(i, false);
        if (detailOpen) {
          switchSection(key);
        } else {
          openSection(key);
        }
      });

      menuColumn.appendChild(wrap);
      optionWraps.push(wrap);
    });

    setFocus(focusIndex, false);
    if (currentSection) loadSectionContent(currentSection, false);
  }

  function setFocus(index, playFx) {
    if (index < 0) index = SECTIONS.length - 1;
    if (index >= SECTIONS.length) index = 0;
    const prev = focusIndex;
    focusIndex = index;

    optionWraps.forEach((wrap, i) => {
      const selected = i === focusIndex;
      wrap.classList.toggle('is-selected', selected);
      wrap.style.zIndex = selected ? '5' : String(MENU_LAYOUT[i].zIndex);

      const text = wrap.querySelector('.menu-text:not(.fill-red)');
      const selector = wrap.querySelector('.selector-group');
      const redGroup = wrap.querySelector('.red-mask-group');

      if (selected) {
        text.classList.remove('fill-1', 'fill-2', 'fill-3');
        text.classList.add('fill-selected');
        selector.style.display = 'block';
        redGroup.style.display = 'block';
      } else {
        text.classList.remove('fill-selected');
        text.classList.add(FILL_CLASSES[(i + 2) % FILL_CLASSES.length]);
        selector.style.display = 'none';
        redGroup.style.display = 'none';
      }
    });

    const data = getSection(SECTIONS[focusIndex]);
    if (!detailOpen) {
      commandDesc.textContent = data.preview;
    }
    indexDisplay.textContent = String(focusIndex + 1).padStart(2, '0');
    detailIndex.textContent = String(focusIndex + 1).padStart(2, '0');

    if (playFx && prev !== focusIndex) playSound('tick');
  }

  function setCommandMode(mode) {
    const isDetail = mode === 'detail';
    commandControls.querySelectorAll('.control-main').forEach((el) => {
      el.classList.toggle('hidden', isDetail);
    });
    commandControls.querySelectorAll('.control-detail').forEach((el) => {
      el.classList.toggle('hidden', !isDetail);
    });
  }

  function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang;
    langButtons.forEach((b) => b.classList.toggle('active', b.dataset.lang === lang));
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const val = t(el.dataset.i18n);
      if (val) el.textContent = val;
    });
    buildMenu();
  }

  function ensureAudio() {
    if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    return audioCtx;
  }

  function playSound(type) {
    if (!sfxEnabled) return;
    try {
      const ctx = ensureAudio();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      if (type === 'tick') {
        osc.frequency.value = 440;
        osc.type = 'sine';
        gain.gain.setValueAtTime(0.04, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.06);
        osc.start(ctx.currentTime);
        osc.stop(ctx.currentTime + 0.06);
      } else if (type === 'confirm') {
        osc.frequency.setValueAtTime(320, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(640, ctx.currentTime + 0.12);
        osc.type = 'sine';
        gain.gain.setValueAtTime(0.05, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.14);
        osc.start(ctx.currentTime);
        osc.stop(ctx.currentTime + 0.14);
      } else if (type === 'cancel') {
        osc.frequency.setValueAtTime(500, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(240, ctx.currentTime + 0.1);
        osc.type = 'sine';
        gain.gain.setValueAtTime(0.035, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.1);
        osc.start(ctx.currentTime);
        osc.stop(ctx.currentTime + 0.1);
      }
    } catch (_) {}
  }

  function loadSectionContent(key, animate) {
    const data = getSection(key);
    sectionTitle.textContent = data.title;
    sectionTitleRed.textContent = data.title;
    sectionCodename.textContent = data.codename;
    commandDesc.textContent = data.preview;

    if (animate) {
      sectionBody.classList.add('is-swapping');
      setTimeout(() => {
        sectionBody.innerHTML = data.content;
        sectionBody.scrollTop = 0;
        sectionBody.classList.remove('is-swapping');
      }, 140);
    } else {
      sectionBody.innerHTML = data.content;
      sectionBody.scrollTop = 0;
    }

    const header = detailPanel.querySelector('.detail-header');
    if (animate && header) {
      header.style.animation = 'none';
      void header.offsetWidth;
      header.style.animation = '';
    }
  }

  function openSection(key) {
    playSound('confirm');
    currentSection = key;
    const idx = SECTIONS.indexOf(key);
    if (idx >= 0) setFocus(idx, false);

    loadSectionContent(key, false);
    detailOpen = true;
    menuStage.classList.add('detail-open');
    mainMenu.classList.add('detail-open');
    detailPanel.setAttribute('aria-hidden', 'false');
    setCommandMode('detail');
  }

  function switchSection(key) {
    if (key === currentSection) return;
    playSound('tick');
    currentSection = key;
    loadSectionContent(key, true);
  }

  function backToMain() {
    if (!detailOpen) return;
    playSound('cancel');
    detailOpen = false;
    currentSection = null;
    menuStage.classList.remove('detail-open');
    mainMenu.classList.remove('detail-open');
    detailPanel.setAttribute('aria-hidden', 'true');
    setCommandMode('main');
    const data = getSection(SECTIONS[focusIndex]);
    commandDesc.textContent = data.preview;
  }

  function navigateSection(delta) {
    const idx = SECTIONS.indexOf(currentSection);
    const next = idx + delta;
    if (next < 0 || next >= SECTIONS.length) return;
    setFocus(next, false);
    switchSection(SECTIONS[next]);
  }

  function initOcean() {
    if (!oceanCanvas) return;
    const ctx = oceanCanvas.getContext('2d');
    const pts = Array.from({ length: 50 }, () => ({
      x: Math.random() * innerWidth,
      y: Math.random() * innerHeight,
      r: Math.random() * 2 + 0.5,
      vy: Math.random() * 0.35 + 0.1,
      a: Math.random() * 0.25 + 0.08
    }));

    const resize = () => {
      oceanCanvas.width = innerWidth;
      oceanCanvas.height = innerHeight;
    };
    resize();
    addEventListener('resize', resize);

    (function draw() {
      ctx.clearRect(0, 0, oceanCanvas.width, oceanCanvas.height);
      pts.forEach((p) => {
        p.y -= p.vy;
        if (p.y < 0) {
          p.y = oceanCanvas.height;
          p.x = Math.random() * oceanCanvas.width;
        }
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(22,207,251,${p.a})`;
        ctx.fill();
      });
      requestAnimationFrame(draw);
    })();
  }

  function pulseSelectors() {
    document.querySelectorAll('.selector-bg, .selector-bg-mask').forEach((el) => {
      el.animate(
        [{ transform: 'scale(1)' }, { transform: 'scale(1.05)' }, { transform: 'scale(1)' }],
        { duration: 700, iterations: Infinity, delay: 600 + Math.random() * 400 }
      );
    });
  }

  document.addEventListener('keydown', (e) => {
    if (!detailOpen) {
      switch (e.key) {
        case 'ArrowUp':
        case 'w':
        case 'W':
          e.preventDefault();
          setFocus(focusIndex - 1);
          break;
        case 'ArrowDown':
        case 's':
        case 'S':
          e.preventDefault();
          setFocus(focusIndex + 1);
          break;
        case 'Enter':
        case ' ':
        case 'b':
        case 'B':
          e.preventDefault();
          openSection(SECTIONS[focusIndex]);
          break;
        default:
          break;
      }
    } else {
      if (e.key === 'Escape' || e.key === 'Backspace' || e.key === 'a' || e.key === 'A') {
        e.preventDefault();
        backToMain();
        return;
      }
      if (e.key === 'ArrowUp' || e.key === 'w' || e.key === 'W') {
        e.preventDefault();
        navigateSection(-1);
      }
      if (e.key === 'ArrowDown' || e.key === 's' || e.key === 'S') {
        e.preventDefault();
        navigateSection(1);
      }
      if (e.key === 'Enter' || e.key === ' ' || e.key === 'b' || e.key === 'B') {
        e.preventDefault();
        openSection(SECTIONS[focusIndex]);
      }
    }
  });

  langButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      if (btn.dataset.lang === currentLang) return;
      playSound('tick');
      applyLanguage(btn.dataset.lang);
    });
  });

  document.addEventListener('click', () => ensureAudio(), { once: true });
  document.addEventListener('keydown', () => ensureAudio(), { once: true });

  applyLanguage(currentLang);
  setCommandMode('main');
  initOcean();
  setTimeout(pulseSelectors, 500);
})();
