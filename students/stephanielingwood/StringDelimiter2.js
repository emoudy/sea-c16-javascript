var myString = "I$like$strings$!$They're$nifty.$$$$";

var stringDelimiter = function(stringName, delimiter) {
	var j = 0;
	var holding = [];
	var resultArray = [];
	var concatenate = function() {
		resultArray[j] = holding.join("");
		j++;
		holding.length = 0;		
	}
	for (i = 0; i < stringName.length; i++) {
		if (stringName[i] !== delimiter && i === (stringName.length - 1)) {
			holding.push(stringName[i]);
			concatenate();
		}
		else if (stringName[i] === delimiter && holding.length !== 0) {
			concatenate();
		}
		else if (stringName[i] !== delimiter) {
			holding.push(stringName[i]);
		}
	}
	for (k = 0; k < resultArray.length; k++) {
		console.log(resultArray[k]);
	}
}