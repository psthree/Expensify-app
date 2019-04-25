const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve('This my resolved data');
    reject('oppps!');
  }, 1500);
});

console.log('before');
promise
  .then(data => {
    console.log('1', data);
  })
  .catch(error => {
    console.log(error);
  });
// promise.then(data => {
//   console.log('2', data);
// });
console.log('after');
