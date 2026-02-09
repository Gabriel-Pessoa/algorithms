export class Graph {
    private isDirected: boolean;
    private vertices: string[]
    private adjList: Map<string, string[]>

    constructor(isDirected = false) {
        this.isDirected = isDirected;
        this.vertices = [];
        this.adjList = new Map<string, string[]>();
    }

    addVertex(v: string) {
        if (!this.vertices.includes(v)) {
            this.vertices.push(v)
            this.adjList.set(v, []);
        }
    }

    addEdge(v: string, w: string) {
        if (!this.adjList.has(v)) {
            this.addVertex(v);
        }

        if (!this.adjList.has(w)) {
            this.addVertex(w);
        }

        this.adjList.get(v)?.push(w);

        if (!this.isDirected) {
            this.adjList.get(w)?.push(v);
        }
    }

    getVertices() {
        return this.vertices;
    }

    getAdjList() {
        return this.adjList;
    }


    toString() {
        let s = '';
        for (let i = 0; i < this.vertices.length; i++) {
            s += `${this.vertices[i]} -> `;
            const neighbors = this.adjList.get(this.vertices[i]) || [];
            for (let j = 0; j < neighbors.length; j++) {
                s += `${neighbors[j]} `;
            }
            s += '\n';
        }
        return s;
    }
}

// const graph = new Graph();
// const myVertices = ['gabriel', 'alice', 'bob', 'claire', 'anuj', 'peggy', 'thom', 'jonny'];

// for (const vertex of myVertices) {
//     graph.addVertex(vertex);
// }

// graph.addEdge('gabriel', 'alice');
// graph.addEdge('gabriel', 'bob');
// graph.addEdge('gabriel', 'claire');
// graph.addEdge('bob', 'anuj');
// graph.addEdge('bob', 'peggy');
// graph.addEdge('alice', 'peggy');
// graph.addEdge('claire', 'thom');
// graph.addEdge('claire', 'jonny');

// console.log(graph.toString());