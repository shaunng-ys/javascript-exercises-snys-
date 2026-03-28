const convertToCelsius = function(tempInKelvin) {
	return (Math.round(((tempInKelvin - 32) / 1.8) * 10) / 10);
};

const convertToFahrenheit = function(tempInDegrees) {
	return (Math.round(((tempInDegrees * 1.8) + 32) * 10) / 10);
};

// console.log(convertToCelsius(100));
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
