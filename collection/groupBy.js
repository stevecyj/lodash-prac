import _ from "lodash";

let obj1 = _.groupBy([6.1, 4.2, 6.3], Math.floor);
console.log(obj1);

let obj2 = _.groupBy(["one", "two", "three"], "length");
console.log(obj2);
