/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    let haystackArray = haystack.split("")
    let needleArray = needle.split("")

    for (let i = 0; i < haystack.length; i++) {
        const partOfHaystack = haystackArray.slice(i, needleArray.length)
        if (partOfHaystack.join("") === needle) {
            return i
        }
    }

    return -1
};

console.log(`"sadbutsad", "sad" : ${strStr("sadbutsad", "sad") === 0}`)
console.log(`"leetcode", "leeto" : ${strStr("leetcode", "leeto") === -1}`)
console.log(`"hello", "ll" : ${strStr("hello", "ll") === 2}`)