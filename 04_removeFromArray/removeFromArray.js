const removeFromArray = function(data, ...args) {

const newArr = [];

data.forEach(remove);

/* data.forEach((item) => {
    if (!args.includes(item)) {
        newArr.push(item);
    }
}); */

function remove(item) {
    if (!args.includes(item)) {
        newArr.push(item)
    }
}

return newArr;

};

// Do not edit below this line
module.exports = removeFromArray;
