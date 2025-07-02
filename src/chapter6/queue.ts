export class Queue<T> {
    private queue: Array<T> = [];

    enqueue(element: T) {
        this.queue.push(element);
    }

    enqueueInBatch(...elements: T[]) {
        this.queue.push(...elements);
    }

    dequeue(): T | undefined {
        return this.queue.shift();
    }

    isEmpty(): boolean {
        return this.size() === 0;
    }

    size(): number {
        return this.queue.length;
    }
}

type NumberDictionary<T> = {
    [index: number]: T;
};

export class QueueOptimized<T> {
    private queue: NumberDictionary<T> = {};
    private count: number = 0;
    private lowestCount: number = 0;

    enqueue(element: T) {
        this.queue[this.count] = element;
        this.count++;
    }

    enqueueInBatch(...elements: T[]) {
        for (const elem of elements) {
            this.enqueue(elem);
        }
    }

    dequeue(): T | undefined {
        if (this.isEmpty()) {
            return undefined;
        }

        const element = this.queue[this.lowestCount];
        this.lowestCount++

        return element;
    }

    isEmpty(): boolean {
        return this.size() === 0;
    }

    size(): number {
        return this.count - this.lowestCount;
    }

    clear() {
        this.queue = {};
        this.count = 0;
        this.lowestCount = 0;
    }
}
