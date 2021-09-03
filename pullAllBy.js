import _ from 'lodash';

var array = [{ x: 1 }, { x: 2 }, { x: 3 }, { x: 1 }];

_.pullAllBy(array, [{ x: 1 }, { x: 3 }], 'x');
console.log(array);
