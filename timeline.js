// ============================================================
//  PAKISTAN APP — timeline.js
//  1. Pakistan History Timeline (1930 - 2024)
//  2. "On This Day" — aaj Pakistan ki history mein kya tha
//  Pure JS — no external APIs, always works
// ============================================================

// ── TIMELINE DATA ────────────────────────────────────────────
var TIMELINE = [
  { year:1930, event:'Allama Iqbal ka Allahabad Address — Muslim homeland ka tasawwur pesh kiya',                    type:'political'     },
  { year:1933, event:'Choudhry Rahmat Ali ne "Pakistan" naam suggest kiya',                                          type:'political'     },
  { year:1940, event:'Lahore Resolution — Pakistan ka baaqaida mutalba kiya gaya',                                   type:'political'     },
  { year:1947, event:'14 August — Pakistan azad hua. Quaid-e-Azam pehle Governor General bane',                      type:'independence'  },
  { year:1948, event:'Quaid-e-Azam Muhammad Ali Jinnah ka inteqal — 11 September',                                   type:'political'     },
  { year:1951, event:'Liaquat Ali Khan shaheed — Pakistan ke pehle PM Rawalpindi mein',                               type:'political'     },
  { year:1956, event:'23 March — Pakistan Islamic Republic bana, pehla آئین nafiz hua',                               type:'achievement'   },
  { year:1958, event:'Pehla martial law — Field Marshal Ayub Khan iktidaar mein aaye',                                type:'military'      },
  { year:1965, event:'Pakistan-India jang — Lahore aur Sialkot ke morche',                                           type:'military'      },
  { year:1971, event:'Bangladesh bana — Mashriqi Pakistan alag hua',                                                 type:'political'     },
  { year:1973, event:'Zulfikar Ali Bhutto ka آئین — aaj bhi nafiz hai',                                              type:'political'     },
  { year:1974, event:'Pakistan ne pehli Islamic Summit host ki — Lahore',                                            type:'achievement'   },
  { year:1977, event:'Dusra martial law — General Zia ul Haq iktidaar mein aaye',                                    type:'military'      },
  { year:1979, event:'Zulfikar Ali Bhutto ko phansi di gayi',                                                        type:'political'     },
  { year:1984, event:'Siachen Glacier operation shuru — duniya ki sabse unchi jang ki jagah',                        type:'military'      },
  { year:1988, event:'Benazir Bhutto — Muslim duniya ki pehli khatoon PM bani',                                      type:'achievement'   },
  { year:1992, event:'Pakistan ne Cricket World Cup jeeta — Imran Khan ki qiyaadat mein',                            type:'sports'        },
  { year:1998, event:'28 May — Pakistan nuclear power bana — Youm-e-Takbir',                                         type:'achievement'   },
  { year:1999, event:'Kargil jang — Pakistan-India — Siachen ke qareeb',                                             type:'military'      },
  { year:1999, event:'Teesra martial law — General Pervez Musharraf iktidaar mein aaye',                             type:'military'      },
  { year:2001, event:'War on Terror mein Pakistan shamil hua',                                                       type:'political'     },
  { year:2005, event:'Azad Kashmir aur KPK mein tabah kun zalzala — 73,000 se zyada jaanein gayin',                  type:'disaster'      },
  { year:2007, event:'Benazir Bhutto shaheed — Rawalpindi — 27 December',                                            type:'political'     },
  { year:2008, event:'Civilian hukumat wapas — Musharraf ka istifa',                                                  type:'political'     },
  { year:2010, event:'Pakistan mein sab se bari floods — 20 million se zyada mutasir',                               type:'disaster'      },
  { year:2013, event:'Pakistan mein pehli baar ek civilian hukumat ne doosri ko iktidaar diya',                      type:'achievement'   },
  { year:2014, event:'Malala Yousafzai — Nobel Peace Prize — sabse kam umar mein',                                   type:'achievement'   },
  { year:2015, event:'APS Peshawar hamla — 132 masoom bachche shaheed',                                              type:'disaster'      },
  { year:2017, event:'Pakistan Super League (PSL) ka pehla final Lahore mein hua',                                   type:'sports'        },
  { year:2018, event:'Imran Khan PM bane — PTI ki pehli hukumat',                                                    type:'political'     },
  { year:2022, event:'Imran Khan no-confidence vote se hata — Shehbaz Sharif PM bane',                               type:'political'     },
  { year:2022, event:'Pakistan mein record floods — 33 million mutasir — ek tihaayi zameen zair-e-aab',              type:'disaster'      },
  { year:2023, event:'Pakistan IMF se $3 billion ka bail-out package',                                               type:'political'     },
  { year:2024, event:'Asif Ali Zardari President — Shehbaz Sharif dobara PM bane',                                   type:'political'     },
];

