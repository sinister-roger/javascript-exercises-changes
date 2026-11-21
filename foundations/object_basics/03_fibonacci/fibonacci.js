const fibonacci = function(num) {
 if(num <= 0 || isNaN(num)) {
    return "OOPS"
  }
  const arr =[1,1]; 
  let fib = 0; 
  for (let i = 2; i <= num; i++) {
    fib = arr[i-1] +arr[i-2]
    arr.push(fib);
  }
  return arr[num-1]; 
};

// Do not edit below this line
module.exports = fibonacci;
