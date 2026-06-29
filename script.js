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

  function isNarrowP3Layout() {
    return window.matchMedia('(max-width: 768px)').matches;
  }

  function resolveMenuLayout(index) {
    const base = MENU_LAYOUT[index];
    if (!isNarrowP3Layout()) return base;
    return {
      rotation: Math.round(base.rotation * 0.42),
      zIndex: base.zIndex,
      offsetX: Math.round(base.offsetX * 0.15) + 72,
      offsetY: Math.round(base.offsetY * 0.32)
    };
  }

  const FILL_CLASSES = ['fill-1', 'fill-2', 'fill-3'];

  /* Orden fijo DS1 — lista izquierda idéntica al juego */
  const DS_ATTRIBUTE_ORDER = [
    'vitality', 'attunement', 'endurance', 'strength',
    'dexterity', 'resistance', 'intelligence', 'faith'
  ];

  const DS_ATTR_ICONS = {
    vitality: 'vitality',
    attunement: 'attune',
    endurance: 'endure',
    strength: 'strength',
    dexterity: 'dexterity',
    resistance: 'resist',
    intelligence: 'intelligence',
    faith: 'faith'
  };

  const DS_BASE_ATTR = {
    vitality: 14,
    attunement: 11,
    endurance: 12,
    strength: 10,
    dexterity: 9,
    resistance: 8,
    intelligence: 13,
    faith: 7
  };

  /** Sección CV → atributo DS que sube al seleccionarla */
  const SECTION_ATTR_MAP = {
    educacion: { attr: 'vitality', boost: 7 },
    publicaciones: { attr: 'intelligence', boost: 5 },
    logros: { attr: 'strength', boost: 6 },
    bibliografia: { attr: 'endurance', boost: 4 },
    curiosidades: { attr: 'resistance', boost: 3 },
    certificaciones: { attr: 'dexterity', boost: 5 },
    patentes: { attr: 'attunement', boost: 4 }
  };

  const ATTR_SECTION_MAP = Object.fromEntries(
    Object.entries(SECTION_ATTR_MAP).map(([sec, { attr }]) => [attr, sec])
  );

  const DS_SECTION_ICONS = {
    educacion: 'book',
    publicaciones: 'scroll',
    logros: 'trophy',
    bibliografia: 'tome',
    curiosidades: 'eye',
    certificaciones: 'badge',
    patentes: 'seal'
  };

  const DS_SOUL_COST = {
    3: 618, 4: 882, 5: 1104, 6: 1326, 7: 1548
  };

  let currentLang = localStorage.getItem(STORAGE_KEY) || 'es';
  let currentTheme = 'p3';
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
  const dsEmberCanvas = document.getElementById('dsEmberCanvas');
  const langButtons = document.querySelectorAll('.lang-btn');
  const themeButtons = document.querySelectorAll('.theme-btn');

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

  function dsIconSvg(type) {
    const icons = {
      book: '<path fill="currentColor" d="M2 2h5v12H3a1 1 0 0 1-1-1V2zm7 0h5v11a1 1 0 0 1-1 1H9V2z"/>',
      vitality: '<path fill="currentColor" d="M8 13S3 9.5 3 6.5A2.5 2.5 0 0 1 8 5a2.5 2.5 0 0 1 5 1.5C13 9.5 8 13 8 13z"/>',
      attune: '<path fill="currentColor" d="M8 2l1 4h4l-3.2 2.4 1.2 4-3-2.2-3 2.2 1.2-4L3 6h4l1-4z"/>',
      endure: '<path fill="currentColor" d="M3 8h2l1-4 2 8 1-4h5v2H9.5l-1 4-2-8-1 4H3V8z"/>',
      strength: '<path fill="currentColor" d="M5 3h6v2H9v8H7V5H5V3z"/>',
      dexterity: '<path fill="currentColor" d="M4 3h8v2H4V3zm1 4h6v2H5V7zm2 4h2v2H7v-2z"/>',
      resist: '<path fill="currentColor" d="M8 2L3 4v4c0 3.3 2.2 5.5 5 6 2.8-.5 5-2.7 5-6V4L8 2z"/>',
      intelligence: '<path fill="currentColor" d="M8 2a6 6 0 1 0 0 12A6 6 0 0 0 8 2zm0 2a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-3 6h6v2H5v-2z"/>',
      faith: '<path fill="currentColor" d="M8 2l2.2 4.5L15 7l-3.5 3.4.8 4.9L8 12.8 3.7 15.3l.8-4.9L1 7l4.8-.5L8 2z"/>',
      armour: '<path fill="currentColor" d="M8 2L4 4v5c0 2.5 1.6 4.4 4 4.8 2.4-.4 4-2.3 4-4.8V4L8 2z"/>',
      scroll: '<path fill="currentColor" d="M3 3h10v2H3V3zm0 4h10v2H3V7zm0 4h7v2H3v-2z"/>',
      trophy: '<path fill="currentColor" d="M4 2h8v3a4 4 0 0 1-8 0V2zm-1 5h2v1a3 3 0 0 0 6 0V7h2v1a5 5 0 0 1-4.9 5H8.9A5 5 0 0 1 4 8V7z"/>',
      tome: '<path fill="currentColor" d="M2 3h6v10H3a1 1 0 0 1-1-1V3zm8 0h6v10h-5a1 1 0 0 1-1-1V3z"/>',
      eye: '<path fill="currentColor" d="M8 4a5 5 0 0 0-4.9 4 5 5 0 0 0 9.8 0A5 5 0 0 0 8 4zm0 2a3 3 0 0 1 2.8 2 3 3 0 0 1-5.6 0A3 3 0 0 1 8 6z"/>',
      badge: '<path fill="currentColor" d="M8 2l1.8 3.6L14 6.5l-3 2.9.7 4.1L8 11.4 4.3 13.5l.7-4.1-3-2.9 4.2-.9L8 2z"/>',
      seal: '<path fill="currentColor" d="M8 2a6 6 0 1 0 0 12A6 6 0 0 0 8 2zm0 2a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-3 6h6v2H5v-2z"/>',
      heart: '<path fill="currentColor" d="M8 13S3 9.5 3 6.5A2.5 2.5 0 0 1 8 5a2.5 2.5 0 0 1 5 1.5C13 9.5 8 13 8 13z"/>',
      shield: '<path fill="currentColor" d="M8 2L3 4v4c0 3.3 2.2 5.5 5 6 2.8-.5 5-2.7 5-6V4L8 2z"/>',
      stamina: '<path fill="currentColor" d="M3 8h2l1-4 2 8 1-4h5v2H9.5l-1 4-2-8-1 4H3V8z"/>',
      phys: '<path fill="currentColor" d="M5 3h6v2H9v8H7V5H5V3z"/>',
      magic: '<path fill="currentColor" d="M8 2l1 4h4l-3.2 2.4 1.2 4-3-2.2-3 2.2 1.2-4L3 6h4l1-4z"/>',
      flame: '<path fill="currentColor" d="M8 14c3-2 4-4 4-6a3 3 0 0 0-6 0c0-2-2-3-3-5-1 3-2 5-2 7a5 5 0 0 0 7 4z"/>',
      bolt: '<path fill="currentColor" d="M9 2L4 9h3l-1 5 6-8H9l1-4z"/>',
      link: '<path fill="currentColor" d="M6 6h4v2H6V6zm0 4h4v2H6v-2z"/>',
      realm: '<path fill="currentColor" d="M2 4h12v8H2V4zm2 2v4h8V6H4z"/>',
      origin: '<path fill="currentColor" d="M8 2a4 4 0 0 0-4 4c0 3 4 8 4 8s4-5 4-8a4 4 0 0 0-4-4zm0 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4z"/>'
    };
    const path = icons[type] || icons.book;
    return `<span class="ds-icon" aria-hidden="true"><svg viewBox="0 0 16 16" width="16" height="16">${path}</svg></span>`;
  }

  function buildStatRow(icon, label, value, highlight) {
    return `<li class="ds-stat-row${highlight ? ' is-highlight' : ''}">
      ${dsIconSvg(icon)}
      <span class="ds-stat-label">${label}</span>
      <span class="ds-stat-value">${value}</span>
    </li>`;
  }

  function buildStatRowDual(icon, label, current, next, highlight) {
    const value = next != null
      ? `<span class="ds-val-cur">${current}</span><span class="ds-val-sep">&gt;</span><span class="ds-val-next">${next}</span>`
      : String(current);
    return `<li class="ds-stat-row${highlight ? ' is-highlight' : ''}">
      ${dsIconSvg(icon)}
      <span class="ds-stat-label">${label}</span>
      <span class="ds-stat-value">${value}</span>
    </li>`;
  }

  function getAttrsWithBoost(sectionKey) {
    const next = { ...DS_BASE_ATTR };
    const map = SECTION_ATTR_MAP[sectionKey];
    if (map) next[map.attr] += map.boost;
    return next;
  }

  function computeDerived(attrs) {
    const a = attrs;
    return {
      hp: Math.round(320 + a.vitality * 14),
      equip: `${(28 + a.endurance * 1.15).toFixed(1)}/76.0`,
      armour: Math.round(16 + a.strength * 0.9 + a.dexterity * 0.4),
      stamina: Math.round(80 + a.endurance * 8),
      physDef: Math.round(36 + a.strength * 10 + a.vitality * 2),
      magicDef: Math.round(28 + a.intelligence * 8 + a.faith * 3),
      flameDef: Math.round(18 + a.resistance * 7),
      lightningDef: Math.round(22 + a.resistance * 4 + a.dexterity * 3),
      poisonRes: Math.round(56 + a.resistance * 15),
      physAtk: Math.round(72 + a.strength * 18),
      magicAtk: Math.round(44 + a.intelligence * 14 + a.attunement * 4 + a.faith * 5)
    };
  }

  function getSectionAttrMap(sectionKey) {
    return SECTION_ATTR_MAP[sectionKey] || null;
  }

  function updateDSAttributeList(sectionKey) {
    const map = getSectionAttrMap(sectionKey);
    optionWraps.forEach((item) => {
      const attrId = item.dataset.attr;
      const base = DS_BASE_ATTR[attrId];
      const val = item.querySelector('.ds-item-value');
      const boostTag = item.querySelector('.ds-item-boost');
      const isActive = map && map.attr === attrId;

      item.classList.toggle('is-boosted', !!isActive);
      if (!val) return;

      if (isActive) {
        val.innerHTML = `<span class="ds-val-cur">${base}</span><span class="ds-val-sep">&gt;</span><span class="ds-val-next">${base + map.boost}</span>`;
        if (boostTag) boostTag.textContent = `+${map.boost}`;
      } else {
        val.textContent = String(base);
        if (boostTag) boostTag.textContent = '';
      }
    });
    const activeItem = optionWraps.find((item) => item.classList.contains('is-boosted'));
    if (activeItem && !detailOpen) {
      activeItem.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
    }
  }

  function renderDerivedColumns(sectionKey) {
    const cur = computeDerived(DS_BASE_ATTR);
    const nxt = computeDerived(getAttrsWithBoost(sectionKey));
    const diff = (a, b) => a !== b;

    return {
      mid: [
        buildStatRowDual('heart', t('dsStatHP'), cur.hp, nxt.hp, diff(cur.hp, nxt.hp)),
        buildStatRowDual('shield', t('dsStatEquipLoad'), cur.equip, nxt.equip, diff(cur.equip, nxt.equip)),
        buildStatRowDual('armour', t('dsStatRightArmour'), cur.armour, nxt.armour, diff(cur.armour, nxt.armour)),
        buildStatRowDual('endure', t('dsStatStamina'), cur.stamina, nxt.stamina, diff(cur.stamina, nxt.stamina))
      ],
      right: [
        buildStatRowDual('phys', t('dsStatPhysDef'), cur.physDef, nxt.physDef, diff(cur.physDef, nxt.physDef)),
        buildStatRowDual('magic', t('dsStatMagicDef'), cur.magicDef, nxt.magicDef, diff(cur.magicDef, nxt.magicDef)),
        buildStatRowDual('flame', t('dsStatFlameDef'), cur.flameDef, nxt.flameDef, diff(cur.flameDef, nxt.flameDef)),
        buildStatRowDual('bolt', t('dsStatLightningDef'), cur.lightningDef, nxt.lightningDef, diff(cur.lightningDef, nxt.lightningDef)),
        buildStatRowDual('resist', t('dsStatPoisonResist'), cur.poisonRes, nxt.poisonRes, diff(cur.poisonRes, nxt.poisonRes)),
        buildStatRowDual('strength', t('dsStatPhysicalAttack'), cur.physAtk, nxt.physAtk, diff(cur.physAtk, nxt.physAtk)),
        buildStatRowDual('attune', t('dsStatMagicAttack'), cur.magicAtk, nxt.magicAtk, diff(cur.magicAtk, nxt.magicAtk))
      ]
    };
  }

  function updateDSSelectionUI(sectionKey) {
    const data = getSection(sectionKey);
    const map = getSectionAttrMap(sectionKey);
    const titleEl = document.getElementById('dsPanelTitle');
    const hintEl = document.getElementById('dsPanelHint');
    const acceptSec = document.getElementById('dsAcceptSection');
    const menuLabel = t(`menu.${sectionKey}`);

    if (titleEl) {
      titleEl.textContent = detailOpen ? data.title : menuLabel;
      titleEl.classList.toggle('is-section', !detailOpen);
    }
    if (hintEl) {
      if (map && !detailOpen) {
        const attrName = t(`dsAttributes.${map.attr}`);
        hintEl.textContent = `${data.preview} · ${attrName} +${map.boost}`;
      } else {
        hintEl.textContent = data.preview;
      }
    }
    if (acceptSec) acceptSec.textContent = menuLabel;

    document.querySelectorAll('.ds-cv-item').forEach((item, i) => {
      item.classList.toggle('is-selected', SECTIONS[i] === sectionKey);
      const idx = item.querySelector('.ds-cv-index');
      if (idx) idx.setAttribute('aria-current', SECTIONS[i] === sectionKey ? 'true' : 'false');
    });

    const activeCv = document.querySelector('.ds-cv-item.is-selected');
    if (activeCv && !detailOpen) {
      activeCv.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
    }
  }

  function updateDSHint(sectionKey) {
    updateDSSelectionUI(sectionKey);
  }

  function updateDSStats() {
    const mid = document.getElementById('dsStatMid');
    const right = document.getElementById('dsStatRight');
    if (!mid || !right) return;

    const sectionKey = SECTIONS[focusIndex];
    const derived = renderDerivedColumns(sectionKey);

    mid.innerHTML = derived.mid.join('');
    right.innerHTML = derived.right.join('');
    updateDSAttributeList(sectionKey);
    updateDSHint(sectionKey);

    const map = getSectionAttrMap(sectionKey);
    const soulsEl = document.getElementById('dsSoulsValue');
    if (soulsEl) {
      const cost = map ? (DS_SOUL_COST[map.boost] || 1104) : 0;
      soulsEl.textContent = map ? String(8420 - cost) : '8420';
    }
    updateDSMobileStats(sectionKey);
  }

  function bindDSCvItem(li, key, i) {
    li.addEventListener('mouseenter', () => {
      setFocus(i, false);
      if (detailOpen && currentSection !== key) switchSection(key);
    });
    li.addEventListener('click', () => {
      setFocus(i, false);
      if (detailOpen) switchSection(key);
      else openSection(key);
    });
  }

  function bindDSAttributeItem(li, attrId) {
    const sectionKey = ATTR_SECTION_MAP[attrId];
    if (!sectionKey) {
      li.classList.add('ds-list-item--static');
      return;
    }
    const sectionIdx = SECTIONS.indexOf(sectionKey);
    li.addEventListener('mouseenter', () => {
      setFocus(sectionIdx, false);
      if (detailOpen && currentSection !== sectionKey) switchSection(sectionKey);
    });
    li.addEventListener('click', () => {
      setFocus(sectionIdx, false);
      if (detailOpen) switchSection(sectionKey);
      else openSection(sectionKey);
    });
  }

  function buildMenu() {
    if (currentTheme === 'ds') buildMenuDS();
    else buildMenuP3();
    setFocus(focusIndex, false);
    if (currentSection) loadSectionContent(currentSection, false);
  }

  function bindMenuItem(wrap, key, i) {
    wrap.addEventListener('mouseenter', () => {
      setFocus(i, false);
      if (detailOpen && SECTIONS[i] !== currentSection) {
        switchSection(SECTIONS[i]);
      }
    });
    wrap.addEventListener('click', () => {
      setFocus(i, false);
      if (detailOpen) {
        switchSection(key);
      } else {
        openSection(key);
      }
    });
  }

  function buildMenuP3() {
    menuColumn.innerHTML = '';
    optionWraps = [];

    SECTIONS.forEach((key, i) => {
      const layout = resolveMenuLayout(i);
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
      hit.addEventListener('touchstart', () => {
        setFocus(i, false);
      }, { passive: true });

      menuColumn.appendChild(wrap);
      optionWraps.push(wrap);
    });
  }

  let dsEmberFrame = null;

  function buildMenuDS() {
    menuColumn.innerHTML = `
      <div class="ds-screen">
        <div class="ds-screen-edge">
          <header class="ds-topbar">
            <div class="ds-topbar-portrait">
              <img src="character.png" alt="">
            </div>
            <div class="ds-topbar-text">
              <p class="ds-panel-eyebrow" data-i18n="dsPanelEyebrow">Level Up</p>
              <h2 class="ds-panel-title" id="dsPanelTitle">REST AT BONFIRE</h2>
              <p class="ds-panel-hint" id="dsPanelHint" data-i18n="dsPanelHint">Select parameter to view</p>
            </div>
          </header>
          <div class="ds-columns">
            <div class="ds-col ds-col-menu">
              <div class="ds-ornate-frame">
                <span class="ds-ornate-corner ds-ornate-tl" aria-hidden="true"></span>
                <span class="ds-ornate-corner ds-ornate-tr" aria-hidden="true"></span>
                <span class="ds-ornate-corner ds-ornate-bl" aria-hidden="true"></span>
                <span class="ds-ornate-corner ds-ornate-br" aria-hidden="true"></span>
                <div class="ds-char-stats">
                  <div class="ds-char-row">
                    <span class="ds-char-label" data-i18n="dsLabelName">Name</span>
                    <span class="ds-char-value" data-i18n="dsCharName">Jon Hernández-Bueno</span>
                  </div>
                  <div class="ds-char-row">
                    <span class="ds-char-label" data-i18n="dsLabelLevel">Level</span>
                    <span class="ds-char-value">28</span>
                  </div>
                  <div class="ds-char-row">
                    <span class="ds-char-label" data-i18n="dsLabelSouls">Souls</span>
                    <span class="ds-char-value" id="dsSoulsValue">8420</span>
                  </div>
                </div>
                <p class="ds-section-label" data-i18n="dsCvRecords">Registros</p>
                <ul class="ds-cv-list" id="dsCvList" role="menubar" aria-label="CV sections"></ul>
                <ul class="ds-mobile-stats" id="dsMobileStats" aria-label="Stats preview"></ul>
                <p class="ds-section-label ds-section-label--params" data-i18n="dsParameters">Parámetros</p>
                <ul class="ds-list" role="presentation" aria-label="Attributes"></ul>
                <button type="button" class="ds-accept" id="dsAcceptBtn">
                  <span class="ds-accept-label" data-i18n="dsAccept">ACCEPT</span>
                  <span class="ds-accept-section" id="dsAcceptSection"></span>
                </button>
              </div>
            </div>
            <div class="ds-col ds-col-mid">
              <ul class="ds-stat-list" id="dsStatMid"></ul>
            </div>
            <div class="ds-col ds-col-right">
              <ul class="ds-stat-list" id="dsStatRight"></ul>
            </div>
            <div class="ds-col ds-col-detail" id="dsDetailCol" aria-hidden="true">
              <button type="button" class="ds-detail-back-mobile" id="dsDetailBackMobile" data-i18n="hintBackMenu">MENÚ PRINCIPAL</button>
              <div class="ds-detail-columns">
                <div class="ds-detail-side">
                  <ul class="ds-stat-list" id="dsDetailStats"></ul>
                </div>
                <div class="ds-detail-main">
                  <div class="ds-detail-scroll" id="dsDetailScroll">
                    <div class="ds-detail-body" id="dsDetailBody"></div>
                  </div>
                  <button type="button" class="ds-accept ds-accept-back" data-i18n="dsFooterExit">EXIT</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

    const cvList = menuColumn.querySelector('.ds-cv-list');
    const list = menuColumn.querySelector('.ds-list');
    optionWraps = [];

    SECTIONS.forEach((key, i) => {
      const li = document.createElement('li');
      li.className = 'ds-cv-item';
      li.setAttribute('role', 'menuitem');
      li.dataset.section = key;
      li.dataset.idx = String(i);
      li.innerHTML = `
        <span class="ds-cv-index">${String(i + 1).padStart(2, '0')}</span>
        ${dsIconSvg(DS_SECTION_ICONS[key] || 'book')}
        <span class="ds-cv-label">${t(`menu.${key}`)}</span>
        <span class="ds-cv-arrow" aria-hidden="true">▶</span>
      `;
      bindDSCvItem(li, key, i);
      cvList.appendChild(li);
    });

    DS_ATTRIBUTE_ORDER.forEach((attrId) => {
      const li = document.createElement('li');
      li.className = 'ds-list-item';
      li.setAttribute('role', 'menuitem');
      li.dataset.attr = attrId;
      li.innerHTML = `
        ${dsIconSvg(DS_ATTR_ICONS[attrId])}
        <span class="ds-item-label">${t(`dsAttributes.${attrId}`)}</span>
        <span class="ds-item-value">${DS_BASE_ATTR[attrId]}</span>
        <span class="ds-item-boost" aria-hidden="true"></span>
        <span class="ds-item-arrow" aria-hidden="true">▶</span>
      `;
      bindDSAttributeItem(li, attrId);
      list.appendChild(li);
      optionWraps.push(li);
    });

    document.querySelectorAll('#menuColumn [data-i18n]').forEach((el) => {
      const val = t(el.dataset.i18n);
      if (val) el.textContent = val;
    });
    updateDSSelectionUI(SECTIONS[focusIndex]);

    const acceptBtn = document.getElementById('dsAcceptBtn');
    if (acceptBtn) {
      acceptBtn.addEventListener('click', () => openSection(SECTIONS[focusIndex]));
    }

    const backBtn = menuColumn.querySelector('.ds-accept-back');
    if (backBtn) {
      backBtn.addEventListener('click', () => backToMain());
    }

    const dsDetailBackMobile = document.getElementById('dsDetailBackMobile');
    if (dsDetailBackMobile) {
      dsDetailBackMobile.addEventListener('click', () => backToMain());
    }

    if (detailOpen && currentSection) {
      const dsScreen = menuColumn.querySelector('.ds-screen');
      if (dsScreen) dsScreen.classList.add('detail-open');
      loadSectionContent(currentSection, false);
    }

    updateDSStats();
  }

  function updateDSDetailStats(key) {
    const list = document.getElementById('dsDetailStats');
    if (!list) return;
    const cur = computeDerived(DS_BASE_ATTR);
    const nxt = computeDerived(getAttrsWithBoost(key));
    const rows = [
      { icon: 'heart', labelKey: 'dsStatHP', cur: cur.hp, next: nxt.hp },
      { icon: 'shield', labelKey: 'dsStatEquipLoad', cur: cur.equip, next: nxt.equip },
      { icon: 'endure', labelKey: 'dsStatStamina', cur: cur.stamina, next: nxt.stamina },
      { icon: 'phys', labelKey: 'dsStatPhysDef', cur: cur.physDef, next: nxt.physDef },
      { icon: 'magic', labelKey: 'dsStatMagicDef', cur: cur.magicDef, next: nxt.magicDef },
      { icon: 'flame', labelKey: 'dsStatFlameDef', cur: cur.flameDef, next: nxt.flameDef },
      { icon: 'bolt', labelKey: 'dsStatLightningDef', cur: cur.lightningDef, next: nxt.lightningDef },
      { icon: 'resist', labelKey: 'dsStatPoisonResist', cur: cur.poisonRes, next: nxt.poisonRes },
      { icon: 'strength', labelKey: 'dsStatPhysicalAttack', cur: cur.physAtk, next: nxt.physAtk },
      { icon: 'attune', labelKey: 'dsStatMagicAttack', cur: cur.magicAtk, next: nxt.magicAtk }
    ];
    const changed = rows.filter((r) => r.cur !== r.next);
    const show = (changed.length ? changed : rows.slice(0, 4));
    list.innerHTML = show
      .map((r) => buildStatRowDual(r.icon, t(r.labelKey), r.cur, r.next, true))
      .join('');
  }

  function setDSDetailOpen(open) {
    const dsScreen = document.querySelector('.ds-screen');
    const dsCol = document.getElementById('dsDetailCol');
    if (dsScreen) dsScreen.classList.toggle('detail-open', open);
    if (dsCol) dsCol.setAttribute('aria-hidden', open ? 'false' : 'true');
  }

  function updateDSMobileStats(sectionKey) {
    const el = document.getElementById('dsMobileStats');
    if (!el) return;
    if (!window.matchMedia('(max-width: 768px)').matches) {
      el.innerHTML = '';
      return;
    }
    const cur = computeDerived(DS_BASE_ATTR);
    const nxt = computeDerived(getAttrsWithBoost(sectionKey));
    const rows = [
      { labelKey: 'dsStatHP', cur: cur.hp, next: nxt.hp },
      { labelKey: 'dsStatEquipLoad', cur: cur.equip, next: nxt.equip },
      { labelKey: 'dsStatStamina', cur: cur.stamina, next: nxt.stamina },
      { labelKey: 'dsStatPhysDef', cur: cur.physDef, next: nxt.physDef },
      { labelKey: 'dsStatMagicAttack', cur: cur.magicAtk, next: nxt.magicAtk }
    ];
    const changed = rows.filter((r) => r.cur !== r.next).slice(0, 4);
    el.innerHTML = changed
      .map((r) => `<li class="ds-mobile-stat"><span>${t(r.labelKey)}</span><span class="ds-mobile-stat-val">${r.cur} › ${r.next}</span></li>`)
      .join('');
  }

  function setFocusP3() {
    optionWraps.forEach((wrap, i) => {
      const selected = i === focusIndex;
      wrap.classList.toggle('is-selected', selected);
      wrap.style.zIndex = selected ? '5' : String(MENU_LAYOUT[i].zIndex);

      const text = wrap.querySelector('.menu-text:not(.fill-red)');
      const selector = wrap.querySelector('.selector-group');
      const redGroup = wrap.querySelector('.red-mask-group');
      if (!text || !selector || !redGroup) return;

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
  }

  function setFocusDS() {
    updateDSAttributeList(SECTIONS[focusIndex]);
    updateDSSelectionUI(SECTIONS[focusIndex]);
  }

  function setFocus(index, playFx) {
    if (index < 0) index = SECTIONS.length - 1;
    if (index >= SECTIONS.length) index = 0;
    const prev = focusIndex;
    focusIndex = index;

    if (currentTheme === 'ds') setFocusDS();
    else setFocusP3();

    const data = getSection(SECTIONS[focusIndex]);
    if (!detailOpen) {
      commandDesc.textContent = data.preview;
      if (currentTheme === 'ds') {
        updateDSStats();
        updateCommandLabels();
      }
    } else if (currentTheme === 'ds') {
      updateDSDetailStats(SECTIONS[focusIndex]);
      updateCommandLabels();
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

  function updateCommandLabels() {
    const confirmLbl = commandControls.querySelector('.control-main .control-label');
    const detailLabels = commandControls.querySelectorAll('.control-detail .control-label');
    if (currentTheme === 'ds') {
      const sectionLabel = t(`menu.${SECTIONS[focusIndex]}`);
      if (confirmLbl) {
        confirmLbl.textContent = detailOpen
          ? t('dsFooterSelect')
          : `${t('dsFooterConfirm')} · ${sectionLabel}`;
      }
      if (detailLabels[0]) detailLabels[0].textContent = t('dsFooterSelect');
      if (detailLabels[1]) detailLabels[1].textContent = t('dsFooterExit');
    } else {
      if (confirmLbl) confirmLbl.textContent = t('hintConfirm');
      if (detailLabels[0]) detailLabels[0].textContent = t('hintNav');
      if (detailLabels[1]) detailLabels[1].textContent = t('hintBackMenu');
    }
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
    updateCommandLabels();
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
      const isDs = currentTheme === 'ds';
      if (type === 'tick') {
        osc.frequency.value = isDs ? 220 : 440;
        osc.type = isDs ? 'triangle' : 'sine';
        gain.gain.setValueAtTime(isDs ? 0.05 : 0.04, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.06);
        osc.start(ctx.currentTime);
        osc.stop(ctx.currentTime + 0.06);
      } else if (type === 'confirm') {
        osc.frequency.setValueAtTime(isDs ? 180 : 320, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(isDs ? 360 : 640, ctx.currentTime + 0.12);
        osc.type = isDs ? 'triangle' : 'sine';
        gain.gain.setValueAtTime(0.05, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.14);
        osc.start(ctx.currentTime);
        osc.stop(ctx.currentTime + 0.14);
      } else if (type === 'cancel') {
        osc.frequency.setValueAtTime(isDs ? 280 : 500, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(isDs ? 140 : 240, ctx.currentTime + 0.1);
        osc.type = isDs ? 'triangle' : 'sine';
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

    const applyBody = (el) => {
      el.innerHTML = data.content;
      el.scrollTop = 0;
    };

    if (animate) {
      sectionBody.classList.add('is-swapping');
      setTimeout(() => {
        applyBody(sectionBody);
        sectionBody.classList.remove('is-swapping');
      }, 140);
    } else {
      applyBody(sectionBody);
    }

    const dsBody = document.getElementById('dsDetailBody');
    if (dsBody) {
      const applyDs = () => {
        dsBody.innerHTML = data.content;
        const scroll = document.getElementById('dsDetailScroll');
        if (scroll) scroll.scrollTop = 0;
        updateDSSelectionUI(key);
        updateDSDetailStats(key);
        updateDSAttributeList(key);
      };
      if (animate && currentTheme === 'ds') {
        dsBody.classList.add('is-swapping');
        setTimeout(() => {
          applyDs();
          dsBody.classList.remove('is-swapping');
        }, 140);
      } else {
        applyDs();
      }
    }

    const header = detailPanel.querySelector('.detail-header');
    if (animate && header && currentTheme !== 'ds') {
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

    if (currentTheme === 'ds') {
      setDSDetailOpen(true);
      setCommandMode('detail');
      return;
    }

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

    if (currentTheme === 'ds') {
      setDSDetailOpen(false);
      updateDSSelectionUI(SECTIONS[focusIndex]);
      setCommandMode('main');
      updateDSStats();
      return;
    }

    menuStage.classList.remove('detail-open');
    mainMenu.classList.remove('detail-open');
    detailPanel.setAttribute('aria-hidden', 'true');
    setCommandMode('main');
    const data = getSection(SECTIONS[focusIndex]);
    commandDesc.textContent = data.preview;
  }

  function applyTheme(theme) {
    if (theme === currentTheme) return;
    if (detailOpen) backToMain();
    currentTheme = theme;
    document.documentElement.dataset.theme = theme;
    themeButtons.forEach((b) => b.classList.toggle('active', b.dataset.theme === theme));
    document.title = theme === 'ds'
      ? 'Jon Hernández-Bueno — CV · Dark Souls'
      : 'Jon Hernández-Bueno — CV · Persona 3 Reload';
    buildMenu();
    updateCommandLabels();
    if (theme === 'p3') {
      setTimeout(pulseSelectors, 300);
      stopDSEmbers();
    } else {
      startDSEmbers();
    }
    playSound('tick');
  }

  function navigateSection(delta) {
    const idx = SECTIONS.indexOf(currentSection);
    const next = idx + delta;
    if (next < 0 || next >= SECTIONS.length) return;
    setFocus(next, false);
    switchSection(SECTIONS[next]);
  }

  function startDSEmbers() {
    if (!dsEmberCanvas || dsEmberFrame) return;
    const ctx = dsEmberCanvas.getContext('2d');
    const embers = Array.from({ length: 58 }, () => ({
      x: Math.random(),
      y: 0.84 + Math.random() * 0.12,
      vx: (Math.random() - 0.5) * 0.001,
      vy: -(Math.random() * 0.0016 + 0.0005),
      r: Math.random() * 2.2 + 0.4,
      a: Math.random() * 0.55 + 0.15,
      life: Math.random(),
      hot: Math.random() > 0.82
    }));

    const resize = () => {
      dsEmberCanvas.width = innerWidth;
      dsEmberCanvas.height = innerHeight;
    };
    resize();
    addEventListener('resize', resize);

    const draw = () => {
      if (currentTheme !== 'ds') return;
      ctx.clearRect(0, 0, dsEmberCanvas.width, dsEmberCanvas.height);
      embers.forEach((e) => {
        e.x += e.vx;
        e.y += e.vy;
        e.life += 0.008;
        if (e.life > 1 || e.y < 0.48) {
          e.x = 0.4 + Math.random() * 0.2;
          e.y = 0.86 + Math.random() * 0.1;
          e.vx = (Math.random() - 0.5) * 0.001;
          e.vy = -(Math.random() * 0.0016 + 0.0005);
          e.life = 0;
          e.a = Math.random() * 0.55 + 0.15;
          e.hot = Math.random() > 0.82;
        }
        const px = e.x * dsEmberCanvas.width;
        const py = e.y * dsEmberCanvas.height;
        const alpha = e.a * (1 - e.life) * 0.9;
        if (e.hot) {
          ctx.shadowBlur = 8;
          ctx.shadowColor = `rgba(255, 140, 40, ${alpha * 0.6})`;
        } else {
          ctx.shadowBlur = 0;
        }
        ctx.beginPath();
        ctx.arc(px, py, e.r, 0, Math.PI * 2);
        const warm = 100 + Math.floor(e.life * 100);
        ctx.fillStyle = e.hot
          ? `rgba(255, ${warm + 40}, 60, ${alpha})`
          : `rgba(255, ${warm}, 35, ${alpha * 0.85})`;
        ctx.fill();
        ctx.shadowBlur = 0;
      });
      dsEmberFrame = requestAnimationFrame(draw);
    };
    draw();
  }

  function stopDSEmbers() {
    if (dsEmberFrame) {
      cancelAnimationFrame(dsEmberFrame);
      dsEmberFrame = null;
    }
    if (dsEmberCanvas) {
      const ctx = dsEmberCanvas.getContext('2d');
      ctx.clearRect(0, 0, dsEmberCanvas.width, dsEmberCanvas.height);
    }
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

  themeButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      applyTheme(btn.dataset.theme);
    });
  });

  const detailBackMobile = document.getElementById('detailBackMobile');
  if (detailBackMobile) {
    detailBackMobile.addEventListener('click', () => backToMain());
  }

  let narrowP3Cached = isNarrowP3Layout();
  window.addEventListener('resize', () => {
    const narrow = isNarrowP3Layout();
    if (narrow === narrowP3Cached || currentTheme !== 'p3') return;
    narrowP3Cached = narrow;
    buildMenuP3();
    setFocus(focusIndex, false);
    if (detailOpen && currentSection) loadSectionContent(currentSection, false);
  });

  document.addEventListener('click', () => ensureAudio(), { once: true });
  document.addEventListener('keydown', () => ensureAudio(), { once: true });

  document.documentElement.dataset.theme = 'p3';
  themeButtons.forEach((b) => b.classList.toggle('active', b.dataset.theme === 'p3'));

  applyLanguage(currentLang);
  setCommandMode('main');
  initOcean();
  if (currentTheme === 'p3') setTimeout(pulseSelectors, 500);
})();
