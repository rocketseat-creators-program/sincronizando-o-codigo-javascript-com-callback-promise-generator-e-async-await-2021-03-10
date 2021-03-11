const delayedSum = function (a, b) {
	return new Promise((resolve, reject) => {
		setTimeout(function () {
			resolve(a + b);
		}, 500);
	});
};

console.time('performance');
const [a, b] = await Promise.all([
	delayedSum(2, 2),
	delayedSum(4, 4)
]);
const result = await delayedSum(a, b);
console.log(result);
console.timeEnd('performance');
