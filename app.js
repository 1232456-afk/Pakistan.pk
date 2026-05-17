// ============================================================
//  PAKISTAN APP — app.js
//  Depends on: data.js (must load before this file)
// ============================================================

document.addEventListener('DOMContentLoaded', function () {
  buildLeadership();
  buildPreviousLeaders();
  buildPersonalities();
  buildProvinces();
  buildGeography();
  buildEconomy();
  buildMilitary();
  buildCulture();
  buildLanguages();
  buildReligion();
  initScrollAnimations();
  initNavHighlight();
  initNavToggle();
});

// ─────────────────────────────────────────────
//  1. CURRENT LEADERSHIP
// ─────────────────────────────────────────────
function buildLeadership() {
  var container = document.getElementById('leaders-primary');
  if (!container) return;

  var d = PAKISTAN.leadership;

  var leaders = [
    { emoji: '👔', role: 'President',       data: d.president },
    { emoji: '🏛️', role: 'Prime Minister',  data: d.primeMinister },
    { emoji: '⚖️', role: 'Chief Justice',   data: d.chiefJustice },
    { emoji: '🎖️', role: 'Army Chief',      data: d.armyChief },
    { emoji: '🪑', role: 'Chairman Senate', data: d.chairman_senate },
    { emoji: '🗣️', role: 'Speaker NA',      data: d.speaker_na }
  ];

  var html = '';
  for (var i = 0; i < leaders.length; i++) {
    var l = leaders[i];
    var p = l.data;
    html += '<div class="leader-card fade-in">';
    html += '<div class="leader-avatar">' + l.emoji + '</div>';
    html += '<div class="leader-role">' + l.role + '</div>';
    html += '<div class="leader-name">' + p.name + '</div>';
    html += '<div class="leader-since">Since: ' + p.since + '</div>';
    if (p.party) {
      html += '<span class="leader-party">' + p.party + '</span>';
    }
    html += '</div>';
  }
  container.innerHTML = html;
}

// ─────────────────────────────────────────────
//  2. PREVIOUS LEADERS TABLE
// ─────────────────────────────────────────────
function buildPreviousLeaders() {
  var tbody = document.getElementById('prev-leaders-body');
  if (!tbody) return;

  var list = PAKISTAN.previousLeaders;
  var html = '';

  for (var i = 0; i < list.length; i++) {
    var l = list[i];
    var badgeClass = l.role === 'PM' ? 'role-pm' : 'role-pres';
    html += '<div class="prev-table-row">';
    html += '<span><span class="role-badge ' + badgeClass + '">' + l.role + '</span></span>';
    html += '<span><strong>' + l.name + '</strong>';
    if (l.note) {
      html += '<br><span class="prev-note">' + l.note + '</span>';
    }
    html += '</span>';
    html += '<span>' + l.period + '</span>';
    html += '<span>' + l.party + '</span>';
    html += '</div>';
  }
  tbody.innerHTML = html;
}

// ─────────────────────────────────────────────
//  3. FAMOUS PERSONALITIES
// ─────────────────────────────────────────────
function buildPersonalities() {
  var grid = document.getElementById('persons-grid');
  if (!grid) return;

  var list = PAKISTAN.famousPersonalities;
  var html = '';

  for (var i = 0; i < list.length; i++) {
    var p = list[i];
    var dates = '';
    if (p.born) {
      dates = 'Born: ' + p.born;
      if (p.died) { dates += ' &nbsp;|&nbsp; Died: ' + p.died; }
    }

    html += '<div class="person-card fade-in">';
    html += '<div class="person-top">';
    html += '<div class="person-emoji">' + p.emoji + '</div>';
    html += '<div>';
    html += '<div class="person-name">' + p.name + '</div>';
    html += '<div class="person-title">' + p.title + '</div>';
    html += '</div>';
    html += '</div>';
    if (dates) {
      html += '<div class="person-dates">' + dates + '</div>';
    }
    html += '<div class="person-role">' + p.role + '</div>';
    html += '<div class="divider"></div>';
    html += '<div class="person-contrib">' + p.contribution + '</div>';
    html += '</div>';
  }
  grid.innerHTML = html;
}

// ─────────────────────────────────────────────
//  4. PROVINCES
// ─────────────────────────────────────────────
function buildProvinces() {
  var grid = document.getElementById('provinces-grid');
  if (!grid) return;

  var list = PAKISTAN.provinces;
  var html = '';

  for (var i = 0; i < list.length; i++) {
    var p = list[i];
    var cities = '';
    for (var j = 0; j < p.majorCities.length; j++) {
      cities += '<span class="city-tag">' + p.majorCities[j] + '</span>';
    }

    html += '<div class="prov-card fade-in">';
    html += '<div class="prov-head">';
    html += '<div class="prov-ico">' + p.emoji + '</div>';
    html += '<div>';
    html += '<div class="prov-n">' + p.name + '</div>';
    html += '<div class="prov-c">Capital: ' + p.capital + '</div>';
    html += '</div>';
    html += '</div>';
    html += '<div class="divider"></div>';
    html += '<div class="prov-highlight">' + p.highlight + '</div>';
    html += '<div class="prov-detail"><span>Population</span><span>' + p.population + '</span></div>';
    html += '<div class="prov-detail"><span>Area</span><span>' + p.area + '</span></div>';
    html += '<div class="prov-bar-wrap">';
    html += '<div class="prov-bar-lbl"><span>Population share</span><span>' + p.share + '%</span></div>';
    html += '<div class="prov-bar-bg"><div class="prov-bar-fill" style="width:' + p.share + '%"></div></div>';
    html += '</div>';
    html += '<div class="prov-cities">' + cities + '</div>';
    html += '</div>';
  }
  grid.innerHTML = html;
}

