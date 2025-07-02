import b from 'benny';
import { Queue, QueueOptimized } from './queue'
import { generateSortedList } from '../utils/sortedList'

const sortedList100 = generateSortedList(100);
const sortedList1000 = generateSortedList(1000);
const sortedList10000 = generateSortedList(10000);

b.suite(
    'Queue: enqueue and dequeue with 100 items',

    b.add('With Basic Queue', () => {
        const basicQueue = new Queue<number>();
        basicQueue.enqueueInBatch(...sortedList100);

        while (basicQueue.isEmpty() === false) {
            basicQueue.dequeue();
        }
    }),

    b.add('With Queue Optimized', () => {
        const queueOptimized = new QueueOptimized<number>();
        queueOptimized.enqueueInBatch(...sortedList100);

        while (queueOptimized.isEmpty() === false) {
            queueOptimized.dequeue();
        }
    }),

    b.cycle(),
    b.complete(),
);

b.suite(
    'Queue: enqueue and dequeue with 1000 items',

    b.add('With Basic Queue', () => {
        const basicQueue = new Queue<number>();
        basicQueue.enqueueInBatch(...sortedList1000);

        while (basicQueue.isEmpty() === false) {
            basicQueue.dequeue();
        }
    }),

    b.add('With Queue Optimized', () => {
        const queueOptimized = new QueueOptimized<number>();
        queueOptimized.enqueueInBatch(...sortedList1000);

        while (queueOptimized.isEmpty() === false) {
            queueOptimized.dequeue();
        }
    }),

    b.cycle(),
    b.complete(),
);

b.suite(
    'Queue: enqueue and dequeue with 10000 items',

    b.add('With Basic Queue', () => {
        const basicQueue = new Queue<number>();
        basicQueue.enqueueInBatch(...sortedList10000);

        while (basicQueue.isEmpty() === false) {
            basicQueue.dequeue();
        }
    }),

    b.add('With Queue Optimized', () => {
        const queueOptimized = new QueueOptimized<number>();
        queueOptimized.enqueueInBatch(...sortedList10000);

        while (queueOptimized.isEmpty() === false) {
            queueOptimized.dequeue();
        }
    }),

    b.cycle(),
    b.complete(),
);
