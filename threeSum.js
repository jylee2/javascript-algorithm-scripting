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

    if (temp.length === 0 && s.length % 2 != 0) {
        return false
    }

    return temp.length === 0
};

// console.log(`() : ${isValid("()") === true}`)
// console.log(`()[]{} : ${isValid("()[]{}") === true}`)
// console.log(`(] : ${isValid("(]") === false}`)
// console.log(`([]) : ${isValid("([])") === true}`)
// console.log(`([)] : ${isValid("([)]") === false}`)
// console.log(`] : ${isValid("]") === false}`)
// console.log(`)(){} : ${isValid(")(){}") === false}`)
// console.log(`[]) : ${isValid("[])") === false}`)
// console.log(`(([]){}) : ${isValid("(([]){})") === true}`)
// console.log(`(){}}{ : ${isValid("(){}}{") === false}`)
// console.log(`[([]]) : ${isValid("[([]])") === false}`)
// console.log(`([}}]) : ${isValid("([}}])") === false}`)
