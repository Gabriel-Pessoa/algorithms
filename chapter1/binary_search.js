export function binarySearch(orderedListOfNumber, secretNumber) {
    let firstPosition = 0;
    let lastPosition = orderedListOfNumber.length - 1;

    while (firstPosition <= lastPosition) {
        const middlePosition = Math.floor((firstPosition + lastPosition) / 2);
        const attempt = orderedListOfNumber[middlePosition];

        if (attempt === secretNumber) {
            return attempt;
        } else if (attempt > secretNumber) {
            lastPosition = middlePosition - 1;
        } else {
            firstPosition = middlePosition + 1;
        }
    }

    return NaN;
}

// const orderedListOfNumber = [];

// for (let i = 1; i <= 10; i++) {
//     orderedListOfNumber.push(i);
// }

// const result = binarySearch(orderedListOfNumber, 4);
// console.log('Result: ', result); 
