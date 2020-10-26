const caesar = function(rawString, shift) {
    stringLength = rawString.length;
    cleanString = [];
    for (i =0; i < stringLength; i++){
        let currentPosition = rawString.charCodeAt(i);
        let newPosition = currentPosition + shift;
        if (rawString[i] === ""){
            currentPosition.push(' ');
        }
        else if (currentPosition < 65 || currentPosition > 122) {
            cleanString[i] = rawString[i];
        }
        else if (currentPosition <=90 && shift > 0) {
            if (newPosition > 90) {
                cleanString[i] = String.fromCharCode((26-(newPosition%26)));
            } 
            else if (newPosition <= 90){
                cleanString[i] = String.fromCharCode(newPosition);
            }
            
        } else if (currentPosition >= 97 && shift > 0){
            if (newPosition > 122) {
                cleanString[i] = String.fromCharCode((26-(newPosition%26)));
            } 
            else if (newPosition <= 122){
                cleanString[i] = String.fromCharCode(newPosition);
            }

        } 
    }
return cleanString.join('');
}

module.exports = caesar
