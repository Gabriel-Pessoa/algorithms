import b from 'benny';
import { generateUnsortedList } from "../utils/unsortedList";
import { quickSortWithFirstPivot, quickSortWithMiddlePivot, quickSortWithRandomPivot } from './quickSort';

const unsortedList100 = generateUnsortedList(100);
const unsortedList1000 = generateUnsortedList(1000);
const unsortedList10000 = generateUnsortedList(10000);
const unsortedList100000 = generateUnsortedList(100000);

b.suite(
    'Quick Sort with 100 items',

    b.add('With First Pivot', () => {
        quickSortWithFirstPivot(unsortedList100);
    }),

    b.add('With Middle Pivot', () => {
        quickSortWithMiddlePivot(unsortedList100);
    }),

    b.add('With Random Pivot', () => {
        quickSortWithRandomPivot(unsortedList100);
    }),

    b.cycle(),
    b.complete(),
);

b.suite(
    'Quick Sort with 1000 items',

    b.add('With First Pivot', () => {
        quickSortWithFirstPivot(unsortedList1000);
    }),

    b.add('With Middle Pivot', () => {
        quickSortWithMiddlePivot(unsortedList1000);
    }),

    b.add('With Random Pivot', () => {
        quickSortWithRandomPivot(unsortedList1000);
    }),

    b.cycle(),
    b.complete(),
);

b.suite(
    'Quick Sort with 10000 items',

    b.add('With First Pivot', () => {
        quickSortWithFirstPivot(unsortedList10000);
    }),

    b.add('With Middle Pivot', () => {
        quickSortWithMiddlePivot(unsortedList10000);
    }),

    b.add('With Random Pivot', () => {
        quickSortWithRandomPivot(unsortedList10000);
    }),

    b.cycle(),
    b.complete(),
);

b.suite(
    'Quick Sort with 100000 items',

    b.add('With First Pivot', () => {
        quickSortWithFirstPivot(unsortedList100000);
    }),

    b.add('With Middle Pivot', () => {
        quickSortWithMiddlePivot(unsortedList100000);
    }),

    b.add('With Random Pivot', () => {
        quickSortWithRandomPivot(unsortedList100000);
    }),

    b.cycle(),
    b.complete(),
);
