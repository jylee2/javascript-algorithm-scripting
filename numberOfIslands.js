/**
 * @param {character[][]} grid
 * @return {number}
 */

var numIslands = function (grid) {
    let numberOfIslands = 0
    const visited = new Set()
    const rows = grid.length
    const columns = grid[0].length

    const isIsland = (row, column) => {
        return grid[row][column] === "1" &&
            !visited.has(`${row},${column}`)
    }

    const isWithinGrid = (row, column) => {
        return row >= 0 &&
            row < rows &&
            column >= 0 &&
            column < columns
    }

    const breadthFirstSearch = (row, column) => {
        const north = [0, -1]
        const south = [0, 1]
        const east = [1, 0]
        const west = [-1, 0]
        const searchDirections = [north, south, east, west]

        const queue = []
        queue.push([row, column])
        visited.add(`${row},${column}`)

        while (queue.length) {
            const [currentRow, currentCol] = queue.shift()

            for (let direction of searchDirections) {
                const [x, y] = direction
                const tempRow = currentRow + x
                const tempCol = currentCol + y

                if (
                    isWithinGrid(tempRow, tempCol) &&
                    grid[tempRow]?.[tempCol] === "1" &&
                    !visited.has(`${tempRow},${tempCol}`)
                ) {
                    queue.push([tempRow, tempCol])
                    visited.add(`${tempRow},${tempCol}`)
                }
            }
        }
    }

    for (let row = 0; row < rows; row++) {
        for (let column = 0; column < columns; column++) {
            if (isIsland(row, column)) {
                breadthFirstSearch(row, column)
                numberOfIslands++
            }
        }
    }

    return numberOfIslands
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