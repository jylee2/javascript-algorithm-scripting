function nthFibonacci(n){
    const phi = (1 + Math.sqrt(5)) / 2
    const negativePhi = (1 - Math.sqrt(5)) / 2
    
    return (Math.pow(phi, n) - Math.pow(negativePhi, n)) / Math.sqrt(5)
}

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if (n == 1) return 1
    return Math.floor(nthFibonacci(n + 1))
};

console.log(`1 : ${climbStairs(1) === 1}, ${climbStairs(1)}`)
console.log(`2 : ${climbStairs(2) === 2}, ${climbStairs(2)}`)
console.log(`3 : ${climbStairs(3) === 3}, ${climbStairs(3)}`)
console.log(`4 : ${climbStairs(4) === 5}, ${climbStairs(4)}`)
console.log(`5 : ${climbStairs(5) === 8}, ${climbStairs(5)}`)