
// 5. Create a function 'forEach' that takes an array and a function and then
// calls the given function once with each value in the given array.


const factorial = function (val) {
  let a = val;
  let fact = 1;
  while (a>0) {
    fact = fact * a;
    a = a - 1;
  }
  return console.log(fact);
};

const forEach = function (array, jj) {
  let b = 0;
  while (b < array.length) {
    jj(array[b]);
    b = b + 1;
  }
};

console.log(forEach([2,3,4],factorial));
