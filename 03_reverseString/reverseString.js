const reverseString = function(string) {
    characters = string.split('');
    let reversedString = '';
    while (characters.length > 0) {
        reversedString += characters.pop()
    }
    return reversedString
};

// Do not edit below this line
module.exports = reverseString;
