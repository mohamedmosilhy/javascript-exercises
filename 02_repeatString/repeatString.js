repeatString = function(word, repeat) {
    finalWord = "";
    if(repeat >= 0){
        for(let i = 0; i < repeat; i++){
            finalWord += word;
        }
        return finalWord;
    }
    else
    {
        return "ERROR"

    }
    
};

// Do not edit below this line
module.exports = repeatString;
