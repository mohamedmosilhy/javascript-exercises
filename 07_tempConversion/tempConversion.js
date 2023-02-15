const convertToCelsius = function(fahrenheit) {
  let FTC = (fahrenheit - 32) * 5/9;
  if(Number.isInteger(FTC)) return FTC;
  return +FTC.toFixed(1);
};

const convertToFahrenheit = function(celsius) {
  let CTF = celsius * 9/5 + 32;
  if(Number.isInteger(CTF)) return CTF;
  return +CTF.toFixed(1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