// ─────────────────────────────────────────────
//  5. GEOGRAPHY
// ─────────────────────────────────────────────
function buildGeography() {
  var g = PAKISTAN.geography;
  fillList('geo-rivers',    g.majorRivers);
  fillList('geo-mountains', g.majorMountains);
  fillList('geo-deserts',   g.deserts);
  fillList('geo-resources', g.naturalResources);
  fillList('geo-places',    g.famousPlaces);
  fillList('geo-borders',   PAKISTAN.basic.borders);
}

function fillList(id, arr) {
  var el = document.getElementById(id);
  if (!el || !arr) return;
  var html = '';
  for (var i = 0; i < arr.length; i++) {
    html += '<li>' + arr[i] + '</li>';
  }
  el.innerHTML = html;
}

// ─────────────────────────────────────────────
//  6. ECONOMY
// ─────────────────────────────────────────────
function buildEconomy() {
  var e = PAKISTAN.economy;

  fillList('eco-exports',  e.majorExports);
  fillList('eco-imports',  e.majorImports);
  fillList('eco-sectors',  e.mainSectors);
  fillList('eco-partners', e.tradePartners);

  var statsGrid = document.getElementById('eco-stats');
  if (!statsGrid) return;

  var stats = [
    { val: e.gdpNominal,   lbl: 'GDP (Nominal)' },
    { val: e.gdpPPP,       lbl: 'GDP (PPP)' },
    { val: e.gdpPerCapita, lbl: 'GDP Per Capita' },
    { val: e.gdpGrowth,    lbl: 'GDP Growth' },
    { val: e.remittances,  lbl: 'Annual Remittances' },
    { val: e.inflation,    lbl: 'Inflation (2024)' }
  ];

  var html = '';
  for (var i = 0; i < stats.length; i++) {
    html += '<div class="eco-stat">';
    html += '<div class="eco-val">' + stats[i].val + '</div>';
    html += '<div class="eco-lbl">' + stats[i].lbl + '</div>';
    html += '</div>';
  }
  statsGrid.innerHTML = html;
}

// ─────────────────────────────────────────────
//  7. MILITARY
// ─────────────────────────────────────────────
function buildMilitary() {
  var grid = document.getElementById('mil-grid');
  if (!grid) return;

  var m = PAKISTAN.military;

  var cards = [
    { icon: '🪖', title: 'Active Personnel',   body: m.manpower },
    { icon: '💣', title: 'Nuclear Status',      body: m.nuclearStatus },
    { icon: '☢️', title: 'Nuclear Arsenal',     body: m.nuclearWarheads + ' estimated warheads' },
    { icon: '🌍', title: 'Global Defence Rank', body: m.defenceRank },
    { icon: '✈️', title: 'Military Branches',   body: m.branches.join(' &nbsp;&middot;&nbsp; ') },
    { icon: '🏅', title: 'Notable Achievements',body: m.notableAchievements.join('<br>') }
  ];

  var html = '';
  for (var i = 0; i < cards.length; i++) {
    var c = cards[i];
    html += '<div class="mil-card fade-in">';
    html += '<div class="mil-icon">' + c.icon + '</div>';
    html += '<div class="mil-title">' + c.title + '</div>';
    html += '<div class="mil-body">' + c.body + '</div>';
    html += '</div>';
  }
  grid.innerHTML = html;
}

// ─────────────────────────────────────────────
//  8. CULTURE
// ─────────────────────────────────────────────
function buildCulture() {
  var grid = document.getElementById('culture-grid');
  if (!grid) return;

  var c = PAKISTAN.culture;

  var sections = [
    {
      title: '🏏 Sports',
      pills: [
        'Cricket — 1992 WC Champions',
        'Squash — Jahangir Khan (555-match streak)',
        'Hockey — 4x World Cup Winners',
        'Kabaddi — Multiple world titles'
      ]
    },
    {
      title: '🍛 Cuisine',
      pills: c.cuisine
    },
    {
      title: '🎉 Festivals',
      pills: c.festivals
    },
    {
      title: '🎵 Music and Arts',
      pills: c.musicTraditions.concat(c.arts)
    }
  ];

  var html = '';
  for (var i = 0; i < sections.length; i++) {
    var s = sections[i];
    var pills = '';
    for (var j = 0; j < s.pills.length; j++) {
      pills += '<span class="pill">' + s.pills[j] + '</span>';
    }
    html += '<div class="culture-card fade-in">';
    html += '<h3>' + s.title + '</h3>';
    html += '<div class="pill-list">' + pills + '</div>';
    html += '</div>';
  }
  grid.innerHTML = html;
}

