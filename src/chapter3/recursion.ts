function factorial(value: number): number {
    if (value < 0) {
        throw Error('negative number is invalid value');
    } else if (value === 0 || value === 1) {
        return 1;
    } else {
        return value * factorial(value - 1);
    }
}

// console.log(factorial(-1));
console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(3));
console.log(factorial(4));
console.log(factorial(5));
