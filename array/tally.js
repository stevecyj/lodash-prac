import _ from 'lodash';

let words = ['sky', 'forest', 'wood', 'sky', 'rock', 'cloud', 'sky', 'forest', 'rock', 'sky'];

let tally = _.reduce(
  words,
  (total, next) => {
    console.log(total);
    console.log(`next:${next}`);
    total[next] = (total[next] || 0) + 1;

    return total;
  },
  {}
);

console.log(tally);
