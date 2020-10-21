const reverseString = function(myString) {
    let j = myString.length;
    let newString = "";
    for (i=j; i>0; i--){
        newString += myString[i-1];
    }
    return newString
}

module.exports = reverseString
