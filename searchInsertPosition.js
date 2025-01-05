/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    if (nums[0] === target) {
        return 0
    }
    if (nums[0] > target) {
        return 0
    }
    if (nums[nums.length - 1] < target) {
        return nums.length
    }
    if (nums[nums.length - 1] === target) {
        return nums.length - 1
    }

    let leftIndex = Math.floor(nums.length / 2)
    let rightIndex = Math.floor(nums.length / 2)

    for (let i = 0; i < nums.length; i++) {
        if (nums[leftIndex] === target) {
            return leftIndex
        }

        if (nums[leftIndex - 1] < target && target < nums[leftIndex]) {
            return leftIndex
        }

        if (nums[leftIndex - 1] === target) {
            return leftIndex - 1
        }

        if (nums[rightIndex] === target) {
            return rightIndex
        }

        if (nums[rightIndex - 1] < target && target < nums[rightIndex]) {
            return rightIndex
        }

        leftIndex = Math.floor(leftIndex / 2)
        rightIndex = Math.floor(nums.length - rightIndex / 2)
    }

    return leftIndex
};

console.log(`[1,3,5,6], 5 : ${searchInsert([1,3,5,6], 5) === 2}, ${searchInsert([1,3,5,6], 5)}`)
console.log(`[1,3,5,6], 2 : ${searchInsert([1,3,5,6], 2) === 1}, ${searchInsert([1,3,5,6], 2)}`)
console.log(`[1,3,5,6], 7 : ${searchInsert([1,3,5,6], 7) === 4}, ${searchInsert([1,3,5,6], 7)}`)
console.log(`[1,3,5,6], 0 : ${searchInsert([1,3,5,6], 0) === 0}, ${searchInsert([1,3,5,6], 0)}`)
console.log(`[1], 1 : ${searchInsert([1], 1) === 0}, ${searchInsert([1], 1)}`)
console.log(`[1,3,5], 4 : ${searchInsert([1,3,5], 4) === 2}, ${searchInsert([1,3,5], 4)}`)
console.log(`[1,4,6,7,8,9], 6 : ${searchInsert([1,4,6,7,8,9], 6) === 2}, ${searchInsert([1,4,6,7,8,9], 6)}`)
console.log(`[1,2,4,6,8,9,10], 10 : ${searchInsert([1,2,4,6,8,9,10], 10) === 6}, ${searchInsert([1,2,4,6,8,9,10], 10)}`)