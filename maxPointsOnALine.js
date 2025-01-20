function getSlope(y2, y1, x2, x1) {
    if (x2 - x1 === 0) {
        return null
    }

    if (y2 - y1 === 0) {
        return null
    }

    return (y2 - y1) / (x2 - x1)
}

// y = mx + c
function getIntercept(y, slope, x) {
    return y - (slope * x)
}

/**
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function(points) {
    if (points.length === 1) {
        return 1
    }

    let tempMap = {}

    for (let i = 0; i < points.length; i++) {
        for (let j = 0; j < points.length; j++) {
            if (j > i) {
                const y2 = points[j][1]
                const y1 = points[i][1]
                const x2 = points[j][0]
                const x1 = points[i][0]
                let slope = getSlope(y2, y1, x2, x1)

                if (!slope) {
                    slope = getSlope(y1, y2, x1, x2)
                }
                if (!slope) {
                    continue
                }

                const intercept = getIntercept(y1, slope, x1)

                if (!tempMap[`${slope}-${intercept}`]) {
                    tempMap[`${slope}-${intercept}`] = [{x: x1, y: y1}, {x: x2, y: y2}]
                } else {
                    tempMap[`${slope}-${intercept}`].push({x: x1, y: y1})
                    tempMap[`${slope}-${intercept}`].push({x: x2, y: y2})
                }
            }
        }
    }

    let pointsWithSameSlope = []
    Object.values(tempMap).forEach(array => {
        const flattened = array.flat()
        if (flattened.length > pointsWithSameSlope.length) {
            pointsWithSameSlope = flattened
        }
    })

    let tempMap2 = {}
    pointsWithSameSlope.forEach(pos => {
        tempMap2[`${pos.x}-${pos.y}`] = pos
    })

    const maxValue = Object.keys(tempMap2).length
    return maxValue
};

console.log(`[[1,1],[2,2],[3,3]] : ${maxPoints([[1,1],[2,2],[3,3]])}, should be 3`)
console.log(`=====================`)
console.log(`[[1,1],[3,2],[5,3],[4,1],[2,3],[1,4]] : ${maxPoints([[1,1],[3,2],[5,3],[4,1],[2,3],[1,4]])}, should be 4`)
console.log(`=====================`)
console.log(`[[0,0]] : ${maxPoints([[0,0]])}, should be 1`)