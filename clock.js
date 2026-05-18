// ============================================================
//  PAKISTAN APP — clock.js
//  Pakistan Standard Time (PKT UTC+5) real-time clock
// ============================================================

function startPakistanClock() {
  var clockEl = document.getElementById('pk-clock');
  var dateEl  = document.getElementById('pk-date');
  if (!clockEl) return;

  var days   = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];

  function update() {
    // Pakistan UTC+5
    var now = new Date();
    var utc = now.getTime() + (now.getTimezoneOffset() * 60000);
    var pkt = new Date(utc + (5 * 3600000));

    var h  = pkt.getHours();
    var m  = pkt.getMinutes();
    var s  = pkt.getSeconds();
    var ampm = h >= 12 ? 'PM' : 'AM';
    h = h % 12 || 12;

    var hh = h < 10 ? '0'+h : h;
    var mm = m < 10 ? '0'+m : m;
    var ss = s < 10 ? '0'+s : s;

    clockEl.textContent = hh + ':' + mm + ':' + ss + ' ' + ampm;

    if (dateEl) {
      dateEl.textContent = days[pkt.getDay()] + ', ' +
        pkt.getDate() + ' ' + months[pkt.getMonth()] + ' ' + pkt.getFullYear();
    }
  }

  update();
  setInterval(update, 1000);
}

document.addEventListener('DOMContentLoaded', startPakistanClock);