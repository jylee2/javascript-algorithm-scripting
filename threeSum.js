/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if (s.length === 1) return false

    const temp = []
    for (let i = 0; i < s.length; i++) {
        const currentChar = s.charAt(i)
        const lastInTemp = temp[temp.length - 1]

        if (currentChar === "(") {
            temp.push(currentChar)
        } else if (currentChar === ")") {
            if (lastInTemp === "(") {
                temp.pop()
            } else {
                return false
            }
        } else if (currentChar === "{") {
            temp.push(currentChar)
        } else if (currentChar === "}") {
            if (lastInTemp === "{") {
                temp.pop()
            } else {
                return false
            }
        } else if (currentChar === "[") {
            temp.push(currentChar)
        } else if (currentChar === "]") {
            if (lastInTemp === "[") {
                temp.pop()
            } else {
                return false
            }
        }
    }

    console.log(`temp.length: ${temp.length}, ${s.length % 2}`)
    if (temp.length === 0 && s.length % 2 != 0) {
        return false
    }

    return temp.length === 0




    // const firstChar = s.charAt(0)
    // const lastChar = s.charAt(s.length - 1)

    // if (
    //     (firstChar === "(" && lastChar != ")") ||
    //     (firstChar === "[" && lastChar != "]") ||
    //     (firstChar === "{" && lastChar != "}")
    // ) {
    //     return false
    // }

    // let roundBracketStartCount = 0
    // let roundBracketEndCount = 0
    // let curlyBracketStartCount = 0
    // let curlyBracketEndCount = 0
    // let squareBracketStartCount = 0
    // let squareBracketEndCount = 0

    // let previousChar = ""

    // for (let i = 0; i < s.length; i++) {
    //     const currentChar = s.charAt(i)

    //     if (currentChar === "(") {
    //         roundBracketStartCount += 1
    //     } else if (currentChar === ")") {
    //         if (previousChar === "{" || previousChar === "[") {
    //             return false
    //         }

    //         roundBracketEndCount += 1
    //     } else if (currentChar === "{") {
    //         curlyBracketStartCount += 1
    //     } else if (currentChar === "}") {
    //         if (previousChar === "(" || previousChar === "[") {
    //             return false
    //         }

    //         curlyBracketEndCount += 1
    //     } else if (currentChar === "[") {
    //         squareBracketStartCount += 1
    //         canCloseSquareBracket = true
    //     } else if (currentChar === "]") {
    //         if (previousChar === "(" || previousChar === "{") {
    //             return false
    //         }

    //         squareBracketEndCount += 1
    //     }

    //     if (
    //         squareBracketEndCount > squareBracketStartCount ||
    //         curlyBracketEndCount > curlyBracketStartCount ||
    //         roundBracketEndCount > roundBracketStartCount
    //     ) {
    //         return false
    //     }

    //     previousChar = currentChar
    // }

    // const isValidString = roundBracketStartCount === roundBracketEndCount &&
    //     curlyBracketStartCount === curlyBracketEndCount &&
    //     squareBracketStartCount === squareBracketEndCount
    // return isValidString
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
console.log(`[([]]) : ${isValid("[([]])") === false}`)
console.log(`([}}]) : ${isValid("([}}])") === false}`)
