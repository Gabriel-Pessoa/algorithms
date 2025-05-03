import DoublyNode from "../utils/doublyNode";

/**
 * Read: O(n),
 * Insertion: O(1)
 */
class DoublyLinkedList<T> {
    private _head: DoublyNode<T>;
    private _tail: DoublyNode<T>;
    private _size = 0;

    private isFirstInsertion(): boolean {
        return this.isEmpty() === true;
    }

    push(element: T): void {
        const node = new DoublyNode(element);

        if (this.isFirstInsertion()) {
            this._head = node;
            this._tail = this._head;

        } else {
            this._tail.next = node;
            node.previous = this._tail;
            this._tail = node;
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

    toStringInverse(): string {
        if (this.isEmpty()) return '';

        let objString = this._tail.toString();
        let currentNode = this._tail.previous;

        for (let i = 1; i < this.getSize() && currentNode != null; i++) {
            objString = `${objString},${currentNode.toString()}`;
            currentNode = currentNode.previous;
        }

        return objString;
    }
}

// const listB = new DoublyLinkedList<Number>();
// listB.push(1);
// listB.push(2);
// listB.push(3);
// listB.push(0);
// console.log(listB.toString());
// console.log(listB.toStringInverse());
