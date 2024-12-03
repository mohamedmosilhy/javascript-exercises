repeatString = function (word, repeat) {
  let res = "";

  if (repeat < 0) {
    return "ERROR";
  }

  for (let i = 0; i < repeat; i++) {
    res += word;
  }
  return res;
};

// Do not edit below this line
module.exports = repeatString;
