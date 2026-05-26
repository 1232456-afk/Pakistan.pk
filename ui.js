// ==========================================
// COMPLETE MODERN UI SYSTEM
// DARK MODE + PROGRESS BAR + SCROLL TOP
// MOBILE FIXED VERSION
// ==========================================

// ==========================================
// 1. GLOBAL STYLES
// ==========================================
const style = document.createElement("style");

style.textContent = `

/* =========================================
   DARK MODE
========================================= */
html.dark-theme-active {
  filter: invert(1) hue-rotate(180deg);
}

/* Keep media normal */
html.dark-theme-active img,
html.dark-theme-active svg,
html.dark-theme-active video,
html.dark-theme-active iframe,
html.dark-theme-active .theme-toggle-btn,
html.dark-theme-active .scroll-top-btn {
  filter: invert(1) hue-rotate(180deg);
}

/* =========================================
   SCROLL PROGRESS BAR
========================================= */
.scroll-progress-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  z-index: 99999;
  background: transparent;
}

.scroll-progress-bar {
  width: 0%;
  height: 100%;
  background: linear-gradient(90deg, #00c853, #00e676);
  transition: width 0.2s ease;
}

/* =========================================
   DARK MODE BUTTON
========================================= */
.theme-toggle-btn {
  position: fixed;
  top: 14px;

  /* 3 lines ke RIGHT side */
  right: 14px;

  z-index: 99999;

  height: 30px;
  min-width: 68px;

  padding: 0 10px;

  border: none;
  border-radius: 6px;

  background: #0d6efd;
  color: #fff;

  font-size: 11px;
  font-weight: 600;
  font-family: Arial, sans-serif;

  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  white-space: nowrap;

  box-shadow: 0 2px 8px rgba(0,0,0,0.25);

  transition: 0.25s ease;
}

.theme-toggle-btn:hover {
  background: #0b5ed7;
  transform: translateY(-1px);
}

/* =========================================
   HAMBURGER MENU POSITION
========================================= */

/* 3 lines button ko LEFT side move */
#navbar .nav-toggle,
.drawer-toggle,
header .menu-icon,
[onclick="openDrawer()"] {

  position: fixed !important;

  top: 14px !important;

  right: 92px !important;

  z-index: 99999 !important;
}

/* =========================================
   SCROLL TOP BUTTON
========================================= */
.scroll-top-btn {
  position: fixed;

  right: 18px;
  bottom: 18px;

  width: 44px;
  height: 44px;

  border: none;
  border-radius: 50%;

  background: #16a34a;
  color: white;

  font-size: 18px;

  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  opacity: 0;
  visibility: hidden;

  z-index: 99999;

  box-shadow: 0 4px 12px rgba(0,0,0,0.3);

  transition: 0.3s ease;
}

.scroll-top-btn.show {
  opacity: 1;
  visibility: visible;
}

.scroll-top-btn:hover {
  background: #15803d;
  transform: translateY(-2px);
}

/* =========================================
   MOBILE RESPONSIVE
========================================= */
@media (max-width: 768px) {

  /* Navbar spacing */
  #navbar,
  nav {
    padding-right: 12px !important;
    padding-left: 12px !important;
  }

  /* Dark button smaller */
  .theme-toggle-btn {

    top: 10px;
    right: 10px;

    height: 28px;
    min-width: 60px;

    padding: 0 8px;

    font-size: 10px;

    border-radius: 5px;
  }

  /* Hamburger left side of button */
  #navbar .nav-toggle,
  .drawer-toggle,
  header .menu-icon,
  [onclick="openDrawer()"] {

    top: 10px !important;
    right: 76px !important;
  }

  /* Hero content mobile fix */
  .hero-content,
  .hero,
  #hero {

    width: 100% !important;

    padding-left: 16px !important;
    padding-right: 16px !important;

    overflow-x: hidden;
  }

  /* Large heading fix */
  .hero-content h1,
  .hero h1,
  #hero h1 {

    font-size: 52px !important;
    line-height: 0.95 !important;

    word-break: break-word;
  }

  /* Paragraph fix */
  .hero-content p,
  .hero p,
  #hero p {

    font-size: 15px !important;
    line-height: 1.7 !important;
  }

  /* Stats responsive */
  .stats,
  .hero-stats {

    display: grid !important;

    grid-template-columns: repeat(2, 1fr);

    gap: 14px;
  }

  /* Clock box */
  .clock-box,
  .time-box {

    width: 100% !important;
  }

  /* Scroll button */
  .scroll-top-btn {

    width: 40px;
    height: 40px;

    font-size: 16px;

    right: 14px;
    bottom: 14px;
  }

  .scroll-progress-container {
    height: 3px;
  }
}

/* =========================================
   EXTRA SMALL DEVICES
========================================= */
@media (max-width: 480px) {

  .theme-toggle-btn {

    top: 8px;
    right: 8px;

    height: 26px;
    min-width: 56px;

    font-size: 9px;
  }

  #navbar .nav-toggle,
  .drawer-toggle,
  header .menu-icon,
  [onclick="openDrawer()"] {

    top: 8px !important;
    right: 68px !important;
  }

  .hero-content h1,
  .hero h1,
  #hero h1 {

    font-size: 44px !important;
  }

  .hero-content,
  .hero,
  #hero {

    padding-left: 14px !important;
    padding-right: 14px !important;
  }

  .stats,
  .hero-stats {

    grid-template-columns: 1fr 1fr;
  }

  .scroll-top-btn {

    width: 38px;
    height: 38px;

    font-size: 15px;
  }
}

body {
  overflow-x: hidden;
}

`;

