const INF = Number.MAX_SAFE_INTEGER;

type DijkstraGraph = {
    [node: string]: { [neighbor: string]: number }
}

function dijkstra(graph: DijkstraGraph, start: string) {
    const distances: Record<string, number> = {};
    const visited = new Set<string>();
    const previous: Record<string, string | null> = {};

    for (const node in graph) {
        distances[node] = INF;
        previous[node] = null;
    }

    distances[start] = 0;

    while (visited.size < Object.keys(graph).length) {
        let currentNode: string | null = null;
        let shortestDistance = INF;

        for (const node in graph) {
            if (!visited.has(node) && distances[node] < shortestDistance) {
                shortestDistance = distances[node];
                currentNode = node;
            }
        }

        if (currentNode === null) break;

        visited.add(currentNode);

        for (const neighbor in graph[currentNode]) {
            const newDistance = distances[currentNode] + graph[currentNode][neighbor];

            if (newDistance < distances[neighbor]) {
                distances[neighbor] = newDistance;
                previous[neighbor] = currentNode;
            }
        }
    }

    return { distances, previous }
}

function buildPath(
    previous: Record<string, string | null>,
    target: string
): string[] {
    const path: string[] = []
    let current: string | null = target

    while (current) {
        path.unshift(current)
        current = previous[current]
    }

    return path
}

// const graph: DijkstraGraph = {
//     A: { B: 2, D: 6 },
//     B: { A: 2, C: 3, D: 7 },
//     C: { B: 3, D: 1, E: 5 },
//     D: { A: 6, B: 7, C: 1 },
//     E: { C: 5 },
// }

// const [source, target] = ["B", "E"];
// const { distances, previous } = dijkstra(graph, source);
// console.log(`Distances from '${source}': `, distances);
// console.log(`Path from '${source}' to '${target}': `, buildPath(previous, target));

const graph: DijkstraGraph = {
    Livro: { LP: 5, Poster: 0 },
    Poster: { Baixo: 30, Bateria: 35 },
    LP: { Baixo: 15, Bateria: 20 },
    Bateria: { Piano: 10 },
    Baixo: { Piano: 20 },
    Piano: {},
}

const [source, target] = ["Livro", "Piano"];
const { distances, previous } = dijkstra(graph, source);
console.log(`Distances from '${source}': `, distances);
console.log(`Path from '${source}' to '${target}': `, buildPath(previous, target));