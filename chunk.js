import _ from "lodash";
import tickets from "./tickets.js";

let chunk = _.chunk(tickets, 3);
console.log(chunk);
