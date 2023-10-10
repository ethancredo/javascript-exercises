const sumAll = function(start, end) {
    let finalSum = 0;

    if(start < 0 || end < 0) { return "ERROR"; }
    if(!Number.isInteger(start) || !Number.isInteger(end)) { return "ERROR"; }

    if(start < end) {
        for(start; start <= end; start++) {
            finalSum += start;
            
        }
        return finalSum;
    } else if(start > end) {
        for(start; end <= start; start--) {
            finalSum += start;
            
        }
        return finalSum;
    }

};

// Do not edit below this line
module.exports = sumAll;
