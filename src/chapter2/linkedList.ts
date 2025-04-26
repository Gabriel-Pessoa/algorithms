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

const listA = new LinkedList<Number>();
listA.push(1);
listA.push(2);
listA.push(3);
listA.print();
