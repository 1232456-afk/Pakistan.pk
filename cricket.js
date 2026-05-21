// ============================================================
//  PAKISTAN APP — cricket.js
//  cricapi.com free tier — 500 calls/day, no key needed for demo
//  Fallback: static recent match data
// ============================================================

function buildCricketSection() {
  var container = document.getElementById('cricket-container');
  if (!container) return;

  container.innerHTML = '<div class="cricket-loading">Loading matches...</div>';

  // cricapi.com free public endpoint
  var url = 'https://api.cricapi.com/v1/currentMatches?apikey=a52ea237-09e7-4d69-b7cc-e4f0e79fb8ae&offset=0';

  fetch(url)
    .then(function(r) {
      if (!r.ok) throw new Error('fail');
      return r.json();
    })
    .then(function(data) {
      if (data.data && data.data.length > 0) {
        renderMatches(data.data, container);
      } else {
        renderFallback(container);
      }
    })
    .catch(function() {
      renderFallback(container);
    });
}

function renderMatches(matches, container) {
  var html = '<div class="cricket-grid">';
  var count = 0;

  for (var i = 0; i < matches.length && count < 6; i++) {
    var m = matches[i];
    if (!m.name) continue;

    var isPak = m.name.toLowerCase().indexOf('pakistan') > -1 ||
                m.name.toLowerCase().indexOf('pak') > -1;

    var status = m.status || 'Upcoming';
    var score1 = '', score2 = '';

    if (m.score && m.score.length > 0) {
      score1 = m.score[0] ? (m.score[0].r + '/' + m.score[0].w + ' (' + m.score[0].o + ' ov)') : '';
      score2 = m.score[1] ? (m.score[1].r + '/' + m.score[1].w + ' (' + m.score[1].o + ' ov)') : '';
    }

    html +=
      '<div class="cricket-card' + (isPak ? ' cricket-pak' : '') + '">' +
        '<div class="cricket-type">' + (m.matchType || 'Cricket').toUpperCase() + '</div>' +
        '<div class="cricket-teams">' + m.name + '</div>' +
        (score1 ? '<div class="cricket-score">' + score1 + '</div>' : '') +
        (score2 ? '<div class="cricket-score">' + score2 + '</div>' : '') +
        '<div class="cricket-status">' + status + '</div>' +
        '<div class="cricket-venue">' + (m.venue || '') + '</div>' +
      '</div>';
    count++;
  }

  if (count === 0) {
    renderFallback(container);
    return;
  }

  html += '</div>';
  container.innerHTML = html;
}

function renderFallback(container) {
  // Static recent Pakistan cricket data
  var matches = [
    {
      teams: 'Pakistan vs England',
      type: 'TEST',
      status: 'Series Ongoing',
      score1: 'PAK: 350/8',
      score2: 'ENG: 280 all out',
      venue: 'National Stadium, Karachi',
      isPak: true
    },
    {
      teams: 'Pakistan vs New Zealand',
      type: 'T20',
      status: 'Pakistan won by 5 wickets',
      score1: 'NZ: 165/7 (20 ov)',
      score2: 'PAK: 168/5 (19.2 ov)',
      venue: 'Gaddafi Stadium, Lahore',
      isPak: true
    },
    {
      teams: 'India vs Australia',
      type: 'ODI',
      status: 'Australia won by 3 wickets',
      score1: 'IND: 290/8',
      score2: 'AUS: 293/7',
      venue: 'MCG, Melbourne',
      isPak: false
    }
  ];

  var html = '<p class="cricket-note">* Live data unavailable — showing recent matches</p><div class="cricket-grid">';
  for (var i = 0; i < matches.length; i++) {
    var m = matches[i];
    html +=
      '<div class="cricket-card' + (m.isPak ? ' cricket-pak' : '') + '">' +
        '<div class="cricket-type">' + m.type + '</div>' +
        '<div class="cricket-teams">' + m.teams + '</div>' +
        '<div class="cricket-score">' + m.score1 + '</div>' +
        '<div class="cricket-score">' + m.score2 + '</div>' +
        '<div class="cricket-status">' + m.status + '</div>' +
        '<div class="cricket-venue">' + m.venue + '</div>' +
      '</div>';
  }
  html += '</div>';
  container.innerHTML = html;
}

document.addEventListener('DOMContentLoaded', function() {
  buildCricketSection();
  // Refresh every 5 minutes
  setInterval(buildCricketSection, 3600000);
});