const quotes = [
  {
    quote: "Be yourself; everyone else is already taken.",
    author: "Oscar Wilde",
  },
  {
    quote:
      "Your time is limited, so don’t waste it living someone else’s life.",
    author: "Steve Jobs",
  },
  {
    quote: "Be the change that you wish to see in the world.",
    author: "Mahatma Gandhi",
  },
  {
    quote: "you don't find the happy life. You make it",
    author: "camilla eyring kimball",
  },
  {
    quote:
      "Life is like riding a bicycle. To keep your balance, You must kepp moving",
    author: "Albert Einstein",
  },
  {
    quote: "Try to be a rainbow in someone's cloud",
    author: "Maya Angelou",
  },
  {
    quote: "You must expect great things of yourself before you can do them.",
    author: "Michael Jordan",
  },
  {
    quote:
      "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.",
    author: "Thomas A. Edison",
  },
  {
    quote:
      "Obstacles are necessary for success because in selling, as in all careers of importance, victory comes only after many struggles and countless defeats.",
    author: "Og Mandino",
  },
  {
    quote: "The only thing we have to fear is fear itself.",
    author: "Franklin D. Roosevelt",
  },
];

const quote = document.querySelector("#quote p:first-child");
const author = document.querySelector("#quote p:last-child");

function todayQutoes() {
  let i = Math.floor(Math.random() * quotes.length);

  quote.innerText = quotes[i].quote;
  author.innerText = quotes[i].author;
}

todayQutoes();
setInterval(todayQutoes, 15000);
