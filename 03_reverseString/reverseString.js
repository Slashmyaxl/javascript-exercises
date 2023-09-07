const reverseString = function(string) {

    let arrayedString = [];
    let reversedString = "";

    const n = string.length;

    for (let i = 0; i < n; i++) {
        arrayedString.push(string[i]);
    } 

    for (let i = n - 1; i >= 0; i--) {
        reversedString += arrayedString[i];
    } 

    return reversedString;

};

// Do not edit below this line
module.exports = reverseString;
