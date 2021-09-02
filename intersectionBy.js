// Requiring the lodash library
import _ from "lodash";

// Original array and array1
// float values are given
let array1 = [1.1, 2.6, 4, 3.2, 1, 2];
let array2 = [1, 2, 3, 5, 6];

// Using _.intersection() method
// when this function is run array1
// looks like array1=[2, 3, 4, 4, 1, 2]
// after that intersection is taken
let newArray = _.intersectionBy(array1, array2, Math.ceil);

// Printing original Array
console.log("original Array1:", array1);
console.log("original Array2:", array2);

// Printing the newArray
console.log("new Array:", newArray);
