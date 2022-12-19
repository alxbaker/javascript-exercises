const sumAll = function(num1, num2) {
    finalSum = 0;
    if ((typeof num1 !== "number") || (typeof num2 !== "number")) {
        return 'ERROR';
    } else if ((num1 < 0) || (num2 < 0)) {
        return 'ERROR';
    } else {
        max = Math.max(num1, num2);
        min = Math.min(num1, num2);
        for (let i = min; i<=max; i++) {
            finalSum += i;
        }
        return finalSum;
    }
};

// Do not edit below this line
module.exports = sumAll;
