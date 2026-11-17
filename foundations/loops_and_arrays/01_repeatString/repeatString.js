const repeatString = function(string, num) {
    if (num < 0) {
        return "ERROR";
    } 
    let newWord = []; 

    for (let i =0; i<num; i++) {
          newWord.push(string);
     }
   
    return newWord.join(""); 
};

// Do not edit below this line
module.exports = repeatString;
