export function intersectionSet<T>(setA: Set<T>, setB: Set<T>) {
    const intersection = new Set<T>();

    setA.forEach(value => {
        if (setB.has(value)) {
            intersection.add(value);
        }
    });

    return intersection;
}
