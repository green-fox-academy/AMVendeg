// warm up
setTimeout(() => {
  console.log('TIMED OUT');
}, 300);


// TASK 1: fulfilled
'use strict';

    var promise = new Promise(function (fulfill, _reject) {
      setTimeout(function () {
        fulfill('FULFILLED!');
      }, 300);
    });

    promise.then(console.log);


// TAKS 2: REJECT
var promise = new Promise(function (_fulfill, reject) {
  setTimeout(() => reject(new Error('REJECTED!')), 300);
});

function onReject (error) {
  console.log(error.message);
}

// then(() => {}, (rejected) => onReject(rejected));
promise.then(null,onReject());




