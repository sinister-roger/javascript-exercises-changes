const sumAll = function(first , last) {
  if ( first > last) {
    let temp = first;
    first = last; 
    last =temp; 
  } 
  
  let arr = [first]
  if (first >= 0 && last >= 0) {
    
    for (let i = first; i < last; i++) {
      first = first +1
      arr.push(first);
    }
    console.log(arr); 
    return arr.reduce((initial, current) => {
      return initial+current;
    })
      // return arr;
  } else {
    return "ERROR"
  }
}


// Do not edit below this line
module.exports = sumAll;
