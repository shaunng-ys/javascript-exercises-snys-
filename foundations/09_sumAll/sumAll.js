const sumAll = function(a, b) {
	
	if (a < 0 || b < 0 || !Number.isInteger(a) || !Number.isInteger(b)) return (`ERROR`);	
	
	let sum = 0;
	let smaller;
	let bigger;
	
	if (a <= b) {
		smaller = a;
		bigger = b;
	} else if (a > b) {
		smaller = b;
		bigger = a;
	}
	for (;smaller <= bigger;smaller++) {
		sum += smaller;
	}
	return (sum);
};
// Do not edit below this line
module.exports = sumAll;