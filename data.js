// ============================================================
//  PAKISTAN – Complete Data File
//  data.js
// ============================================================

const PAKISTAN = {

  // ── BASIC FACTS ────────────────────────────────────────────
  basic: {
    officialName: "Islamic Republic of Pakistan",
    shortName: "Pakistan",
    meaning: "Land of the Pure (Pak = Pure, Stan = Land)",
    capital: "Islamabad",
    largestCity: "Karachi",
    founded: "14 August 1947",
    islamicDate: "27 Ramadan 1366 AH",
    area: "881,913 km²",
    areaMiles: "340,509 sq mi",
    areaRank: "33rd largest country in the world",
    population: "241.5 Million (2023 estimate)",
    populationRank: "5th most populous country",
    currency: "Pakistani Rupee (PKR ₨)",
    callingCode: "+92",
    internetTLD: ".pk",
    drivingSide: "Left",
    timeZone: "PKT (UTC+5)",
    nationalLanguage: "Urdu",
    officialLanguage: "Urdu & English",
    government: "Federal Parliamentary Constitutional Republic",
    religion: "Islam (State Religion)",
    continent: "Asia",
    region: "South Asia",
    borders: ["India (East)", "Afghanistan (West & North)", "Iran (Southwest)", "China (Northeast)"],
    coastline: "1,046 km (Arabian Sea & Gulf of Oman)",
    nationalAnimal: "Markhor",
    nationalBird: "Chukar Partridge",
    nationalTree: "Deodar Cedar",
    nationalFlower: "Jasmine (Chambeli)",
    nationalFruit: "Mango",
    nationalSport: "Field Hockey",
    nationalMotto: "Iman, Ittehad, Tanzeem (Faith, Unity, Discipline)",
    anthem: "Qaumi Tarana",
    flagColors: "Dark green and white",
    flagSymbols: "White crescent moon and five-pointed star on green",
  },

  // ── CURRENT LEADERSHIP ─────────────────────────────────────
  leadership: {
    president: {
      name: "Asif Ali Zardari",
      since: "March 10, 2024",
      party: "Pakistan Peoples Party (PPP)",
      term: "2nd term",
      born: "July 26, 1955",
      birthplace: "Nawabshah, Sindh"
    },
    primeMinister: {
      name: "Shehbaz Sharif",
      since: "March 4, 2024",
      party: "Pakistan Muslim League-Nawaz (PML-N)",
      term: "2nd term",
      born: "September 23, 1951",
      birthplace: "Lahore, Punjab"
    },
    chiefJustice: {
      name: "Yahya Afridi",
      since: "October 2024",
      court: "Supreme Court of Pakistan"
    },
    armyChief: {
      name: "General Syed Asim Munir",
      since: "November 29, 2022",
      rank: "Field Marshal (since 2024)"
    },
    chairman_senate: {
      name: "Yusuf Raza Gilani",
      since: "March 2024"
    },
    speaker_na: {
      name: "Sardar Ayaz Sadiq",
      since: "March 2024"
    }
  },

 previousLeaders: [
  // --- PRIME MINISTERS (PM) ---
  { role: "PM", name: "Liaquat Ali Khan", period: "1947–1951", party: "Muslim League", note: "1st PM of Pakistan" },
  { role: "PM", name: "Sir Khawaja Nazimuddin", period: "1951–1953", party: "Muslim League" },
  { role: "PM", name: "Mohammad Ali Bogra", period: "1953–1955", party: "Muslim League" },
  { role: "PM", name: "Chaudhry Mohammad Ali", period: "1955–1956", party: "Muslim League" },
  { role: "PM", name: "Huseyn Shaheed Suhrawardy", period: "1956–1957", party: "Awami League" },
  { role: "PM", name: "Ibrahim Ismail Chundrigar", period: "1957", party: "Muslim League" },
  { role: "PM", name: "Sir Feroz Khan Noon", period: "1957–1958", party: "Republican Party" },
  { role: "PM", name: "Nurul Amin", period: "1971", party: "Pakistan Democratic Party" },
  { role: "PM", name: "Zulfikar Ali Bhutto", period: "1973–1977", party: "PPP" },
  { role: "PM", name: "Muhammad Khan Junejo", period: "1985–1988", party: "Independent / PML" },
  { role: "PM", name: "Benazir Bhutto (1st Term)", period: "1988–1990", party: "PPP", note: "First female PM of Muslim world" },
  { role: "PM", name: "Ghulam Mustafa Jatoi", period: "1990", party: "National People's Party", note: "Caretaker" },
  { role: "PM", name: "Nawaz Sharif (1st Term)", period: "1990–1993", party: "PML-N" },
  { role: "PM", name: "Balakh Sher Mazari", period: "1993", party: "Independent", note: "Caretaker" },
  { role: "PM", name: "Nawaz Sharif (1st Term - Restored)", period: "1993", party: "PML-N" },
  { role: "PM", name: "Moeenuddin Ahmad Qureshi", period: "1993", party: "Independent", note: "Caretaker" },
  { role: "PM", name: "Benazir Bhutto (2nd Term)", period: "1993–1996", party: "PPP" },
  { role: "PM", name: "Malik Meraj Khalid", period: "1996–1997", party: "Independent", note: "Caretaker" },
  { role: "PM", name: "Nawaz Sharif (2nd Term)", period: "1997–1999", party: "PML-N" },
  { role: "PM", name: "Zafarullah Khan Jamali", period: "2002–2004", party: "PML-Q" },
  { role: "PM", name: "Chaudhry Shujaat Hussain", period: "2004", party: "PML-Q" },
  { role: "PM", name: "Shaukat Aziz", period: "2004–2007", party: "PML-Q" },
  { role: "PM", name: "Muhammad Mian Soomro", period: "2007–2008", party: "PML-Q", note: "Caretaker" },
  { role: "PM", name: "Yusuf Raza Gilani", period: "2008–2012", party: "PPP" },
  { role: "PM", name: "Raja Pervaiz Ashraf", period: "2012–2013", party: "PPP" },
  { role: "PM", name: "Mir Hazar Khan Khoso", period: "2013", party: "Independent", note: "Caretaker" },
  { role: "PM", name: "Nawaz Sharif (3rd Term)", period: "2013–2017", party: "PML-N" },
  { role: "PM", name: "Shahid Khaqan Abbasi", period: "2017–2018", party: "PML-N" },
  { role: "PM", name: "Nasirul Mulk", period: "2018", party: "Independent", note: "Caretaker" },
  { role: "PM", name: "Imran Khan", period: "2018–2022", party: "PTI" },
  { role: "PM", name: "Shehbaz Sharif (1st Term)", period: "2022–2023", party: "PML-N" },
  { role: "PM", name: "Anwaar-ul-Haq Kakar", period: "2023–2024", party: "Independent", note: "Caretaker" },
  { role: "PM", name: "Shehbaz Sharif (2nd Term)", period: "2024–Present", party: "PML-N" },

  // --- PRESIDENTS ---
  { role: "President", name: "Iskander Mirza", period: "1956–1958", party: "Republican Party", note: "1st President of Pakistan" },
  { role: "President", name: "Ayub Khan", period: "1958–1969", party: "Military / Convention League" },
  { role: "President", name: "Yahya Khan", period: "1969–1971", party: "Military" },
  { role: "President", name: "Zulfikar Ali Bhutto", period: "1971–1973", party: "PPP" },
  { role: "President", name: "Fazal Ilahi Chaudhry", period: "1973–1978", party: "PPP" },
  { role: "President", name: "Muhammad Zia-ul-Haq", period: "1978–1988", party: "Military" },
  { role: "President", name: "Ghulam Ishaq Khan", period: "1988–1993", party: "Independent" },
  { role: "President", name: "Wasim Sajjad (1st Term)", period: "1993", party: "PML-N", note: "Acting" },
  { role: "President", name: "Farooq Leghari", period: "1993–1997", party: "PPP" },
  { role: "President", name: "Wasim Sajjad (2nd Term)", period: "1997–1998", party: "PML-N", note: "Acting" },
  { role: "President", name: "Muhammad Rafiq Tarar", period: "1998–2001", party: "PML-N" },
  { role: "President", name: "Pervez Musharraf", period: "2001–2008", party: "Military / PML-Q" },
  { role: "President", name: "Muhammad Mian Soomro", period: "2008", party: "PML-Q", note: "Acting" },
  { role: "President", name: "Asif Ali Zardari (1st Term)", period: "2008–2013", party: "PPP" },
  { role: "President", name: "Mamnoon Hussain", period: "2013–2018", party: "PML-N" },
  { role: "President", name: "Arif Alvi", period: "2018–2024", party: "PTI" },
  { role: "President", name: "Asif Ali Zardari (2nd Term)", period: "2024–Present", party: "PPP" }
],
  // ── FAMOUS PERSONALITIES & FOUNDERS ───────────────────────
  famousPersonalities: [
    {
      name: "Muhammad Ali Jinnah",
      title: "Quaid-e-Azam (Great Leader)",
      born: "December 25, 1876",
      died: "September 11, 1948",
      role: "Founder & 1st Governor-General of Pakistan",
      contribution: "Led the Pakistan Movement, negotiated independence from British India, created a separate Muslim homeland. Known as Baba-e-Qaum (Father of the Nation).",
      emoji: "🎩"
    },
    {
      name: "Allama Muhammad Iqbal",
      title: "Poet of the East / Mufakkir-e-Pakistan",
      born: "November 9, 1877",
      died: "April 21, 1938",
      role: "Philosopher, Poet, Visionary",
      contribution: "Gave the concept of a separate Muslim state (Two-Nation Theory). His 1930 Allahabad Address first proposed a Muslim homeland. Author of 'Saare Jahan Se Achha' and 'Lab Pe Aati Hai Dua'.",
      emoji: "📜"
    },
    {
      name: "Liaquat Ali Khan",
      title: "Quaid-e-Millat (Leader of the Nation)",
      born: "October 1, 1895",
      died: "October 16, 1951",
      role: "1st Prime Minister of Pakistan",
      contribution: "Pakistan's first Prime Minister, managed early governance, drafted Objectives Resolution 1949 which became the constitutional foundation. Assassinated in Rawalpindi.",
      emoji: "⚖️"
    },
    {
      name: "Dr. Abdul Qadeer Khan",
      title: "Father of Pakistan's Nuclear Program",
      born: "April 1, 1936",
      died: "October 10, 2021",
      role: "Nuclear Scientist & National Hero",
      contribution: "Led Pakistan's nuclear weapons program. Pakistan became the world's first Islamic nuclear power in 1998. Received Nishan-e-Imtiaz (twice), Pakistan's highest civilian award.",
      emoji: "⚛️"
    },
    {
      name: "Fatima Jinnah",
      title: "Madar-e-Millat (Mother of the Nation)",
      born: "July 31, 1893",
      died: "July 9, 1967",
      role: "Political Leader & Dentist",
      contribution: "Sister and close aide of Quaid-e-Azam. Fought for women's rights and democratic values. Challenged Ayub Khan's dictatorship in 1965 elections.",
      emoji: "👩"
    },
    {
      name: "Dr. Abdus Salam",
      title: "Nobel Laureate Physicist",
      born: "January 29, 1926",
      died: "November 21, 1996",
      role: "Theoretical Physicist",
      contribution: "Pakistan's only Nobel Prize winner (Physics, 1979). Co-developed the electroweak unification theory. Founded ICTP in Trieste, Italy to help scientists from developing nations.",
      emoji: "🔬"
    },
    {
      name: "Benazir Bhutto",
      title: "Iron Lady of Pakistan",
      born: "June 21, 1953",
      died: "December 27, 2007",
      role: "11th & 13th Prime Minister",
      contribution: "First female Prime Minister of Pakistan and first female head of government in the Muslim world. Served twice as PM (1988–1990, 1993–1996). Assassinated in Rawalpindi.",
      emoji: "🌹"
    },
    {
      name: "Imran Khan",
      title: "Kaptaan / Naya Pakistan",
      born: "October 5, 1952",
      role: "Cricketer & 22nd Prime Minister",
      contribution: "Led Pakistan to 1992 Cricket World Cup victory. Founded Shaukat Khanum Cancer Hospital. Founded PTI party in 1996. Served as PM 2018–2022.",
      emoji: "🏏"
    },
    {
      name: "Jahangir Khan",
      title: "Greatest Squash Player",
      born: "December 10, 1963",
      role: "Squash Champion",
      contribution: "Won World Open squash championship 6 times. Held an unbeaten 555-match streak for 5 years and 7 months. Widely considered the greatest squash player of all time.",
      emoji: "🏆"
    },
    {
      name: "Arfa Karim",
      title: "World's Youngest Microsoft Certified Professional",
      born: "February 2, 1995",
      role: "Child Prodigy / IT Genius",
      contribution: "At age 9, became the world's youngest Microsoft Certified Professional (MCP) in 2004. Received President's Pride of Performance Award. Inspired millions of Pakistani children in IT.",
      emoji: "💻"
    },
    {
      name: "Malala Yousafzai",
      title: "Nobel Peace Prize Laureate",
      born: "July 12, 1997",
      role: "Education Activist",
      contribution: "Youngest Nobel Prize laureate (Peace, 2014). Survived Taliban assassination attempt at 15. Global advocate for girls' education. Founded Malala Fund.",
      emoji: "📚"
    },
    {
      name: "Nawab of Bahawalpur – Sir Sadiq Muhammad Khan",
      title: "Ruler who joined Pakistan",
      born: "1904",
      died: "1966",
      role: "Ruler of Bahawalpur State",
      contribution: "Voluntarily acceded his princely state of Bahawalpur to Pakistan in 1947, bringing a prosperous and strategic region into the new nation.",
      emoji: "👑"
    }
  ],

  // ── PROVINCES ──────────────────────────────────────────────
  provinces: [
    {
      name: "Punjab",
      capital: "Lahore",
      area: "205,344 km²",
      population: "~120 Million",
      share: 50,
      emoji: "🌾",
      highlight: "Most populous province, breadbasket of Pakistan",
      majorCities: ["Lahore", "Faisalabad", "Rawalpindi", "Gujranwala", "Multan"]
    },
    {
      name: "Sindh",
      capital: "Karachi",
      area: "140,914 km²",
      population: "~55 Million",
      share: 23,
      emoji: "🌊",
      highlight: "Financial capital, Indus Valley civilization",
      majorCities: ["Karachi", "Hyderabad", "Sukkur", "Larkana", "Nawabshah"]
    },
    {
      name: "Khyber Pakhtunkhwa",
      capital: "Peshawar",
      area: "101,741 km²",
      population: "~40 Million",
      share: 17,
      emoji: "⛰️",
      highlight: "Gateway to Central Asia, Pashtun culture",
      majorCities: ["Peshawar", "Abbottabad", "Swat", "Mardan", "Kohat"]
    },
    {
      name: "Balochistan",
      capital: "Quetta",
      area: "347,190 km²",
      population: "~15 Million",
      share: 6,
      emoji: "🏔️",
      highlight: "Largest by area, rich in natural resources",
      majorCities: ["Quetta", "Gwadar", "Turbat", "Khuzdar", "Chaman"]
    },
    {
      name: "Gilgit-Baltistan",
      capital: "Gilgit",
      area: "72,971 km²",
      population: "~2.4 Million",
      share: 1,
      emoji: "❄️",
      highlight: "K2 mountain, highest peaks on Earth",
      majorCities: ["Gilgit", "Skardu", "Hunza", "Chilas", "Ghanche"]
    },
    {
      name: "Azad Kashmir",
      capital: "Muzaffarabad",
      area: "13,297 km²",
      population: "~5.5 Million",
      share: 2,
      emoji: "🏡",
      highlight: "Autonomous territory, scenic valleys",
      majorCities: ["Muzaffarabad", "Mirpur", "Rawalakot", "Bagh", "Kotli"]
    }
  ],

  // ── LANGUAGES ─────────────────────────────────────────────
  languages: [
    { name: "Punjabi", speakers: "~44%", tag: "Regional", color: "#c8973a" },
    { name: "Pashto", speakers: "~15%", tag: "Regional", color: "#534ab7" },
    { name: "Sindhi", speakers: "~14%", tag: "Regional", color: "#993c1d" },
    { name: "Saraiki", speakers: "~10%", tag: "Regional", color: "#3b6d11" },
    { name: "Urdu", speakers: "~7%", tag: "National", color: "#0b6e4f" },
    { name: "Balochi", speakers: "~4%", tag: "Regional", color: "#993556" },
    { name: "Hindko", speakers: "~2%", tag: "Regional", color: "#5f5e5a" },
    { name: "English", speakers: "Elite/Official", tag: "Official", color: "#1a3a8f" },
  ],

  // ── RELIGION ──────────────────────────────────────────────
  religion: [
    { name: "Islam", percent: 96.5, color: "#0b6e4f" },
    { name: "Hinduism", percent: 2.1, color: "#c8a84b" },
    { name: "Christianity", percent: 1.1, color: "#1a3a8f" },
    { name: "Others (Sikhism, Ahmadi, etc.)", percent: 0.3, color: "#888" }
  ],

  // ── ECONOMY ───────────────────────────────────────────────
  economy: {
    gdpNominal: "$338 Billion (2024 est.)",
    gdpPPP: "$1.4 Trillion (2024 est.)",
    gdpPerCapita: "$1,400 (nominal)",
    gdpGrowth: "~3% (2024)",
    inflation: "~12% (2024, declining from 38% peak in 2023)",
    mainSectors: ["Agriculture (Wheat, Cotton, Rice, Sugarcane)", "Textiles (Largest export sector)", "IT & Services (Fast growing)", "Construction & Real Estate", "Energy (CPEC projects)"],
    majorExports: ["Textiles & Garments", "Rice", "Sports Goods", "Leather goods", "Surgical Instruments", "Software Services"],
    majorImports: ["Petroleum", "Machinery", "Chemicals", "Iron & Steel", "Palm Oil"],
    tradePartners: ["China (largest)", "UAE", "USA", "UK", "Saudi Arabia"],
    stockExchange: "Pakistan Stock Exchange (PSX), Karachi",
    remittances: "~$27 Billion/year (major foreign exchange source)"
  },

  // ── GEOGRAPHY ─────────────────────────────────────────────
  geography: {
    totalArea: "881,913 km²",
    landArea: "770,880 km²",
    waterArea: "25,220 km²",
    highestPoint: "K2 – 8,611 m (2nd highest in the world)",
    lowestPoint: "Indian Ocean (sea level)",
    majorRivers: ["Indus River (longest)", "Jhelum", "Chenab", "Ravi", "Sutlej", "Kabul River"],
    majorMountains: ["Karakoram Range", "Himalayas", "Hindu Kush", "Sulaiman Range", "Kirthar Range"],
    deserts: ["Thar Desert (Cholistan)", "Thal Desert", "Kharan Desert"],
    famousPlaces: [
      "K2 – 2nd highest mountain on Earth",
      "Mohenjo-daro – 5,000-year-old Indus Valley Civilization ruins",
      "Lahore Fort – UNESCO World Heritage Site",
      "Badshahi Mosque – One of the world's largest mosques",
      "Faisal Mosque – World's largest mosque (was at one point)",
      "Karakoram Highway – Highest paved road in the world",
      "Hunza Valley – Paradise on Earth",
      "Deosai Plains – 2nd highest plateau in the world",
      "Makran Coastal Highway – Scenic coastal route",
      "Shalimar Gardens – UNESCO World Heritage Site"
    ],
    climate: "Varies from tropical in south to alpine in north. Monsoon season: July–September.",
    naturalResources: ["Natural Gas", "Petroleum", "Coal", "Iron Ore", "Copper", "Salt (world's 2nd largest salt mine – Khewra)"]
  },

  // ── MILITARY ──────────────────────────────────────────────
  military: {
    branches: ["Pakistan Army", "Pakistan Navy", "Pakistan Air Force"],
    manpower: "~654,000 active personnel",
    nuclearStatus: "Nuclear-armed state (since May 28, 1998 – Youm-e-Takbir)",
    nuclearWarheads: "~170 estimated warheads",
    defenceRank: "9th most powerful military (GFP 2024)",
    notableAchievements: [
      "First Muslim-majority country to develop nuclear weapons",
      "SSG (Special Services Group) – among world's elite special forces",
      "JF-17 Thunder – indigenously co-developed fighter jet with China",
      "Pakistan Navy operates submarines and frigates",
      "Active in UN Peacekeeping missions globally"
    ]
  },

  // ── CULTURE & SPORTS ──────────────────────────────────────
  culture: {
    sports: {
      cricket: "Most popular sport. Won 1992 Cricket World Cup.",
      squash: "Dominated world squash for decades (Jahangir Khan, Jansher Khan)",
      hockey: "Won 4 Hockey World Cups (1971, 1978, 1982, 1994)",
      kabaddi: "Traditional sport, world champions multiple times"
    },
    cuisine: ["Biryani", "Nihari", "Karahi", "Haleem", "Seekh Kabab", "Chapli Kabab", "Sajji", "Paya", "Lassi", "Rooh Afza"],
    festivals: ["Eid ul-Fitr", "Eid ul-Adha", "Pakistan Day (March 23)", "Independence Day (Aug 14)", "Basant (Lahore)", "Shandur Polo Festival"],
    musicTraditions: ["Qawwali (Nusrat Fateh Ali Khan)", "Ghazal", "Classical ragas", "Folk music (Bhangra, Sindhi, Balochi)"],
    arts: ["Truck Art (famous worldwide)", "Ajrak (Sindhi textile)", "Phulkari embroidery", "Calligraphy", "Miniature painting"]
  }
};

// Export for use in app.js
if (typeof module !== 'undefined') module.exports = PAKISTAN;
