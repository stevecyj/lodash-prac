import _ from 'lodash';

var array = [
  { x: 1, y: 2 },
  { x: 3, y: 4 },
  { x: 5, y: 6 },
];

_.pullAllWith(array, [{ x: 3, y: 4 }], _.isEqual);
console.log(array);
