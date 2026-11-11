const { __esModule } = require("@babel/generator");


function isPrime(number)
{
    if(number < 2)
        return false;
    if(number == 2)
        return true;
    if(number % 2 == 0)
        return false;
    for(i = 2; i < number - 1; i++)
    {
        if(number % i == 0)
            return false;
    }
    return true;
}

module.exports = { isPrime };