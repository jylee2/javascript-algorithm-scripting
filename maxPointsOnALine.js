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

                console.log(`slope: ${slope}, intercept: ${intercept}`)

                if (tempMap[`${slope}-${intercept}`]) {
                    tempMap[`${slope}-${intercept}`] = tempMap[`${slope}-${intercept}`] + 1
                } else {
                    tempMap[`${slope}-${intercept}`] = 1
                }
            }
        }
    }

    console.log(`---Object.values(tempMap): ${Object.values(tempMap)}`)
    const maxValue = Math.max(...Object.values(tempMap))
    return maxValue
};

console.log(`[[1,1],[2,2],[3,3]] : ${maxPoints([[1,1],[2,2],[3,3]]) === 3}, ${maxPoints([[1,1],[2,2],[3,3]])}`)
console.log(`[[1,1],[3,2],[5,3],[4,1],[2,3],[1,4]] : ${maxPoints([[1,1],[3,2],[5,3],[4,1],[2,3],[1,4]]) === 4}, ${maxPoints([[1,1],[3,2],[5,3],[4,1],[2,3],[1,4]])}`)