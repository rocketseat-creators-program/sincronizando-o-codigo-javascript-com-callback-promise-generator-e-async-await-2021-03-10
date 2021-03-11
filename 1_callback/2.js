const delayedSum = function (a, b) {
	setTimeout(function () {
		return a + b;
	}, 500);
};

console.log(delayedSum(2, 2));
