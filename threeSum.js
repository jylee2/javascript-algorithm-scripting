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

    let previousChar = ""

    for (let i = 0; i < s.length; i++) {
        const currentChar = s.charAt(i)

        if (currentChar === "(") {
            roundBracketStartCount += 1
        } else if (currentChar === ")") {
            if (previousChar === "{" || previousChar === "[") {
                return false
            }

            roundBracketEndCount += 1
        } else if (currentChar === "{") {
            curlyBracketStartCount += 1
        } else if (currentChar === "}") {
            if (previousChar === "(" || previousChar === "[") {
                return false
            }

            curlyBracketEndCount += 1
        } else if (currentChar === "[") {
            squareBracketStartCount += 1
            canCloseSquareBracket = true
        } else if (currentChar === "]") {
            if (previousChar === "(" || previousChar === "{") {
                return false
            }

            squareBracketEndCount += 1
        }

        if (
            squareBracketEndCount > squareBracketStartCount ||
            curlyBracketEndCount > curlyBracketStartCount ||
            roundBracketEndCount > roundBracketStartCount
        ) {
            return false
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
console.log(`(){}}{ : ${isValid("(){}}{") === false}`)
