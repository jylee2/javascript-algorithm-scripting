/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    if (digits[digits.length - 1] < 9) {
        digits[digits.length - 1] = digits[digits.length - 1] + 1
        return digits
    }

    // digits[digits.length - 1] === 9

    if (digits.length === 1) {
        return [1, 0]
    }

    for (let i = 0; i < digits.length; i++) {
        if (digits[digits.length - i] === 9 || digits[digits.length - i] === 10) {
            digits[digits.length - i] = 0
            digits[digits.length - i - 1] = digits[digits.length - i - 1] + 1
        }
    }

    if (digits[0] === 10) {
        digits[0] = 0
        digits.unshift(1)
    }

    return digits
};

console.log(`[1,2,3] : ${plusOne([1,2,3])}`)
console.log(`[4,3,2,1] : ${plusOne([4,3,2,1])}`)
console.log(`[9] : ${plusOne([9])}`)
console.log(`[6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3] : ${plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3])}`)
console.log(`[9,9] : ${plusOne([9,9])}`)
console.log(`[9,9,9] : ${plusOne([9,9,9])}`)
console.log(`[9,9,9,9] : ${plusOne([9,9,9,9])}`)
console.log(`[9,8,9] : ${plusOne([9,8,9])}`)
