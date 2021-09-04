import _ from "lodash";

function less3(a) {
  return a < 3;
}

console.log(_.dropWhile([1, 2, 5, 7, 4], less3));
console.log(_.dropRightWhile([4, 7, 5, 2, 1], less3));
