import _ from 'lodash';

// Original array
var objects = [{ x: 4 }, { x: 6 }];

// Use of _.sortedLastIndexBy()
// method
let index = _.sortedLastIndexBy(objects, { x: 5 }, function (o) {
  return o.x;
});

// Printing the output
console.log(index);
