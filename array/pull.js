import _ from 'lodash';

let array = [1, 2, 3, 1, 2, 3, 4, 5, 6];
_.pull(array, 4, 5, 6);
console.log(array);
