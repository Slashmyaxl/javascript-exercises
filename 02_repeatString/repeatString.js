const repeatString = function(string, num) {
    let strung = '';
    
    if (num < 0) {
        return 'ERROR';
    } else {
        for (let i = 1; i <= num; i++) {
            strung += `${string}`;
        }
    }
    return strung;
};

// Do not edit below this line
module.exports = repeatString;
