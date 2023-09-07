const removeFromArray = function(array, ...args) {

const newArr = [];

array.forEach((item) => {
    if (!args.includes(item)) {
        newArr.push(item);
    }
});

/* array.forEach(remove);

function remove(item) {
    if (!args.includes(item)) {
        newArr.push(item)
    }
} */

return newArr;

};

// Do not edit below this line
module.exports = removeFromArray;
