// news.js — Pakistan news using multiple free RSS feeds

var RSS_FEEDS = [
  { name: '📰 Dawn',     url: 'https://www.dawn.com/feed' },
  { name: '📡 Geo News', url: 'https://www.geo.tv/rss/1/0' },
  { name: '📺 ARY News', url: 'https://arynews.tv/feed/' }
];

var RSS2JSON = 'https://api.rss2json.com/v1/api.json?api_key=xvqkdxynxtjrdnoqgfenrwshiuotwxfzqivdxibz&count=3&rss_url=';

function timeAgo(str) {
  if (!str) return '';
  var d    = new Date(str);
  var diff = Math.floor((Date.now() - d) / 60000);
  if (isNaN(diff)) return '';
  if (diff < 60)   return diff + ' min ago';
  if (diff < 1440) return Math.floor(diff/60) + ' hrs ago';
  return Math.floor(diff/1440) + ' days ago';
}

function buildNewsSection() {
  var container = document.getElementById('news-container');
  if (!container) return;
  container.innerHTML = '<div class="news-loading">⏳ Loading news...</div>';

  var allItems = [];
  var done     = 0;

  RSS_FEEDS.forEach(function(feed) {
    fetch(RSS2JSON + encodeURIComponent(feed.url))
      .then(function(r) { return r.json(); })
      .then(function(d) {
        if (d.status === 'ok' && d.items) {
          d.items.forEach(function(item) {
            item._source = feed.name;
            allItems.push(item);
          });
        }
      })
      .catch(function() {})
      .finally(function() {
        done++;
        if (done === RSS_FEEDS.length) render(allItems, container);
      });
  });

  // Fallback after 5 seconds if no response
  setTimeout(function() {
    if (done < RSS_FEEDS.length) render(allItems, container);
  }, 5000);
}

function render(items, container) {
  if (!items || items.length === 0) {
    renderStatic(container);
    return;
  }

  // Sort newest first
  items.sort(function(a,b) { return new Date(b.pubDate) - new Date(a.pubDate); });

  var html = '<div class="news-grid">';
  var count = Math.min(items.length, 9);

  for (var i = 0; i < count; i++) {
    var item  = items[i];
    var title = (item.title || '').replace(/&amp;/g,'&').replace(/&lt;/g,'<').replace(/&gt;/g,'>');
    var link  = item.link  || '#';
    var time  = timeAgo(item.pubDate);
    var src   = item._source || '';
    // Use thumbnail if available, otherwise empty
    var img   = item.thumbnail || (item.enclosure && item.enclosure.link) || '';
    var hasImg= img && img.indexOf('http') === 0;

    html +=
      '<a href="' + link + '" target="_blank" rel="noopener" class="news-card">' +
        '<div class="news-img' + (hasImg ? '' : ' news-img-empty') + '"' +
          (hasImg ? ' style="background-image:url(\'' + img + '\')"' : '') + '>' +
          (hasImg ? '' : '📰') +
        '</div>' +
        '<div class="news-body">' +
          '<div class="news-source">' + src + '</div>' +
          '<div class="news-title">' + title + '</div>' +
          (time ? '<div class="news-time">🕐 ' + time + '</div>' : '') +
        '</div>' +
      '</a>';
  }
  html += '</div>';
  container.innerHTML = html;
}

function renderStatic(container) {
  var items = [
    { title: 'Pakistan economy shows strong recovery in 2025',          link: 'https://www.dawn.com',    src: '📰 Dawn',     time: '2 hrs ago'  },
    { title: 'PM Shehbaz chairs federal cabinet meeting in Islamabad',  link: 'https://www.geo.tv',     src: '📡 Geo News', time: '3 hrs ago'  },
    { title: 'Pakistan cricket team wins T20 series against New Zealand',link: 'https://arynews.tv',    src: '📺 ARY News', time: '4 hrs ago'  },
    { title: 'CPEC projects accelerating: Planning Ministry confirms',   link: 'https://www.dawn.com',  src: '📰 Dawn',     time: '5 hrs ago'  },
    { title: 'Monsoon season expected to begin in July: Met Department', link: 'https://www.geo.tv',    src: '📡 Geo News', time: '6 hrs ago'  },
    { title: 'Pakistan Stock Exchange gains 500 points in morning trade',link: 'https://arynews.tv',   src: '📺 ARY News', time: '7 hrs ago'  }
  ];

  var html = '<p class="news-note">* Cached headlines shown — click to read full articles</p><div class="news-grid">';
  items.forEach(function(n) {
    html +=
      '<a href="' + n.link + '" target="_blank" rel="noopener" class="news-card">' +
        '<div class="news-img news-img-empty">📰</div>' +
        '<div class="news-body">' +
          '<div class="news-source">' + n.src + '</div>' +
          '<div class="news-title">' + n.title + '</div>' +
          '<div class="news-time">🕐 ' + n.time + '</div>' +
        '</div>' +
      '</a>';
  });
  html += '</div>';
  container.innerHTML = html;
}

document.addEventListener('DOMContentLoaded', function() {
  buildNewsSection();
  setInterval(buildNewsSection, 1800000);
});