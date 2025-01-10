function nthFibonacci(n){
    // Base case: if n is 0 or 1, return n
    if (n <= 1) {
        return n;
    }
    
    // Recursive case: sum of the two preceding Fibonacci
    // numbers
    return nthFibonacci(n - 1) + nthFibonacci(n - 2);
}

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if (n == 1) return 1
    return nthFibonacci(n + 1)
};

console.log(`1 : ${climbStairs(1) === 1}, ${climbStairs(1)}`)
console.log(`2 : ${climbStairs(2) === 2}, ${climbStairs(2)}`)
console.log(`3 : ${climbStairs(3) === 3}, ${climbStairs(3)}`)
console.log(`4 : ${climbStairs(4) === 5}, ${climbStairs(4)}`)
console.log(`5 : ${climbStairs(5) === 8}, ${climbStairs(5)}`)