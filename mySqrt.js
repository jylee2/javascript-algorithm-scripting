/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let result = Math.floor(Math.sqrt(x))
    return result
};

console.log(`8 : ${mySqrt(8) === 2}`)