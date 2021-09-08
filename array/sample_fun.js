import _ from 'lodash';

let words = ['sky', 'wood', 'forest', 'falcon', 'pear', 'ocean', 'universe'];

// With the _.sample function, we can pick a random element from an array.
let word = _.sample(words);
console.log(word);
