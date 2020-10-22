function add (firstNum, secondNum) {
	let results = firstNum + secondNum;
	return results
}

function subtract (firstNum, secondNum) {
	let results = firstNum - secondNum;
	return results
}

function sum (anArray) {
	let j = anArray.length;
	let results = 0;
	for (i = 1; i <= j; i++) {
		results += anArray[i-1];
	}
	return results
}

function multiply (anArray) {
	let j = anArray.length;
	let results = 1;
	for (i = 1; i <= j; i++) {
		results *= anArray[i-1];
	}
	return results
}

function power(firstNum, secondNum) {
	let results = Math.pow(firstNum, secondNum);
	return results
}

function factorial(firstNum) {
	let results = 1;
	if (firstNum == 0) {
		results = 1;
	} else if (firstNum > 0) {
		for (i = 1; i <= firstNum; i++ ) {
			results *= [i];
		}
	}
	return results
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}