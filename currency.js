// currency.js — cdn.jsdelivr.net/npm/@fawazahmed0/currency-api
// 100% free, no key, no CORS issues

var CURRENCY_RATES = {};

var CURRENCY_LIST = [
  { code: 'usd', label: 'USD', name: 'US Dollar',         flag: '🇺🇸' },
  { code: 'aed', label: 'AED', name: 'UAE Dirham',        flag: '🇦🇪' },
  { code: 'sar', label: 'SAR', name: 'Saudi Riyal',       flag: '🇸🇦' },
  { code: 'gbp', label: 'GBP', name: 'British Pound',     flag: '🇬🇧' },
  { code: 'eur', label: 'EUR', name: 'Euro',              flag: '🇪🇺' },
  { code: 'cny', label: 'CNY', name: 'Chinese Yuan',      flag: '🇨🇳' },
  { code: 'cad', label: 'CAD', name: 'Canadian Dollar',   flag: '🇨🇦' },
  { code: 'aud', label: 'AUD', name: 'Australian Dollar', flag: '🇦🇺' }
];

var FALLBACK = {
  usd: 0.00359, aed: 0.01319, sar: 0.01347,
  gbp: 0.00283, eur: 0.00330, cny: 0.02607,
  cad: 0.00490, aud: 0.00553
};

function fetchRates() {
  // Primary: fawazahmed0 currency API via jsdelivr CDN
  var url = 'https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/pkr.json';

  fetch(url)
    .then(function(r) {
      if (!r.ok) throw new Error('fail');
      return r.json();
    })
    .then(function(d) {
      if (d && d.pkr) {
        CURRENCY_RATES = d.pkr;
        updateDisplay();
      } else {
        throw new Error('no data');
      }
    })
    .catch(function() {
      // Fallback API
      fetch('https://latest.currency-api.pages.dev/v1/currencies/pkr.json')
        .then(function(r) { return r.json(); })
        .then(function(d) {
          if (d && d.pkr) {
            CURRENCY_RATES = d.pkr;
          } else {
            CURRENCY_RATES = FALLBACK;
          }
          updateDisplay();
        })
        .catch(function() {
          CURRENCY_RATES = FALLBACK;
          updateDisplay();
          var note = document.getElementById('currency-note');
          if (note) note.style.display = 'block';
        });
    });
}

function updateDisplay() {
  var amountEl = document.getElementById('currency-amount');
  var ratesEl  = document.getElementById('currency-rates');
  if (!ratesEl) return;

  var amount = parseFloat(amountEl ? amountEl.value : 1000) || 1000;
  var html = '';

  for (var i = 0; i < CURRENCY_LIST.length; i++) {
    var cur  = CURRENCY_LIST[i];
    var rate = CURRENCY_RATES[cur.code];
    if (!rate) continue;
    var converted = (amount * rate).toFixed(2);

    html +=
      '<div class="cur-row">' +
        '<span class="cur-flag">' + cur.flag + '</span>' +
        '<span class="cur-name">' + cur.name + '</span>' +
        '<span class="cur-code">' + cur.label + '</span>' +
        '<span class="cur-val">' + converted + '</span>' +
      '</div>';
  }
  ratesEl.innerHTML = html || '<p style="color:#aaa;font-size:13px;">Loading rates...</p>';
}

function buildCurrencySection() {
  var input = document.getElementById('currency-amount');
  if (input) {
    input.addEventListener('input', function() {
      if (Object.keys(CURRENCY_RATES).length > 0) updateDisplay();
    });
  }
  fetchRates();
  setInterval(fetchRates, 600000);
}

document.addEventListener('DOMContentLoaded', buildCurrencySection);