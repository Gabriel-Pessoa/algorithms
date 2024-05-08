export function basicSearch(listOfNumber, secretNumber) {

    for (let i = 0; i < listOfNumber.length; i++) {
        const attempt = listOfNumber[i];

        if (attempt === secretNumber) {
            return attempt;
        }
    }

    return NaN;
}

// const listOfNumber = [];

// for (let i = 100; i >= 0; i--) {
//     listOfNumber.push(i);
// }

// const result = basicSearch(listOfNumber, 45);
// console.log('Result: ', result);
