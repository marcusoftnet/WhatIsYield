function *theGenerator(){
	yield "One, for the money";
	yield "Two, for the show";
	yield "Three to get ready! Now go, cat, go";
};

var elvis = theGenerator(); // get an instance of the generator

console.log(elvis.next().value); // outputs "One, for the money”
console.log(elvis.next().value); // outputs "Two, for the show"
console.log(elvis.next().value); // outputs "Three to get ready! Now go, cat, go"


console.log(elvis.next()); // ouputs { value: undefined, done: true }
console.log(elvis.next()); // throws Error: Generator has already finished