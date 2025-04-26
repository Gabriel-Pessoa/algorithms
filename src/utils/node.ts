export default class Node<T> {
    element: T;
    next: Node<T>;

    constructor(element: T) {
        this.element = element;
    }

    toString(): string {
        return `${this.element}`;
    }
}
