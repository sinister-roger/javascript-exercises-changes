const palindromes = function (string) {
    //clean string: contain words, number_underscore through RegEx.make lowercase
     string =string.replace(/[^\w]/g,"").toLowerCase();
     
    let reverseWord =string.split('').reverse().join("");
    return reverseWord === string; 
};

// Do not edit below this line
module.exports = palindromes;
