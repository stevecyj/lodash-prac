import _ from 'lodash';

var users = [
  { user: 'barney', active: true },
  { user: 'fred', active: false },
  { user: 'pebbles', active: false },
];

let array1 = _.takeRightWhile(users, function (o) {
  return !o.active;
});

console.log(array1);
