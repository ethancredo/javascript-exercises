const repeatString = function(word, times) {
    let string = '';

    if(0 > times) { return "ERROR"; }

    for(let repeat = 0; repeat < times; repeat++) {
        string += word;
    }
    return string;
};

// Do not edit below this line
module.exports = repeatString;
