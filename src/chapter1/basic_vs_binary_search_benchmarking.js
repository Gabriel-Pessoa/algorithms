import b from 'benny';
import { basicSearch } from './basic_search.js';
import { binarySearch } from './binary_search.js';

const orderedListOfNumberFrom1To100 = makeOrderedListOfNumber(100);
const orderedListOfNumberFrom1To1000 = makeOrderedListOfNumber(1000);
const orderedListOfNumberFrom1To10000 = makeOrderedListOfNumber(10000);
const orderedListOfNumberFrom1To100000 = makeOrderedListOfNumber(100000);

b.suite(
    'Basic Search vs. Binary Search, with 100 items',

    b.add('Basic Search', () => {
        basicSearch(orderedListOfNumberFrom1To100, 45);
    }),

    b.add('Binary Search', () => {
        binarySearch(orderedListOfNumberFrom1To100, 45);
    }),

    b.cycle(),
    b.complete(),
);

b.suite(
    'Basic Search vs. Binary Search, with 1000 items',

    b.add('Basic Search', () => {
        basicSearch(orderedListOfNumberFrom1To1000, 450);
    }),

    b.add('Binary Search', () => {
        binarySearch(orderedListOfNumberFrom1To1000, 450);
    }),

    b.cycle(),
    b.complete(),
);

b.suite(
    'Basic Search vs. Binary Search, with 10000 items',

    b.add('Basic Search', () => {
        basicSearch(orderedListOfNumberFrom1To10000, 4500);
    }),

    b.add('Binary Search', () => {
        binarySearch(orderedListOfNumberFrom1To10000, 4500);
    }),

    b.cycle(),
    b.complete(),
);

b.suite(
    'Basic Search vs. Binary Search, with 100000 items',

    b.add('Basic Search', () => {
        basicSearch(orderedListOfNumberFrom1To100000, 45000);
    }),

    b.add('Binary Search', () => {
        binarySearch(orderedListOfNumberFrom1To100000, 45000);
    }),

    b.cycle(),
    b.complete(),
);

function makeOrderedListOfNumber(size) {
    const listOfNumber = [];

    for (let i = 1; i <= size; i++) {
        listOfNumber.push(i);
    }

    return listOfNumber;
}
