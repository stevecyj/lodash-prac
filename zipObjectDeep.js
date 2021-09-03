import _ from 'lodash';

let obj = _.zipObjectDeep(['a.b[0].c', 'a.b[1].d'], [1, 2]);

console.table(obj);
