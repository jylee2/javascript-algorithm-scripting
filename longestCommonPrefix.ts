function getCommonPrefix(first: string, second: string): string {
    const firstArray = first.split("")
    const firstSet = new Set(firstArray)
    const secondArray = second.split("")
    const secondSet = new Set(secondArray)

    let firstRes: string[] = []
    for (let i = 0; i < firstArray.length; i++) {
        const currentChar = firstArray[i]
        const isCommon = secondArray[i] == currentChar
        if (isCommon) {
            firstRes.push(currentChar)
        } else {
            break
        }
    }

    return firstRes.join("")
}


function longestCommonPrefix(strs: string[]): string {
    let result: string = strs[0]

    if (strs.length == 1) {
        if (strs[0].length == 1) {
            return strs[0]
        }
        return result
    }

    for (let i = 1; i < strs.length; i++) {
        const currentConsonants: string = strs[i]
        const commonChars = getCommonPrefix(result, currentConsonants)
        result = commonChars
    }

    return result
};