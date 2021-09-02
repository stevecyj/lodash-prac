import _ from "lodash";

let array1 = [1, 2, 4, 3, 4, 4];
let array2 = [1, 2, 5, 6];
let newArray = _.intersectionBy(array1, array2);

// Printing original Array
console.log("original Array1:", array1);
console.log("original Array2:", array2);

// Printing the newArray after intersection
console.log("new Array:", newArray);
