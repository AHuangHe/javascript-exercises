const sumAll = function(num1, num2) {
    if(num1 < 0 || num2 < 0) return 'ERROR';
    if(typeof(num1) !== 'number' || typeof(num2) !== 'number') return 'ERROR';

    let sum = 0;
    const low = (num1 < num2) ? num1 : num2;
    const high = (num1 >= num2) ? num1 : num2;

    for(let i = low; i <= high; i++){
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
