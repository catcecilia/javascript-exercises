const removeFromArray = function() {
    myArray= arguments[0];
    numArgs = arguments.length ; 1
    for (i = 1; i < numArgs; i++ ){
        if (myArray.indexOf(arguments[i]) > -1) {
            myArray.splice(myArray.indexOf(arguments[i]), 1);
        }
        else {continue;}
    }
    console.log('resulting array is : ' + myArray);
    return myArray
}


module.exports = removeFromArray