// ── ON THIS DAY DATA ─────────────────────────────────────────
var ON_THIS_DAY = [
  // January
  { m:1,  d:5,  year:1929, event:'Rahimuddin Khan paida hue — Pakistan ke Chief of Army Staff', type:'achievement' },
  // February
  { m:2,  d:19, year:1961, event:'Shaheed Zulfikar Ali Bhutto PPP ke co-founder ne siyaasi safar shuru kiya', type:'political' },
  // March
  { m:3,  d:23, year:1940, event:'Lahore Resolution pass hua — Pakistan ki buniyad rakhi gayi', type:'political' },
  { m:3,  d:23, year:1956, event:'Pakistan Islamic Republic bana — Youm-e-Pakistan', type:'achievement' },
  // April
  { m:4,  d:4,  year:1979, event:'Zulfikar Ali Bhutto ko phansi di gayi — Rawalpindi', type:'political' },
  // May
  { m:5,  d:28, year:1998, event:'Youm-e-Takbir — Pakistan nuclear power bana — Chagai tests', type:'achievement' },
  // June
  { m:6,  d:21, year:1953, event:'Benazir Bhutto paida hui — Karachi', type:'achievement' },
  // July
  { m:7,  d:5,  year:1977, event:'General Zia ul Haq ne martial law lagaya', type:'military' },
  { m:7,  d:12, year:1997, event:'Malala Yousafzai paida hui — Mingora, Swat', type:'achievement' },
  // August
  { m:8,  d:14, year:1947, event:'Pakistan azad hua — Youm-e-Azadi — 14 August 1947', type:'independence' },
  { m:8,  d:11, year:1947, event:'Quaid-e-Azam ka Constituent Assembly mein historic khitaab', type:'independence' },
  // September
  { m:9,  d:6,  year:1965, event:'Youm-e-Difa — Pakistan-India jang 1965 shuru', type:'military' },
  { m:9,  d:11, year:1948, event:'Quaid-e-Azam Muhammad Ali Jinnah ka inteqal', type:'political' },
  // October
  { m:10, d:1,  year:1895, event:'Liaquat Ali Khan paida hue — Pakistan ke pehle PM', type:'achievement' },
  { m:10, d:5,  year:1952, event:'Imran Khan paida hue — Lahore', type:'achievement' },
  { m:10, d:8,  year:2005, event:'Azad Kashmir zalzala — 73,000+ jaanein gayin', type:'disaster' },
  { m:10, d:16, year:1951, event:'Liaquat Ali Khan shaheed — Rawalpindi', type:'political' },
  // November
  { m:11, d:9,  year:1877, event:'Allama Iqbal paida hue — Sialkot — Youm-e-Iqbal', type:'achievement' },
  // December
  { m:12, d:25, year:1876, event:'Quaid-e-Azam Muhammad Ali Jinnah paida hue — Karachi', type:'achievement' },
  { m:12, d:27, year:2007, event:'Benazir Bhutto shaheed — Rawalpindi', type:'political' },
];

