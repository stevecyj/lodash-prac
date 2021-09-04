import _ from 'lodash';
var array = [5, 10, 15, 20];
var evens = _.pullAt(array, 1, 3);

console.log(array);
// => [5, 15], 原始陣列已改變

console.log(evens);
// => [10, 20]，移除元素後組成的新陣列
