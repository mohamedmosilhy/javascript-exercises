const sumAll = function(first,second) {
    let sum = 0;
    let start, end;

    if(first > second)
    {
        start = second;
        end = first;
    }
    else
    {
        start = first;
        end = second;
    }

    if(typeof(start) === "number" && typeof(end)  === "number" && start >= 0 && end >= 0)
    {
        for(let i = start; i <= end; i++)
        {
            sum += i;
        }
        return sum;
    }
    else
    {
        return "ERROR"
    }
    
};

// Do not edit below this line
module.exports = sumAll;
