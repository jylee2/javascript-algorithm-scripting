// https://www.hackerrank.com/challenges/diagonal-difference/problem?isFullScreen=true
// Given a square matrix, calculate the absolute difference between the sums of its diagonals.

function diagonalDifference(arr) {
    let primaryDiagonalSum = 0
    let secondaryDiagonalSum = 0
    
    for (let i = 0; i < arr.length; i++) {
        primaryDiagonalSum += arr[i][i] || 0
        secondaryDiagonalSum += arr[arr.length - 1 - i][i] || 0
    }

    return Math.abs(primaryDiagonalSum - secondaryDiagonalSum)
}
