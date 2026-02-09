import { Graph } from "./graph";

const VertexState = {
    UNVISITED: 1,
    VISITED: 2,
    EXPLORED: 3,
};

type vertexStateMap = { [vertex: string]: number };

function initializeVerticesStateMap(vertices: string[]) {
    const verticesStateMap: vertexStateMap = {};
    for (const vertex of vertices) {
        verticesStateMap[vertex] = VertexState.UNVISITED;
    }
    return verticesStateMap;
}

function depthFirstSearch(graph: Graph, callback: Function) {
    const vertices = graph.getVertices();
    const adjList = graph.getAdjList();
    const verticesStateMap = initializeVerticesStateMap(vertices);

    for (const vertex of vertices) {
        if (verticesStateMap[vertex] === VertexState.UNVISITED) {
            depthFirstSearchVisit(vertex, verticesStateMap, adjList, callback);
        }
    }
}

function depthFirstSearchVisit(u: string, verticesStateMap: vertexStateMap, adjList: Map<string, string[]>, callback: Function) {
    verticesStateMap[u] = VertexState.VISITED;

    if (callback) {
        callback(u);
    }

    const neighbors = adjList.get(u) || [];
    for (const w of neighbors) {
        if (verticesStateMap[w] === VertexState.UNVISITED) {
            depthFirstSearchVisit(w, verticesStateMap, adjList, callback);
        }
    }

    verticesStateMap[u] = VertexState.EXPLORED;
}

/**
 * Find salesperson car
 */

const graph = new Graph();
const myVertices = ['gabriel', 'alice', 'bob', 'claire', 'anuj', 'peggy', 'thom', 'jonny'];

for (const vertex of myVertices) {
    graph.addVertex(vertex);
}

graph.addEdge('gabriel', 'alice');
graph.addEdge('gabriel', 'bob');
graph.addEdge('gabriel', 'claire');
graph.addEdge('bob', 'anuj');
graph.addEdge('bob', 'peggy');
graph.addEdge('alice', 'peggy');
graph.addEdge('claire', 'thom');
graph.addEdge('claire', 'jonny');

const isCarSalesperson = (name: string) => {
    if (name.endsWith('m')) {
        console.log(`${name} is a car salesperson`);
    }
}

depthFirstSearch(graph, isCarSalesperson);