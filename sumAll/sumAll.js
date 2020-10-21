const sumAll = function(firstNum, lastNum) {
    let endSum = 0;
    if ((typeof firstNum == 'string') || (typeof lastNum == 'string')) {
        endSum = 'ERROR';
        }
    else if (isNaN(firstNum) || isNaN(lastNum)) {
        endSum = 'ERROR';
    }
    else if (firstNum < 0 || lastNum < 0){
        endSum = 'ERROR';
    }
    else if (firstNum > lastNum) {
        for (i = firstNum; i >= lastNum; i--) {
            endSum += i;
        }
    }
        else {
        
        for (i = firstNum; i <= lastNum; i++) {
            endSum += i;
        }
    }
    return endSum
}

module.exports = sumAll
