import { quotes } from '../quotes.js';
import { createOutput } from '../utils.js'; // helper function to create DOM elements

export function quoteCommand() {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    const [quoteText, quoteAuthor] = randomQuote.split(' - ');

    const quoteDiv = document.createElement('div');
    quoteDiv.className = 'quote';
    quoteDiv.appendChild(createOutput(`"${quoteText}"`));

    const authorDiv = document.createElement('div');
    authorDiv.className = 'quote-author';
    authorDiv.textContent = `- ${quoteAuthor}`;
    quoteDiv.appendChild(authorDiv);

    const response = document.createElement('div');
    response.className = 'command-response';
    response.appendChild(quoteDiv);
    response.appendChild(createOutput('Type quote again for another quote'));
    return response;
}
