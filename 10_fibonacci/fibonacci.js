const fibonacci = function(num) {
    let fibonacci = 1;
    if(typeof(num) !== 'number'){
        num = Number(num);
    }

    if(num < 0) return 'OOPS';
    var num1 = 0; 
    var num2 = 1; 
    var sum; 
    
    for (let i = 0; i < num - 1; i++)  
    { 
        sum = num1 + num2; 
        num1 = num2; 
        num2 = sum; 
    } 
    return num2; 
};

// Do not edit below this line
module.exports = fibonacci;
