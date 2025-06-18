const tutorials = [
  "what does the this keyword mean?",
  "What is the Constructor OO pattern?",
  "implementing Blockchain Web API",
  "The Test Driven Development Workflow",
  "What is NaN and how Can we Check for it",
  "What is the difference between stopPropagation and preventDefault?",
  "Immutable State and Pure Functions",
  "what is the difference between == and ===?",
  "what is the difference between event capturing and bubbling?",
  "what is JSONP?",
];

function titleCased() {
  return tutorials.map(tutorial => {
    return tutorial
      .split(' ')
      .map(word => {
        // Extract punctuation and clean word for matching
        const punctuation = word.match(/[^a-zA-Z]$/) ? word.slice(-1) : '';
        const cleanWord = word.replace(/[^a-zA-Z]/g, '');
        // Define preserved words with exact casing
        const preservedWords = {
          api: 'API',
          jsonp: 'JSONP',
          oo: 'OO',
          nan: 'NaN',
          stoppropagation: 'StopPropagation',
          preventdefault: 'PreventDefault',
          constructor: 'Constructor'
        };
        // Check if clean word (case-insensitive) is in preservedWords
        const key = cleanWord.toLowerCase();
        if (key in preservedWords) {
          return preservedWords[key] + punctuation;
        }
        // Apply title case to non-preserved words
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      })
      .join(' ');
  });
}