import _ from 'lodash';

let users = [
  { name: 'John', age: 25, occupation: 'gardener' },
  { name: 'Lenny', age: 51, occupation: 'programmer' },
  { name: 'Andrew', age: 43, occupation: 'teacher' },
  { name: 'Peter', age: 52, occupation: 'gardener' },
  { name: 'Anna', age: 43, occupation: 'teacher' },
  { name: 'Albert', age: 46, occupation: 'programmer' },
  { name: 'Adam', age: 47, occupation: 'teacher' },
  { name: 'Robert', age: 32, occupation: 'driver' },
];

let grouped = _.reduce(
  users,
  (result, user) => {
    (result[user.occupation] || (result[user.occupation] = [])).push(user);
    console.log(result);
    console.log(user);
    console.log('====================');
    return result;
  },
  {}
);

console.log(grouped);
