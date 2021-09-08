import _ from 'lodash';

function message() {
  console.log('我被 delay 了');
}

_.delay(message, 3000);
console.log('Some other message');
// message delay 了 3 秒才 console 出來