// ─────────────────────────────────────────────
//  9. LANGUAGES
// ─────────────────────────────────────────────
function buildLanguages() {
  var list = document.getElementById('lang-list');
  if (!list) return;

  var langs = PAKISTAN.languages;
  var html = '';

  for (var i = 0; i < langs.length; i++) {
    var l = langs[i];
    var tagClass = 'tag-' + l.tag.toLowerCase();
    html += '<div class="lang-item">';
    html += '<div class="lang-dot" style="background:' + l.color + '"></div>';
    html += '<span class="lang-item-name">' + l.name + '</span>';
    html += '<span class="lang-spk">' + l.speakers + '</span>';
    html += '<span class="tag ' + tagClass + '">' + l.tag + '</span>';
    html += '</div>';
  }
  list.innerHTML = html;
}

// ─────────────────────────────────────────────
//  10. RELIGION
// ─────────────────────────────────────────────
function buildReligion() {
  var bars = document.getElementById('rel-bars');
  if (!bars) return;

  var list = PAKISTAN.religion;
  var html = '';

  for (var i = 0; i < list.length; i++) {
    var r = list[i];
    html += '<div class="rel-bar-item">';
    html += '<div class="rel-bar-header">';
    html += '<span class="rel-name">' + r.name + '</span>';
    html += '<span class="rel-pct">' + r.percent + '%</span>';
    html += '</div>';
    html += '<div class="rel-track">';
    html += '<div class="rel-fill" data-width="' + r.percent + '" style="width:0%;background:' + r.color + '"></div>';
    html += '</div>';
    html += '</div>';
  }
  bars.innerHTML = html;
}

// ─────────────────────────────────────────────
//  11. SCROLL & FADE-IN ANIMATIONS
// ─────────────────────────────────────────────
function initScrollAnimations() {
  var fadeEls = document.querySelectorAll('.fade-in');

  if (!window.IntersectionObserver) {
    for (var i = 0; i < fadeEls.length; i++) {
      fadeEls[i].classList.add('visible');
    }
    animateRelBars();
    return;
  }

  var fadeObserver = new IntersectionObserver(function (entries) {
    for (var i = 0; i < entries.length; i++) {
      if (entries[i].isIntersecting) {
        entries[i].target.classList.add('visible');
      }
    }
  }, { threshold: 0.08 });

  for (var i = 0; i < fadeEls.length; i++) {
    fadeObserver.observe(fadeEls[i]);
  }

  var relSection = document.getElementById('religion');
  if (relSection) {
    var relObserver = new IntersectionObserver(function (entries) {
      if (entries[0].isIntersecting) {
        animateRelBars();
      }
    }, { threshold: 0.2 });
    relObserver.observe(relSection);
  }
}

function animateRelBars() {
  var fills = document.querySelectorAll('.rel-fill');
  for (var i = 0; i < fills.length; i++) {
    (function (el) {
      var w = el.getAttribute('data-width');
      if (w) {
        setTimeout(function () {
          el.style.width = w + '%';
        }, 300);
      }
    })(fills[i]);
  }
}

// ─────────────────────────────────────────────
//  12. NAV ACTIVE LINK HIGHLIGHT ON SCROLL
// ─────────────────────────────────────────────
function initNavHighlight() {
  if (!window.IntersectionObserver) return;

  var sections = document.querySelectorAll('section[id]');
  var navLinks = document.querySelectorAll('.nav-links a[href^="#"]');

  var obs = new IntersectionObserver(function (entries) {
    for (var i = 0; i < entries.length; i++) {
      if (entries[i].isIntersecting) {
        var id = entries[i].target.getAttribute('id');
        for (var j = 0; j < navLinks.length; j++) {
          navLinks[j].classList.remove('active');
          if (navLinks[j].getAttribute('href') === '#' + id) {
            navLinks[j].classList.add('active');
          }
        }
      }
    }
  }, { threshold: 0.4 });

  for (var i = 0; i < sections.length; i++) {
    obs.observe(sections[i]);
  }
}

// ─────────────────────────────────────────────
//  13. MOBILE HAMBURGER MENU TOGGLE
// ─────────────────────────────────────────────
function initNavToggle() {
  var toggle = document.getElementById('nav-toggle');
  var links  = document.getElementById('nav-links');
  if (!toggle || !links) return;

  toggle.addEventListener('click', function () {
    links.classList.toggle('open');
    toggle.classList.toggle('open');
  });

  var anchors = links.querySelectorAll('a');
  for (var i = 0; i < anchors.length; i++) {
    anchors[i].addEventListener('click', function () {
      links.classList.remove('open');
      toggle.classList.remove('open');
    });
  }
}