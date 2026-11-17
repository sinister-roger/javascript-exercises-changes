const removeFromArray = function(array, removal) {
        let newArray = [];
    array.forEach(item => {
        if (item !== removal) {
            newArray.push(item);
        }
    });
        return newArray; 
};

// Do not edit below this line
module.exports = removeFromArray;
