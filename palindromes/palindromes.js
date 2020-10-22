const palindromes = function(rawString) {
    var regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
    let cleanString = rawString.replace(regex, "");
    cleanString = cleanString.split(" ").join("");
    cleanString = cleanString.split(".").join("");
    cleanString = cleanString.toLowerCase();
    let stringLength = cleanString.length;
    let firstHalf = Math.round(stringLength/2);
    let compareA = "";
    let compareB = "";

    for (i = 1; i <= firstHalf; i++) {
        compareA += cleanString[i-1];
    }
    for (j= stringLength; j >= firstHalf ; j--) {
        compareB += cleanString[j-1];
    }

    if (compareB.length - compareA.length == 1) {
        compareB = compareB.slice(0,-1);
        if (compareA == compareB) {
            return true
        }
        else {
            return false
        }
    }
    
    else if (compareA == compareB) {
        return true
    }
    else {
        console.log('this is compareA: ' + compareA);
        console.log('this is a compareB: ' + compareB);
        return false
    }
}

module.exports = palindromes
