/*
1. Use a for loop to increment through the array we're working on
2. Check if the current item in the array matches any of the "Items to remove" by using the include array method
3. If the item matches, remove it from the array we're working on with the splice array method
4. Return the final array
*/

function removeFromArray(...args) {
	let itemsToRemove = args.slice(1);

	for (let i = 0; i <= args[0].length - 1; i++) {
		if (itemsToRemove.includes(args[0][i])) {
			args[0].splice(i, 1);
			i--;
		}
	}
	return (args[0]);
}

// console.log(removeFromArray([1, 2, 3, 4], 3, 2));

// Do not edit below this line
module.exports = removeFromArray;