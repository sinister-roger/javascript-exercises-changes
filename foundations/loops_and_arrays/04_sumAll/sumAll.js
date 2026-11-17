const sumAll = function(first , last) {
  if ( first > last) {
    let temp = first;
    first = last; 
    last =temp; 
  } 
  
  let arr = [first]
  if (first >= 0 && last >= 0 && first % 1 === 0 && last % 1 === 0 && typeof first === "number" && typeof last === "number") {
    
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
