const removeFromArray = function(array,...args) {
    for(elementArgs of args)
    {
        for(let i = 0; i < array.length; i++)
        {
            if(elementArgs === array[i])
            {
                array.splice(i,1);
            }
        }
    }
    return array;
};
removeFromArray([1, 2, 3, 4], 3);
// Do not edit below this line
module.exports = removeFromArray;
