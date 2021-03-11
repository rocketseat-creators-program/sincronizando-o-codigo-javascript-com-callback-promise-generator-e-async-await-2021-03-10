const delayedSum = function (a, b) {
	return new Promise((resolve, reject) => {
		setTimeout(function () {
			resolve(a + b);
		}, 500);
	});
};

const execute = async function () {
	console.time('performance');
	const a = await delayedSum(2, 2);
	const b = await delayedSum(4, 4);
	const result = await delayedSum(a, b)
	console.log(result);
	console.timeEnd('performance');
};

execute();
