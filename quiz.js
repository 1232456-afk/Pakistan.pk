// ============================================================
//  PAKISTAN APP — quiz.js
//  Interactive Pakistan Quiz
// ============================================================

var QUIZ_QUESTIONS = [
  {
    q:  'Pakistan ka national animal kya hai?',
    opts: ['Snow Leopard', 'Markhor', 'Lion', 'Tiger'],
    ans: 1
  },
  {
    q:  'Pakistan ki capital city kaunsi hai?',
    opts: ['Karachi', 'Lahore', 'Islamabad', 'Peshawar'],
    ans: 2
  },
  {
    q:  'Pakistan ki azadi kab hui thi?',
    opts: ['14 August 1947', '23 March 1956', '15 August 1947', '14 August 1940'],
    ans: 0
  },
  {
    q:  'Pakistan ka national flower kaunsa hai?',
    opts: ['Rose', 'Tulip', 'Jasmine (Chambeli)', 'Sunflower'],
    ans: 2
  },
  {
    q:  'Duniya ki doosri sab se unchi choti K2 kahan hai?',
    opts: ['Balochistan', 'KPK', 'Gilgit-Baltistan', 'Punjab'],
    ans: 2
  },
  {
    q:  'Pakistan ka quomi khel kaunsa hai?',
    opts: ['Cricket', 'Hockey', 'Kabaddi', 'Squash'],
    ans: 1
  },
  {
    q:  'Pakistan ke pehle Prime Minister kaun the?',
    opts: ['Ayub Khan', 'Zulfikar Ali Bhutto', 'Liaquat Ali Khan', 'Muhammad Ali Jinnah'],
    ans: 2
  },
  {
    q:  'Pakistan nuclear power kab bana?',
    opts: ['1990', '1998', '2000', '1985'],
    ans: 1
  },
  {
    q:  'Duniya ki sabse badi salt mine kahan hai?',
    opts: ['Quetta', 'Khewra', 'Lahore', 'Multan'],
    ans: 1
  },
  {
    q:  'Pakistan ka sabse bara shehar kaunsa hai?',
    opts: ['Islamabad', 'Lahore', 'Karachi', 'Faisalabad'],
    ans: 2
  },
  {
    q:  'Allama Iqbal ka paida hone ka din Pakistan mein kaunsa national din hai?',
    opts: ['9 November', '23 March', '14 August', '25 December'],
    ans: 0
  },
  {
    q:  'Pakistan ka pehla Nobel Prize winner kaun tha?',
    opts: ['Imran Khan', 'Dr. Abdus Salam', 'Malala Yousafzai', 'Dr. AQ Khan'],
    ans: 1
  },
  {
    q:  'Pakistan mein kitne provinces hain?',
    opts: ['3', '5', '4', '6'],
    ans: 2
  },
  {
    q:  'Pakistan ki sab se lambi darya kaunsi hai?',
    opts: ['Jhelum', 'Chenab', 'Ravi', 'Indus (Sindh)'],
    ans: 3
  },
  {
    q:  'Quaid-e-Azam Muhammad Ali Jinnah ka paida hone ka din kab hai?',
    opts: ['14 August', '25 December', '23 March', '9 November'],
    ans: 1
  }
];

var quizState = {
  current:  0,
  score:    0,
  answered: false,
  shuffled: []
};

function shuffleArray(arr) {
  var a = arr.slice();
  for (var i = a.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var tmp = a[i]; a[i] = a[j]; a[j] = tmp;
  }
  return a;
}

function renderQuiz() {
  var container = document.getElementById('quiz-container');
  if (!container) return;

  var q   = quizState.shuffled[quizState.current];
  var num = quizState.current + 1;
  var tot = quizState.shuffled.length;

  var optsHtml = '';
  for (var i = 0; i < q.opts.length; i++) {
    optsHtml +=
      '<button class="quiz-opt" data-idx="' + i + '">' +
        '<span class="quiz-opt-letter">' + String.fromCharCode(65 + i) + '</span>' +
        q.opts[i] +
      '</button>';
  }

  container.innerHTML =
    '<div class="quiz-progress">' +
      '<div class="quiz-prog-bar"><div class="quiz-prog-fill" style="width:' + ((num-1)/tot*100) + '%"></div></div>' +
      '<span>Question ' + num + ' of ' + tot + '</span>' +
      '<span class="quiz-score-live">Score: ' + quizState.score + '</span>' +
    '</div>' +
    '<div class="quiz-question">' + q.q + '</div>' +
    '<div class="quiz-options">' + optsHtml + '</div>' +
    '<div class="quiz-feedback" id="quiz-feedback"></div>';

  // Attach events
  var btns = container.querySelectorAll('.quiz-opt');
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', handleAnswer);
  }
}

function handleAnswer(e) {
  if (quizState.answered) return;
  quizState.answered = true;

  var btn     = e.currentTarget;
  var chosen  = parseInt(btn.getAttribute('data-idx'));
  var q       = quizState.shuffled[quizState.current];
  var correct = q.ans;
  var feedback= document.getElementById('quiz-feedback');
  var btns    = document.querySelectorAll('.quiz-opt');

  // Highlight correct and wrong
  for (var i = 0; i < btns.length; i++) {
    btns[i].disabled = true;
    if (parseInt(btns[i].getAttribute('data-idx')) === correct) {
      btns[i].classList.add('quiz-correct');
    }
  }

  if (chosen === correct) {
    quizState.score++;
    btn.classList.add('quiz-correct');
    feedback.innerHTML = '<span class="quiz-right">✅ Sahi jawab!</span>';
  } else {
    btn.classList.add('quiz-wrong');
    feedback.innerHTML = '<span class="quiz-wrong-msg">❌ Galat! Sahi jawab: <strong>' + q.opts[correct] + '</strong></span>';
  }

  // Next button
  setTimeout(function () {
    quizState.current++;
    quizState.answered = false;

    if (quizState.current < quizState.shuffled.length) {
      renderQuiz();
    } else {
      showResult();
    }
  }, 1800);
}

function showResult() {
  var container = document.getElementById('quiz-container');
  if (!container) return;

  var tot    = quizState.shuffled.length;
  var score  = quizState.score;
  var pct    = Math.round((score / tot) * 100);
  var msg    = pct >= 80 ? '🏆 Shabaash! Pakistan ka sachcha fan!' :
               pct >= 50 ? '👍 Acha kiya! Aur parho Pakistan ke baare mein.' :
                           '📚 Koi baat nahi — phir koshish karo!';

  container.innerHTML =
    '<div class="quiz-result">' +
      '<div class="quiz-result-icon">' + (pct >= 80 ? '🏆' : pct >= 50 ? '🌟' : '📚') + '</div>' +
      '<div class="quiz-result-score">' + score + ' / ' + tot + '</div>' +
      '<div class="quiz-result-pct">' + pct + '%</div>' +
      '<div class="quiz-result-msg">' + msg + '</div>' +
      '<button class="quiz-restart" onclick="restartQuiz()">Dobara Khelna 🔄</button>' +
    '</div>';
}

function restartQuiz() {
  quizState.current  = 0;
  quizState.score    = 0;
  quizState.answered = false;
  quizState.shuffled = shuffleArray(QUIZ_QUESTIONS);
  renderQuiz();
}

function buildQuizSection() {
  var section = document.getElementById('quiz-section');
  if (!section) return;
  quizState.shuffled = shuffleArray(QUIZ_QUESTIONS);
  renderQuiz();
}

document.addEventListener('DOMContentLoaded', buildQuizSection);