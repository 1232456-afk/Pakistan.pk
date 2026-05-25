// ============================================================
// PAKISTAN CLOCK + 100% AUTOMATIC LIFE-TIME HIJRI DATE
// ============================================================

function startPakistanClock() {
  const clockEl = document.getElementById('pk-clock');
  const dateEl  = document.getElementById('pk-date');

  if (!clockEl) return;

  // =========================================================
  // AUTOMATIC & ACCURATE HIJRI CONVERTER (NO REFERENCE DATE NEEDED)
  // =========================================================
  function getAutomaticHijri(gDate) {
    // JavaScript built-in Islamic calendar (Umm al-Qura) jo khud auto-update hota hai
    const formatter = new Intl.DateTimeFormat('en-TN-u-ca-islamic-umalqura', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      timeZone: 'Asia/Karachi'
    });

    const parts = formatter.formatToParts(gDate);
    let day = '';
    let monthEn = '';
    let year = '';

    parts.forEach(part => {
      if (part.type === 'day') day = part.value;
      if (part.type === 'month') monthEn = part.value;
      if (part.type === 'year') year = part.value;
    });

    // English month names ko aap ke Urdu design ke mutabiq map karne ke liye
    let hMonthUrdu = 'ذوالحجہ'; // Default fallback
    
    if (monthEn.includes('Muharram')) hMonthUrdu = 'محرم';
    else if (monthEn.includes('Safar')) hMonthUrdu = 'صفر';
    else if (monthEn.includes('Rabi') && monthEn.includes('1')) hMonthUrdu = 'ربیع الاول';
    else if (monthEn.includes('Rabi') && monthEn.includes('2')) hMonthUrdu = 'ربیع الثانی';
    else if (monthEn.includes('Jumada') && monthEn.includes('1')) hMonthUrdu = 'جمادی الاول';
    else if (monthEn.includes('Jumada') && monthEn.includes('2')) hMonthUrdu = 'جمادی الثانی';
    else if (monthEn.includes('Rajab')) hMonthUrdu = 'رجب';
    else if (monthEn.includes('Sha')) hMonthUrdu = 'شعبان';
    else if (monthEn.includes('Ramadan')) hMonthUrdu = 'رمضان';
    else if (monthEn.includes('Shawwal')) hMonthUrdu = 'شوال';
    else if (monthEn.includes('Qi') || monthEn.includes('Qadah')) hMonthUrdu = 'ذوالقعدہ';
    else if (monthEn.includes('Hijjah') || monthEn.includes('Zil')) hMonthUrdu = 'ذوالحجہ';

    return {
      day: parseInt(day, 10),
      month: hMonthUrdu,
      year: year
    };
  }

  // =========================================================
  // UPDATE CLOCK & DATE EVERY SECOND
  // =========================================================
  function updateClock() {
    const now = new Date();

    // Current Time in Pakistan Timezone
    const pkt = new Date(
      now.toLocaleString('en-US', { timeZone: 'Asia/Karachi' })
    );

    // 1. TIME CALCULATION (HH:MM:SS AM/PM)
    let h = pkt.getHours();
    let m = pkt.getMinutes();
    let s = pkt.getSeconds();

    const ampm = h >= 12 ? 'PM' : 'AM';
    h = h % 12 || 12;

    const hh = h < 10 ? '0' + h : h;
    const mm = m < 10 ? '0' + m : m;
    const ss = s < 10 ? '0' + s : s;

    clockEl.textContent = `${hh}:${mm}:${ss} ${ampm}`;

    // 2. GREGORIAN DATE (English Date)
    const gregorian = pkt.toLocaleDateString('en-PK', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });

    // 3. AUTOMATIC HIJRI DATE
    const hijri = getAutomaticHijri(pkt);

    // 4. DISPLAY ON SCREEN
    if (dateEl) {
      dateEl.innerHTML = `
        <span class="pk-date-greg">
          ${gregorian}
        </span>

        <span class="pk-date-sep"> | </span>

        <span class="pk-date-hijri">
          ☪ ${hijri.day} ${hijri.month} ${hijri.year} ہجری
        </span>
      `;
    }
  }

  // Pehli baar फौरन chalane ke liye
  updateClock();
  
  // Har 1 second baad clock aur date refresh karne ke liye
  setInterval(updateClock, 1000);
}

// DOM load hote hi clock shuru karein
document.addEventListener('DOMContentLoaded', startPakistanClock);
