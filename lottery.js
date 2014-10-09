
var calculateResult = function () {
	return 0;
};

var lottery = function() { 
	var powerBall, whiteBalls, index, result;
	if(process.argv.length !== 8){
		console.log("Error. Usage: node " + process.argv[1] + " power_ball (5 white balls)");
		return -1;
	}
	powerBall = parseInt(process.argv[2], 10);
	whiteBalls = [];
	for(index = 0; index < 5; index++){
		whiteBalls[index] = parseInt(process.argv[3+index], 10);
	}
	result = calculateResult(whiteBalls, powerBall);
	console.log(result + ' percent chance of winning.');
	return 0;
};
lottery();