const removeFromArray = function(array, ...removal) {
    // let newArray = [];
  const  newArray =array.filter((item) => {
    return !removal.includes(item)
  })
  return newArray;
};


// Do not edit below this line
module.exports = removeFromArray;
