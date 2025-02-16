/**
 * @param {character[][]} grid
 * @return {number}
 */

const buildGraph = (size, edges) => {
    const graph = Array.from({
            length: size
        },
        () => []
    )

    for (let edge of edges) {
        let [key, value] = edge
        graph[key].push(value)
    }

    return graph
}

const breadthFirstSearch = (graph, start) => {
    const queue = [start]
    const visited = new Set()

    while (queue.length) {
        const currentNode = queue.shift()

        if (!visited.has(currentNode)) {
            visited.add(currentNode)

            for (let neighbour of graph[currentNode]) {
                if (!visited.has(neighbour)) {
                    queue.push(neighbour)
                }
            }
        }
    }
}

var numIslands = function (grid) {
    let islands = 0;
    const visited = new Set();
    const rows = grid.length;
    const cols = grid[0].length;

    const bfs = (r, c) => {
        const q = [];
        visited.add(`${r},${c}`);
        q.push([r, c]);

        while (q.length > 0) {
            const [row, col] = q.shift();
            const directions = [
                [1, 0],
                [-1, 0],
                [0, 1],
                [0, -1]
            ];

            for (const [dr, dc] of directions) {
                const nr = row + dr;
                const nc = col + dc;
                if (nr >= 0 && nr < rows && nc >= 0 && nc < cols && grid[nr][nc] === "1" && !visited.has(`${nr},${nc}`)) {
                    q.push([nr, nc]);
                    visited.add(`${nr},${nc}`);
                }
            }
        }
    };

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (grid[r][c] === "1" && !visited.has(`${r},${c}`)) {
                islands += 1;
                bfs(r, c);
            }
        }
    }

    return islands;
};

console.log(`${numIslands([
    ["1","1","1","1","0"],
    ["1","1","0","1","0"],
    ["1","1","0","0","0"],
    ["0","0","0","0","0"]
])}`)
console.log(`${numIslands([
    ["1","1","0","0","0"],
    ["1","1","0","0","0"],
    ["0","0","1","0","0"],
    ["0","0","0","1","1"]
  ])}`)