// https://www.hackerrank.com/challenges/compare-the-triplets/problem?isFullScreen=true

function compareTriplets(a, b) {
    const results = [0, 0]
    
    for (let i = 0; i < 3; i++) {
        if (a[i] > b[i]) {
            results[0] += 1
        } else if (a[i] < b[i]) {
            results[1] += 1
        }
    }
    
    return results
}
