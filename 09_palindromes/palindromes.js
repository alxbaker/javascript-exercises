const palindromes = function (phrase) {
    cleanPhrase = phrase.toLowerCase().replace(/[^a-z]/g, "");
    revPhrase = cleanPhrase.split("").reverse().join("");
    return cleanPhrase == revPhrase;
};

// Do not edit below this line
module.exports = palindromes;
