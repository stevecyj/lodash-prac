import _ from "lodash";
_([1, 2]).forEach(function (value) {
  console.log(value);
});

_.forEach({ a: 1, b: 2 }, function (value, key) {
  console.log(key);
});
