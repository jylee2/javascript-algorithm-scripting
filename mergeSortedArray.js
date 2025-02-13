/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    
    let firstPointer = m - 1
    let secondPointer = n - 1
    let i = m + n - 1

    while(secondPointer >= 0) {
        let firstValue = nums1[firstPointer]
        let secondValue = nums2[secondPointer]

        if (firstValue > secondValue) {
            nums1[i] = firstValue
            i--
            firstPointer--
            continue
        }

        nums1[i] = secondValue
        i--
        secondPointer--
    }

    return nums1
};

console.log(`1 : ${merge([1,2,3,0,0,0], 3, [2,5,6], 3)}`)
