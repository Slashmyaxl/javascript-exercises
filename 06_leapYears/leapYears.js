const leapYears = function(year) {

    /*if (year % 100 === 0 && year % 400 === 0) {
        return true;
    } else if (year % 100 !== 0 && year % 4 === 0) {
        return true;
    } else {
        return false;
    } */

    return (year % 400 === 0 && year % 400 === 0) ? true
        : (year % 100 !== 0 && year % 4 === 0) ? true : false;

};

// Do not edit below this line
module.exports = leapYears;
