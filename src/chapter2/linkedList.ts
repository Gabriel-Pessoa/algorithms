import Node from "../utils/node";

/**
 * Read: O(n),
 * Insertion: O(n)
 */
export class LinkedList<T> {
    private _head: Node<T>;
    protected _size = 0;

    protected isFirstInsertion(): boolean {
        return this.isEmpty() === true;
    }

    push(element: T): void {
        const node = new Node(element);

        if (this.isFirstInsertion()) {
            this._head = node;

        } else {
            let current = this._head;

            while (current.next != null) {
                current = current.next
            }

            current.next = node;
        }

        this._size++;
    }

    isEmpty(): boolean {
        return this.getSize() === 0;
    }

    getSize(): number {
        return this._size;
    }

    toString(): string {
        if (this.isEmpty()) return '';

        let objString = this._head.toString();
        let currentNode = this._head.next;

        for (let i = 1; i < this.getSize() && currentNode != null; i++) {
            objString = `${objString},${currentNode.toString()}`;
            currentNode = currentNode.next;
        }

        return objString;
    }
}

// const listA = new LinkedList<Number>();
// listA.push(1);
// listA.push(2);
// listA.push(3);
// console.log(listA.toString());
