const delayedSum = function (a, b, fn) {
	setTimeout(function () {
		fn(a + b);
	}, 500);
};

delayedSum(2, 2, function (result) {
	console.log(result);
});