// ── TYPE CONFIG ───────────────────────────────────────────────
var TYPE_CONFIG = {
  independence: { color: '#c8a84b', bg: '#fef9ec', icon: '🏆', label: 'Azadi'       },
  achievement:  { color: '#0b6e4f', bg: '#e8f5f0', icon: '⭐', label: 'Kamyabi'     },
  political:    { color: '#1a3a8f', bg: '#e8eef8', icon: '🏛️', label: 'Siyaasi'     },
  military:     { color: '#7f1d1d', bg: '#fde8e8', icon: '🎖️', label: 'Fauji'       },
  sports:       { color: '#065f46', bg: '#d1fae5', icon: '🏏', label: 'Khel'        },
  disaster:     { color: '#78350f', bg: '#fef3c7', icon: '⚠️', label: 'Haadsa'      },
};

// ── BUILD TIMELINE ────────────────────────────────────────────
function buildTimeline() {
  var container = document.getElementById('timeline-container');
  if (!container) return;

  // Filter buttons
  var html =
    '<div class="tl-filters">' +
    '<button class="tl-filter active" data-type="all" onclick="filterTimeline(this,\'all\')">Sab</button>';

  var seen = {};
  for (var i = 0; i < TIMELINE.length; i++) {
    var t = TIMELINE[i].type;
    if (!seen[t] && TYPE_CONFIG[t]) {
      seen[t] = true;
      html += '<button class="tl-filter" data-type="' + t + '" onclick="filterTimeline(this,\'' + t + '\')" style="border-color:' + TYPE_CONFIG[t].color + ';color:' + TYPE_CONFIG[t].color + ';">' +
        TYPE_CONFIG[t].icon + ' ' + TYPE_CONFIG[t].label + '</button>';
    }
  }
  html += '</div><div class="tl-list" id="tl-list">';

  for (var i = 0; i < TIMELINE.length; i++) {
    var item = TIMELINE[i];
    var cfg  = TYPE_CONFIG[item.type] || TYPE_CONFIG.political;
    html +=
      '<div class="tl-item" data-type="' + item.type + '">' +
        '<div class="tl-dot" style="background:' + cfg.color + ';">' + cfg.icon + '</div>' +
        '<div class="tl-line"></div>' +
        '<div class="tl-card" style="border-left:3px solid ' + cfg.color + ';">' +
          '<div class="tl-year" style="color:' + cfg.color + ';">' + item.year + '</div>' +
          '<div class="tl-event">' + item.event + '</div>' +
          '<span class="tl-badge" style="background:' + cfg.bg + ';color:' + cfg.color + ';">' + cfg.icon + ' ' + cfg.label + '</span>' +
        '</div>' +
      '</div>';
  }
  html += '</div>';
  container.innerHTML = html;
}

function filterTimeline(btn, type) {
  // Update active button
  var btns = document.querySelectorAll('.tl-filter');
  for (var i = 0; i < btns.length; i++) btns[i].classList.remove('active');
  btn.classList.add('active');

  // Show/hide items
  var items = document.querySelectorAll('.tl-item');
  for (var i = 0; i < items.length; i++) {
    if (type === 'all' || items[i].getAttribute('data-type') === type) {
      items[i].style.display = 'flex';
    } else {
      items[i].style.display = 'none';
    }
  }
}

