const delayedSum = function (a, b) {
	return new Promise((resolve, reject) => {
		setTimeout(function () {
			resolve(a + b);
		}, 500);
	});
};

const async_ = async function (fn) {
	const generator = fn();
	let obj = generator.next();
	while (!obj.done) {
		const result = await obj.value;
		obj = generator.next(result);
	}
};

async_(function* () {
	console.time('performance');
	const a = yield delayedSum(2, 2);
	const b = yield delayedSum(4, 4);
	const result = yield delayedSum(a, b);
	console.log(result);
	console.timeEnd('performance');
});
