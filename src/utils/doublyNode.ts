export default class DoublyNode<T> {
    previous: DoublyNode<T>;
    element: T;
    next: DoublyNode<T>;

    constructor(element: T) {
        this.element = element;
    }

    toString(): string {
        return `${this.element}`;
    }
}
