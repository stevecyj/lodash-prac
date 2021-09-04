import _ from 'lodash';
var array = [1, 2, 3, 4];
var evens = _.remove(array, function (n) {
  return n % 2 == 0;
});

console.log(array);
// => [1, 3]，原始陣列

console.log(evens);
// => [2, 4], 移除元素組成的新陣列
