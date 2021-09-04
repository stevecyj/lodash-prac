import _ from 'lodash';

// Original array
let x = ['ajax', 'django', 'mongoDb', 'react', 'reactnative', 'yarn'];

// Use of _.sortedIndexBy()
// method
let index = _.sortedIndexBy(x, '7777', 5);

// Printing the output
console.log(index);
