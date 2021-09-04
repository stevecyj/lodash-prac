import _ from 'lodash';

var objects = [
  { x: 1, y: 2 },
  { x: 2, y: 1 },
];
var others = [
  { x: 1, y: 1 },
  { x: 1, y: 2 },
];

let result = _.unionWith(objects, others, _.isEqual);
console.log(result);
