const removeFromArray = function(array, ...numbers) {
    newArray  = [];
    array.forEach((item) => {
        if (!numbers.includes(item)) {
            newArray.push(item);
        }
    });

    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
