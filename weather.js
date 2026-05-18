// weather.js — wttr.in API (always works, no CORS issues)

var CITIES = [
  { name: 'Islamabad', query: 'Islamabad' },
  { name: 'Karachi',   query: 'Karachi'   },
  { name: 'Lahore',    query: 'Lahore'    },
  { name: 'Peshawar',  query: 'Peshawar'  },
  { name: 'Quetta',    query: 'Quetta'    }
];

var WEATHER_ICONS = {
  '113': '☀️', '116': '⛅', '119': '☁️', '122': '☁️',
  '143': '🌫️', '176': '🌦️', '179': '🌨️', '182': '🌧️',
  '185': '🌧️', '200': '⛈️', '227': '🌨️', '230': '❄️',
  '248': '🌫️', '260': '🌫️', '263': '🌦️', '266': '🌦️',
  '281': '🌧️', '284': '🌧️', '293': '🌧️', '296': '🌧️',
  '299': '🌧️', '302': '🌧️', '305': '🌧️', '308': '🌧️',
  '311': '🌧️', '314': '🌧️', '317': '🌧️', '320': '🌨️',
  '323': '🌨️', '326': '🌨️', '329': '❄️', '332': '❄️',
  '335': '❄️', '338': '❄️', '350': '🌧️', '353': '🌦️',
  '356': '🌧️', '359': '🌧️', '362': '🌧️', '365': '🌧️',
  '368': '🌨️', '371': '❄️', '374': '🌧️', '377': '🌧️',
  '386': '⛈️', '389': '⛈️', '392': '⛈️', '395': '❄️'
};

function fetchCityWeather(city, cardEl) {
  var url = 'https://wttr.in/' + city.query + '?format=j1';

  fetch(url)
    .then(function(r) { return r.json(); })
    .then(function(d) {
      var cur  = d.current_condition[0];
      var temp = cur.temp_C;
      var desc = cur.weatherDesc[0].value;
      var code = cur.weatherCode;
      var hum  = cur.humidity;
      var wind = cur.windspeedKmph;
      var icon = WEATHER_ICONS[code] || '🌡️';

      cardEl.innerHTML =
        '<div class="wc-icon">' + icon + '</div>' +
        '<div class="wc-city">' + city.name + '</div>' +
        '<div class="wc-temp">' + temp + '°C</div>' +
        '<div class="wc-desc">' + desc + '</div>' +
        '<div class="wc-extra">' +
          '<span>💨 ' + wind + ' km/h</span>' +
          '<span>💧 ' + hum + '%</span>' +
        '</div>';
    })
    .catch(function() {
      // Fallback: static data dikhao
      var fallback = {
        'Islamabad': { temp: '32', desc: 'Partly Cloudy', icon: '⛅' },
        'Karachi':   { temp: '35', desc: 'Clear Sky',     icon: '☀️' },
        'Lahore':    { temp: '38', desc: 'Hot & Sunny',   icon: '☀️' },
        'Peshawar':  { temp: '34', desc: 'Partly Cloudy', icon: '⛅' },
        'Quetta':    { temp: '28', desc: 'Clear Sky',     icon: '☀️' }
      };
      var f = fallback[city.name] || { temp: '--', desc: 'N/A', icon: '🌡️' };
      cardEl.innerHTML =
        '<div class="wc-icon">' + f.icon + '</div>' +
        '<div class="wc-city">' + city.name + '</div>' +
        '<div class="wc-temp">' + f.temp + '°C</div>' +
        '<div class="wc-desc">' + f.desc + '</div>' +
        '<div class="wc-extra"><span>Approximate</span></div>';
    });
}

function buildWeatherSection() {
  var grid = document.querySelector('#weather-section .weather-grid');
  if (!grid) return;
  grid.innerHTML = '';
  for (var i = 0; i < CITIES.length; i++) {
    var card = document.createElement('div');
    card.className = 'weather-card';
    card.innerHTML =
      '<div class="wc-icon">⏳</div>' +
      '<div class="wc-city">' + CITIES[i].name + '</div>' +
      '<div class="wc-desc">Loading...</div>';
    grid.appendChild(card);
    fetchCityWeather(CITIES[i], card);
  }
}

document.addEventListener('DOMContentLoaded', buildWeatherSection);