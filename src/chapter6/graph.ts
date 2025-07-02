import { Queue } from './queue';

const graph: { [index: string]: Queue<string> } = {
    gabriel: new Queue(),
    bob: new Queue(),
    alice: new Queue(),
    claire: new Queue(),
    anuj: new Queue(),
    peggy: new Queue(),
    thom: new Queue(),
    jonny: new Queue(),
};
graph['gabriel'].enqueueInBatch('alice', 'bob', 'claire');
graph['bob'].enqueueInBatch('anuj', 'peggy');
graph['alice'].enqueue('peggy');
graph['claire'].enqueueInBatch('thom', 'jonny');

function search(name: string): boolean {
    const verified: string[] = [];

    let searchQueue = graph[name];
    while (!searchQueue.isEmpty()) {
        const person = searchQueue.dequeue();

        if (person && !verified.includes(person)) {
            if (isSuffixM(person)) {
                return true;
            } else {
                searchQueue = graph[person];
                verified.push(person);
            }
        }
    }

    return false;
}

console.log(search('gabriel'));

function isSuffixM(src: string): boolean {
    return src.endsWith('m');
}