/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if (s.length === 1) return false
    const firstChar = s.charAt(0)

    let roundBracketStartCount = 0
    let roundBracketEndCount = 0
    let curlyBracketStartCount = 0
    let curlyBracketEndCount = 0
    let squareBracketStartCount = 0
    let squareBracketEndCount = 0

    // let canCloseRoundBracket = false
    // let canCloseCurlyBracket = false
    // let canCloseSquareBracket = false

    let previousChar = ""

    // if (firstChar === "(") {
    //     canCloseRoundBracket = true
    // } else if (firstChar === "{") {
    //     canCloseCurlyBracket = true
    // } else if (firstChar === "[") {
    //     canCloseSquareBracket = true
    // }

    for (let i = 0; i < s.length; i++) {
        const currentChar = s.charAt(i)

        if (currentChar === "(") {
            roundBracketStartCount += 1
            // canCloseRoundBracket = true
        } else if (currentChar === ")") {
            if (previousChar === "{" || previousChar === "[") {
                return false
            }

            // if (canCloseRoundBracket) {
                roundBracketEndCount += 1
                // canCloseRoundBracket = false
            // }
        } else if (currentChar === "{") {
            curlyBracketStartCount += 1
            // canCloseCurlyBracket = true
        } else if (currentChar === "}") {
            if (previousChar === "(" || previousChar === "[") {
                return false
            }

            // if (canCloseCurlyBracket) {
                curlyBracketEndCount += 1
                // canCloseCurlyBracket = false
            // }
        } else if (currentChar === "[") {
            squareBracketStartCount += 1
            canCloseSquareBracket = true
        } else if (currentChar === "]") {
            if (previousChar === "(" || previousChar === "{") {
                return false
            }

            // if (canCloseSquareBracket) {
                squareBracketEndCount += 1
                // canCloseSquareBracket = false
            // }
        }

        previousChar = currentChar
    }

    const isValidString = roundBracketStartCount === roundBracketEndCount &&
        curlyBracketStartCount === curlyBracketEndCount &&
        squareBracketStartCount === squareBracketEndCount
    return isValidString
};

console.log(`() : ${isValid("()") === true}`)
console.log(`()[]{} : ${isValid("()[]{}") === true}`)
console.log(`(] : ${isValid("(]") === false}`)
console.log(`([]) : ${isValid("([])") === true}`)
console.log(`([)] : ${isValid("([)]") === false}`)
console.log(`] : ${isValid("]") === false}`)
console.log(`)(){} : ${isValid(")(){}") === false}`)
console.log(`[]) : ${isValid("[])") === false}`)
console.log(`(([]){}) : ${isValid("(([]){})") === true}`)
