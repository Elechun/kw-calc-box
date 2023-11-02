function avg(numbers) {
    let s = numbers.reduce((prev, curr) => prev + curr, 0);
    return s / numbers.length;
}

function prime(num) {
    if (num <= 1){
        return false;
    } else if (num == 2 || num == 3){
        return true;
    }

    for (let i = 2; i * i <= num; i++){
        if (num % i == 0){
            return false;
        }
    }
    return true;
}

function fact(num) {
    let result = 1;
    for (let i = 1; i <= num; i++){
        result *= i;
    }
    return result;
}

module.exports = {
    avg,
    prime,
    fact
}