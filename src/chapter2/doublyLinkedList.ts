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

    getElementsInSequence(): string[] {
        const elements: string[] = [];
        let currentNode = this._head;
        elements.push(currentNode.toString());

        while (currentNode.next != null) {
            currentNode = currentNode.next;
            elements.push(currentNode.toString());
        }

        return elements;
    }

    print(): void {
        const elements = this.getElementsInSequence();

        elements.forEach((element, i) => {
            console.log(`pos: ${i}, elem: ${element}`);
        });
    }
}

const listB = new DoublyLinkedList<Number>();
listB.push(1);
listB.push(2);
listB.push(3);
listB.push(0);
listB.print();
