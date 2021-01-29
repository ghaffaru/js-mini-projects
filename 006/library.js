const  Book = require('./Book');
const Movie = require('./Movie');
let historyOfEverything = new Book('A Short History of Nearly Everything', 'Bill Bryson', 544);

historyOfEverything.toggleCheckOutStatus();

console.log(historyOfEverything.isCheckedOut);

historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);

console.log(historyOfEverything.getAverageRating());

let speed = new Movie('Jan de Bont', 'Speed', 116);

speed.toggleCheckOutStatus();
console.log(speed.isCheckedOut);
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);

console.log(speed.getAverageRating());
