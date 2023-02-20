// https://www.hackerrank.com/challenges/a-very-big-sum/problem?isFullScreen=true&h_r=next-challenge&h_v=zen
// calculate and print the sum of the elements in an array

function aVeryBigSum(ar) {
    const bigIntTotal = ar.reduce((sum, bigInt) => BigInt(sum) + BigInt(bigInt), 0)
    return Number(bigIntTotal)
}
