const repeatString = function(myString, iterNum) {
    let newString = "";

    if (iterNum == 0){
        newString="";
    }
    else if (iterNum > 0){
        for (i=0; i<iterNum; i++){
            newString +=myString;
        
    } }
    else {
        newString = "ERROR";
    }
    return newString;
}

module.exports = repeatString