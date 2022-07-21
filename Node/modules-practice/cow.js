const cows = require('cowsay');

module.exports.speak = (text) => cows.say({'text': text}); 

// const cow = require('./cow');
