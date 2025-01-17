// Variables

let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

// Quotes

const quotes = [
    {quote: "Stay Hungry. Stay Foolish.", person: "Steve Jobs"},
    {quote: "Good Artists Copy, Great Artists Steal.", person: "Pablo Picasso"},
    {quote: "Argue with idiots, and you become an idiot.", person: "Paul Graham"},
    {quote: "Be yourself; everyone else is already taken.", person: "Oscar Wilde"},
    {quote: "Simplicity is the ultimate sophistication.", person: "Leonardo Da Vinci"}
];

// Event Listener

btn.addEventListener('click', function() {
    let random = Math.floor(Math.random() * quotes.length);
    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
})