document.head.appendChild(style);

// ==========================================
// 2. MAIN APP
// ==========================================
document.addEventListener("DOMContentLoaded", () => {

  // ==========================================
  // PROGRESS BAR
  // ==========================================
  const progressContainer = document.createElement("div");
  progressContainer.className = "scroll-progress-container";

  const progressBar = document.createElement("div");
  progressBar.className = "scroll-progress-bar";

  progressContainer.appendChild(progressBar);
  document.body.appendChild(progressContainer);

  // ==========================================
  // DARK MODE BUTTON
  // ==========================================
  const themeBtn = document.createElement("button");

  themeBtn.className = "theme-toggle-btn";

  themeBtn.innerHTML = "🌙 Dark";

  document.body.appendChild(themeBtn);

  // ==========================================
  // SCROLL TOP BUTTON
  // ==========================================
  const scrollBtn = document.createElement("button");

  scrollBtn.className = "scroll-top-btn";

  scrollBtn.innerHTML = "↑";

  document.body.appendChild(scrollBtn);

  // ==========================================
  // LOAD SAVED THEME
  // ==========================================
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {

    document.documentElement.classList.add("dark-theme-active");

    themeBtn.innerHTML = "☀ Light";
  }

  // ==========================================
  // DARK MODE TOGGLE
  // ==========================================
  themeBtn.addEventListener("click", () => {

    document.documentElement.classList.toggle("dark-theme-active");

    const isDark =
      document.documentElement.classList.contains("dark-theme-active");

    if (isDark) {

      localStorage.setItem("theme", "dark");

      themeBtn.innerHTML = "☀ Light";

    } else {

      localStorage.setItem("theme", "light");

      themeBtn.innerHTML = "🌙 Dark";
    }

  });

  // ==========================================
  // WINDOW SCROLL
  // ==========================================
  window.addEventListener("scroll", () => {

    // Progress Bar
    const scrollTop = window.scrollY;

    const docHeight =
      document.documentElement.scrollHeight - window.innerHeight;

    const progress = (scrollTop / docHeight) * 100;

    progressBar.style.width = progress + "%";

    // Scroll Button
    if (scrollTop > 300) {

      scrollBtn.classList.add("show");

    } else {

      scrollBtn.classList.remove("show");
    }

  });

  // ==========================================
  // SCROLL TO TOP
  // ==========================================
  scrollBtn.addEventListener("click", () => {

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

  });

});