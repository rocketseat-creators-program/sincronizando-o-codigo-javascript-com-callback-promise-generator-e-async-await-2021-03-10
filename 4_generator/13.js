const delayedSum = function (a, b) {
	return new Promise((resolve, reject) => {
		setTimeout(function () {
			resolve(a + b);
		}, 500);
	});
};

const async_ = function (fn) {
	const gen = fn();
	asyncR_(gen);
};

const asyncR_ = function (gen, result) {
	const obj = gen.next(result);
	if (obj.done) return;
	obj.value.then(function (result) {
		asyncR_(gen, result);
	});
};

async_(function* () {
	console.time('performance');
	const a = yield delayedSum(2, 2);
	const b = yield delayedSum(4, 4);
	const result = yield delayedSum(a, b)
	console.log(result);
	console.timeEnd('performance');
});
