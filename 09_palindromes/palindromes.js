const palindromes = function (words) {
  const cleaned = words.toLowerCase().replace(/[^a-z0-9]/g, "");

  const reversed = cleaned.split("").reverse().join("");

  return cleaned === reversed;
};

palindromes("Animal loots foliated detail of stool lamina.");
// Do not edit below this line
module.exports = palindromes;
