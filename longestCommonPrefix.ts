function getCommonCharacters(first: string, second: string): string {
    const firstArray = first.split("")
    const firstSet = new Set(firstArray)
    const secondArray = second.split("")
    const secondSet = new Set(secondArray)

    let firstRes: string[] = []
    for (let i = 0; i < firstArray.length; i++) {
        const currentChar = firstArray[i]
        const charExists = secondSet.has(currentChar)
        console.log(`charExists: ${charExists}, currentChar: ${currentChar}`)
        if (charExists) {
            firstRes.push(currentChar)
        }
    }
    console.log(`firstRes: ${firstRes}`)

    let secondRes: string[] = []
    for (let i = 0; i < secondArray.length; i++) {
        const currentChar = secondArray[i]
        const charExists = firstSet.has(currentChar)
        if (charExists) {
            secondRes.push(currentChar)
        }
    }
    console.log(`secondRes: ${secondRes}`)

    if (firstRes.length < secondRes.length) {
        return firstRes.join("")
    }

    if (secondRes.length < firstRes.length) {
        return secondRes.join("")
    }

    return firstRes.join("")

    //

    // let tempObject = {}
    // let combinedString: string = first.concat(second)
    // let result: string = ""
    
    // for (let i = 0; i < combinedString.length; i++) {
    //     const currentChar = combinedString.charAt(i)
    //     const charExists = tempObject[currentChar]

    //     if (charExists) {
    //         result.concat(currentChar)
    //     }

    //     tempObject[currentChar] = true
    // }

    // return Object.keys(tempObject).join("")
}


function longestCommonPrefix(strs: string[]): string {
    let result: string = strs[0].replace(/[aeiou]/ig,'')

    if (strs.length == 1) return result

    for (let i = 1; i < strs.length; i++) {
        const currentConsonants: string = strs[i].replace(/[aeiou]/ig,'')
        const commonChars = getCommonCharacters(result, currentConsonants)
        console.log(`commonChars: ${commonChars}`)

        result = commonChars
        //

        // const combinedString: string = prevConsonants.concat(currentConsonants)

        // let tempObject = {}
        // let tempResults = ""

        // for (let j = 0; j < combinedString.length; j++) {
        //     const currentChar = combinedString.charAt(j)
        //     console.log(tempObject[currentChar])

        //     if (tempObject[currentChar] === 1) {
        //         tempObject[currentChar] = 10
        //         tempResults.concat(currentChar)
        //     }
        //     tempObject[currentChar] = 1
        // }

        // console.log(tempResults)
        // prevConsonants = tempResults
    }

    return result
    //


    // let tempObject = {}
    // let result = ""
    
    // for (let i = 0; i < strs.length; i++) {
    //     const currentConsonants = strs[i].replace(/[aeiou]/ig,'')
    //     const prevConsonants = Object.keys(tempObject)
    //     let matchingConsonants = ""
    //     tempObject = {}
    //     console.log(prevConsonants)

    //     for (let j = 0; j < currentConsonants.length; j++) {
    //         if (prevConsonants.includes(currentConsonants.charAt(j))) {
    //             matchingConsonants.concat(currentConsonants.charAt(j))
    //         }
    //         tempObject[currentConsonants.charAt(j)] = currentConsonants.charAt(j)
    //     }

    //     result = matchingConsonants
    // }

    // return result

    // const firstString = strs[0]
    // let prefix = firstString.replace(/[aeiou]/ig,'')

    // for (let i = 0; i < strs.length; i++) {
    //     const currentString = strs[i]
    //     const consonants = currentString.replace(/[aeiou]/ig,'')

    //     let commonConsonants = getCommonCharacters(prefix, consonants)
    //     prefix = commonConsonants
    // }

    // return prefix
};