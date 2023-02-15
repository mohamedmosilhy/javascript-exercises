const reverseString = function(word) {
    let reversedword = "";
    for(let i = word.length - 1; i >= 0; i--){
        reversedword += word[i];
    }
    return reversedword;
};

// Do not edit below this line
module.exports = reverseString;
