/*
1. Function first checks if year is divisible 4 without remainder. If not, return false
2. Else, check if divisible by 100 without remainder. If not, return true
3. Otherwise, check if divisible by 400 without remainder. If not, return false
4. However, if possible, return true.
*/

const leapYears = function(year) {
	if (year % 4 !== 0) return (false);
	else if (year % 100 !== 0) return (true);
	else if (year % 400 !== 0) return (false);
	else return (true); 
};

// console.log(leapYears(2000));
// console.log(leapYears(1985));
// Do not edit below this line
module.exports = leapYears;