// ── BUILD ON THIS DAY ─────────────────────────────────────────
function buildOnThisDay() {
  var container = document.getElementById('otd-container');
  if (!container) return;

  var today = new Date();
  var m = today.getMonth() + 1;
  var d = today.getDate();

  // Find events for today
  var todayEvents = [];
  for (var i = 0; i < ON_THIS_DAY.length; i++) {
    if (ON_THIS_DAY[i].m === m && ON_THIS_DAY[i].d === d) {
      todayEvents.push(ON_THIS_DAY[i]);
    }
  }

  var months = ['January','February','March','April','May','June',
                'July','August','September','October','November','December'];

  var dateStr = d + ' ' + months[m-1];

  var html =
    '<div class="otd-header">' +
      '<div class="otd-date-badge">' +
        '<div class="otd-day">' + d + '</div>' +
        '<div class="otd-month">' + months[m-1] + '</div>' +
      '</div>' +
      '<div class="otd-title-wrap">' +
        '<div class="otd-title">Aaj — ' + dateStr + '</div>' +
        '<div class="otd-subtitle">Pakistan ki history mein aaj ka din</div>' +
      '</div>' +
    '</div>';

  if (todayEvents.length === 0) {
    html += '<div class="otd-empty">📅 Aaj ke din Pakistan ki koi khaas tarikh nahi mili — lekin har din Pakistan ki azadi ka jashn hai! 🇵🇰</div>';
  } else {
    html += '<div class="otd-events">';
    for (var i = 0; i < todayEvents.length; i++) {
      var ev  = todayEvents[i];
      var cfg = TYPE_CONFIG[ev.type] || TYPE_CONFIG.political;
      html +=
        '<div class="otd-event-card" style="border-left:4px solid ' + cfg.color + ';background:' + cfg.bg + ';">' +
          '<div class="otd-event-icon">' + cfg.icon + '</div>' +
          '<div class="otd-event-body">' +
            '<div class="otd-event-year">' + ev.year + '</div>' +
            '<div class="otd-event-text">' + ev.event + '</div>' +
          '</div>' +
        '</div>';
    }
    html += '</div>';
  }

  // Always show upcoming Pakistan events
  html += '<div class="otd-upcoming"><div class="otd-up-title">📌 Aane waale ahem din</div><div class="otd-up-list">';

  var upcoming = getUpcoming(m, d, 4);
  for (var i = 0; i < upcoming.length; i++) {
    var ev  = upcoming[i];
    var cfg = TYPE_CONFIG[ev.type] || TYPE_CONFIG.political;
    var daysLeft = ev.daysLeft;
    html +=
      '<div class="otd-up-item">' +
        '<span class="otd-up-icon">' + cfg.icon + '</span>' +
        '<span class="otd-up-text">' + ev.event + '</span>' +
        '<span class="otd-up-days" style="color:' + cfg.color + ';">' + (daysLeft === 0 ? 'Aaj!' : daysLeft + ' din') + '</span>' +
      '</div>';
  }
  html += '</div></div>';

  container.innerHTML = html;
}

function getUpcoming(curM, curD, count) {
  var results = [];
  var curTotal = curM * 100 + curD;

  // Calculate days until each event
  for (var i = 0; i < ON_THIS_DAY.length; i++) {
    var ev = ON_THIS_DAY[i];
    var evTotal = ev.m * 100 + ev.d;
    var daysLeft;

    if (evTotal >= curTotal) {
      // This year
      daysLeft = daysBetween(curM, curD, ev.m, ev.d);
    } else {
      // Next year
      daysLeft = daysBetween(curM, curD, 12, 31) + daysBetween(1, 1, ev.m, ev.d) + 1;
    }

    results.push({ event: ev.event, type: ev.type, m: ev.m, d: ev.d, year: ev.year, daysLeft: daysLeft });
  }

  // Sort by days left
  results.sort(function(a, b) { return a.daysLeft - b.daysLeft; });

  // Remove today's events (daysLeft = 0 shown above already)
  var upcoming = [];
  for (var i = 0; i < results.length && upcoming.length < count; i++) {
    if (results[i].daysLeft > 0) upcoming.push(results[i]);
  }
  return upcoming;
}

function daysBetween(m1, d1, m2, d2) {
  var year = new Date().getFullYear();
  var a = new Date(year, m1-1, d1);
  var b = new Date(year, m2-1, d2);
  return Math.round((b - a) / 86400000);
}

// ── INIT ──────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', function() {
  buildTimeline();
  buildOnThisDay();

  // Auto refresh On This Day at midnight
  var now    = new Date();
  var msLeft = new Date(now.getFullYear(), now.getMonth(), now.getDate()+1) - now;
  setTimeout(function() {
    buildOnThisDay();
    setInterval(buildOnThisDay, 86400000);
  }, msLeft);
});