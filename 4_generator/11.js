function* loop () {
	let i = 0;
	while(true) {
		yield i++;
	}
}

const generator = loop();
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(new Date());
