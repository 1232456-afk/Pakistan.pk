// ============================================================
//  PAKISTAN APP — auto-update.js
//  Wikipedia API se real-time data fetch karta hai
//  PM, President, Army Chief automatically update hote hain
// ============================================================

var AUTO_UPDATE = {

  // Wikipedia se Prime Minister fetch karo
  fetchPM: function () {
    var url = 'https://en.wikipedia.org/api/rest_v1/page/summary/Prime_Minister_of_Pakistan';
    fetch(url)
      .then(function (res) { return res.json(); })
      .then(function (data) {
        var name = data.title || '';
        // Extract current PM name from extract
        var extract = data.extract || '';
        // Wikipedia extract se pehla naam nikalna
        var match = extract.match(/([A-Z][a-z]+ [A-Z][a-z]+(?: [A-Z][a-z]+)?)\s+is the\s+(?:current\s+)?Prime Minister/);
        if (match && match[1]) {
          AUTO_UPDATE.updateLeader('Prime Minister', match[1]);
        }
      })
      .catch(function () {
        // API fail ho to koi masla nahi — purana data rahega
      });
  },

  // Wikipedia se President fetch karo
  fetchPresident: function () {
    var url = 'https://en.wikipedia.org/api/rest_v1/page/summary/President_of_Pakistan';
    fetch(url)
      .then(function (res) { return res.json(); })
      .then(function (data) {
        var extract = data.extract || '';
        var match = extract.match(/([A-Z][a-z]+ [A-Z][a-z]+(?: [A-Z][a-z]+)?)\s+is the\s+(?:current\s+)?President/);
        if (match && match[1]) {
          AUTO_UPDATE.updateLeader('President', match[1]);
        }
      })
      .catch(function () {});
  },

  // DOM mein leader card update karo
  updateLeader: function (role, newName) {
    var cards = document.querySelectorAll('.leader-card');
    for (var i = 0; i < cards.length; i++) {
      var roleEl = cards[i].querySelector('.leader-role');
      var nameEl = cards[i].querySelector('.leader-name');
      if (roleEl && nameEl) {
        if (roleEl.textContent.trim().toLowerCase() === role.toLowerCase()) {
          var oldName = nameEl.textContent.trim();
          if (oldName !== newName) {
            nameEl.textContent = newName;
            nameEl.style.color = '#c8a84b'; // Gold color — updated
            console.log('Updated ' + role + ': ' + oldName + ' → ' + newName);
          }
        }
      }
    }
  },

  // Pakistan ki population worldometer se nahi milti directly
  // Wikipedia se latest population update
  fetchPopulation: function () {
    var url = 'https://en.wikipedia.org/api/rest_v1/page/summary/Pakistan';
    fetch(url)
      .then(function (res) { return res.json(); })
      .then(function (data) {
        var extract = data.extract || '';
        // Population match
        var match = extract.match(/population of (?:over |approximately )?([0-9,.]+\s*(?:million|billion))/i);
        if (match && match[1]) {
          AUTO_UPDATE.updateHeroStat('Population', match[1]);
        }
      })
      .catch(function () {});
  },

  // Hero stats update karo
  updateHeroStat: function (label, newValue) {
    var stats = document.querySelectorAll('.hero-stat');
    for (var i = 0; i < stats.length; i++) {
      var lbl = stats[i].querySelector('.lbl');
      var num = stats[i].querySelector('.num');
      if (lbl && num) {
        if (lbl.textContent.trim().toLowerCase() === label.toLowerCase()) {
          num.textContent = newValue;
        }
      }
    }
  },

  // Sab updates run karo
  init: function () {
    // Page load hone ke 2 second baad run karo
    setTimeout(function () {
      AUTO_UPDATE.fetchPM();
      AUTO_UPDATE.fetchPresident();
      AUTO_UPDATE.fetchPopulation();
    }, 2000);
  }
};

// Auto update start karo
AUTO_UPDATE.init();