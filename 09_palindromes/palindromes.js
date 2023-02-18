const palindromes = function (words) {
    words = words.toLowerCase();
    
    for(let i = 0; i < words.length; i++)
    {
        if(words[i] === ' ' ||words[i] === ','||words[i] === '!' || words[i] === '.'){
            words = words.split(words[i]).join("");
        }
    }
    let firstHalf = words.slice(0,Math.round(words.length/2) - 1);
    let secondHalf = words.slice(Math.round(words.length/2 +1));

    if(firstHalf.length !== secondHalf.length) return false;

    for(let i = 0; i < firstHalf.length; i++){
        if(firstHalf[i] !== secondHalf[secondHalf.length - 1 - i])
        {
            return false;
        }
    }

    return true;
};

palindromes('Animal loots foliated detail of stool lamina.');
// Do not edit below this line
module.exports = palindromes;
