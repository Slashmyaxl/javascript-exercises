const sumAll = function(x, y) {

    if (x < 0 || y < 0 || typeof (x) !== "number" || typeof (y) !== "number") {
        return 'ERROR';
    }

    let sum = 0;
    let values = [];
    let minValue = Math.min(x, y);
    let maxValue = Math.max(x, y);

    while (minValue <= maxValue) {
        values.push(minValue);
        minValue++;
    }

    for (let i = 0; i < values.length; i++) {
        sum += values[i];
    }

    return sum;

};

// Do not edit below this line
module.exports = sumAll;
