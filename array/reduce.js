import _ from 'lodash';

let nums = [4, 5, 3, 2, 1, 7, 6, 8, 9];

// let sum = _.reduce(nums, (total, next) => {
//   console.log(`total:${total}`);
//   console.log(`next:${next}`);
//   return total + next;
// });

// console.log(sum);

let colours = ['red', 'green', 'white', 'blue', 'black'];

let res = _.reduceRight(colours, (next, total) => {
  console.log(`total:${total}`);
  console.log(`next:${next}`);
  return `${total}-${next}`;
});
console.log(res);
