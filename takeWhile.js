import _ from 'lodash';

var users = [
  { user: 'barney', active: false },
  { user: 'fred', active: false },
  { user: 'pebbles', active: true },
];

let array1 = _.takeWhile(users, function (o) {
  return !o.active;
});

let array2 = _.takeWhile(users, ['active', false]);

console.log(array1);
console.log(array2);
