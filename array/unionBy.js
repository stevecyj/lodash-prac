import _ from 'lodash';

let ary1 = [2.1];
let ary2 = [1.2, 2.3];
let ary = _.unionBy(ary1, ary2, Math.floor);

console.log(ary);
console.log(_.unionBy([{ x: 1 }], [{ x: 2 }, { x: 1 }], 'x'));
