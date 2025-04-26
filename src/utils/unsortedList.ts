export function generateUnsortedList(size: number): number[] {
    const list: number[] = [];
    for (let i = 0; i < size; i++) {
        const randomNumber = Math.floor(Math.random() * size);
        list.push(randomNumber);
    }
    return list;
}
