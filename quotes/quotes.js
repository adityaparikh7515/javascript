
    const quotes = [
      { text: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill" },
      { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
      { text: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
      { text: "Dream big and dare to fail.", author: "Norman Vaughan" },
      { text: "Your time is limited, so don't waste it living someone else's life.", author: "Steve Jobs" },
      { text: "Hard work beats talent when talent doesn’t work hard.", author: "Tim Notke" }
    ];

    const quoteEl = document.getElementById('quote');
    const authorEl = document.getElementById('author');
    const countdownEl = document.getElementById('countdown');

    let timeLeft = 5;

    function showRandomQuote() {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      const randomQuote = quotes[randomIndex];

      quoteEl.style.animation = 'none';
      void quoteEl.offsetWidth; // reflow for animation reset
      quoteEl.style.animation = 'slideUp 0.8s ease';

      quoteEl.textContent = randomQuote.text;
      authorEl.textContent = '— ' + randomQuote.author;
    }

    function startTimer() {
      setInterval(() => {
        timeLeft--;
        countdownEl.textContent = timeLeft;

        if (timeLeft === 0) {
          showRandomQuote();
          timeLeft = 5;
        }
      }, 1000);
    }

    // initial load
    showRandomQuote();
    startTimer();
  