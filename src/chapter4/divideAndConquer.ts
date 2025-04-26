function sunListOfNumbers(list: number[]): number {
    if (list.length === 0) {
        return 0;
    } else {
        const fisrtNumber = list.shift() || 0;
        const lastNumber = list.pop() || 0;
        return fisrtNumber + lastNumber + sunListOfNumbers(list);
    }
}

// console.log(sunListOfNumbers([]));
// console.log(sunListOfNumbers([2]));
// console.log(sunListOfNumbers([2, 4]));
// console.log(sunListOfNumbers([2, 4, 6]));

function countListOfNumbers(list: number[]): number {
    const isValidElement = !!list.pop();
    if (isValidElement) {
        return 1 + countListOfNumbers(list);
    }
    return 0;
}

// console.log(countListOfNumbers([]));
// console.log(countListOfNumbers([2]));
// console.log(countListOfNumbers([2, 4]));
// console.log(countListOfNumbers([2, 4, 6]));

function findMaxValue(list: number[], bigValue = 0): number {
    if (list.length === 0) {
        return 0;
    }

    const lastNumber = list.pop() || 0;
    if (bigValue < lastNumber) {
        bigValue = lastNumber;
    }

    return findMaxValue(list, bigValue);
}

// console.log(findMaxValue([]));
// console.log(findMaxValue([2]));
// console.log(findMaxValue([2, 4]));
// console.log(findMaxValue([2, 4, 6]));

function findMaxValueSimplified(list: number[]): number {
    if (list.length === 0) {
        return 0;
    }
    else if (list.length === 1) {
        return list[0];
    }
    else if (list.length === 2) {
        const numberA = list[0];
        const numberB = list[1];
        return numberA > numberB ? numberA : numberB;
    } else {
        const max = list.pop() || 0;
        const subMax = findMaxValueSimplified(list);
        return max < subMax ? subMax : max;
    }
}

console.log(findMaxValueSimplified([]));
console.log(findMaxValueSimplified([2]));
console.log(findMaxValueSimplified([2, 4]));
console.log(findMaxValueSimplified([2, 4, 6]));
console.log(findMaxValueSimplified([2, 4, 6, 7, 8, 9, 100, 37]));
