const delayedSum = function (a, b) {
	return new Promise((resolve, reject) => {
		setTimeout(function () {
			resolve(a + b);
		}, 500);
	});
};

const execute = function* () {
	console.time('performance');
	const a = yield delayedSum(2, 2);
	console.log(a);
	const b = yield delayedSum(4, 4);
	console.log(b);
	const result = yield delayedSum(a, b)
	console.log(result);
	console.timeEnd('performance');
};

const generator = execute();
generator.next().value.then(function (a) {
	generator.next(a).value.then(function (b) {
		generator.next(b).value.then(function (result) {
			console.log(generator.next(result));
		});
	});
});
