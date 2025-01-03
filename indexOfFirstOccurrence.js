/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if (!haystack.includes(needle)) return -1

    let haystackArray = haystack.split("")
    let needleArray = needle.split("")

    for (let i = 0; i < haystack.length; i++) {
        const partFromLeft = haystackArray.slice(i, i + needleArray.length)
        if (partFromLeft.join("") === needle) {
            return i
        }
    }

    return -1
};

console.log(`"sadbutsad", "sad" : ${strStr("sadbutsad", "sad") === 0}`)
console.log(`"leetcode", "leeto" : ${strStr("leetcode", "leeto") === -1}`)
console.log(`"hello", "ll" : ${strStr("hello", "ll") === 2}`)