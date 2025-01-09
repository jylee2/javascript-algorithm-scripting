/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let shorterString = a
    let longerString = b
    if (b.length < a.length) {
        shorterString = b
        longerString = a
    }

    for (let i = 0; i < longerString.length; i++) {
        if (shorterString.length < longerString.length) {
            shorterString = "0" + shorterString
        }
        if (shorterString.length === longerString.length) {
            break
        }
    }

    let result = ""
    let skip = false
    for (let i = 0; i < longerString.length; i++) {
        if (skip) {
            skip = false
            continue
        }

        console.log(`------ i: ${i}, ${shorterString} : ${shorterString.charAt(longerString.length - 1 - i)}, ${longerString} : ${longerString.charAt(longerString.length - 1 - i)}`)

        if (shorterString.charAt(longerString.length - 1 - i) === "0" && longerString.charAt(longerString.length - 1 - i) === "0") {
            result = "0" + result
            continue
        }

        if (
            (shorterString.charAt(longerString.length - 1 - i) === "1" && longerString.charAt(longerString.length - 1 - i) === "0") ||
            (shorterString.charAt(longerString.length - 1 - i) === "0" && longerString.charAt(longerString.length - 1 - i) === "1")
        ) {
            result = "1" + result
            continue
        }

        if (shorterString.charAt(longerString.length - 1 - i) === "1" && longerString.charAt(longerString.length - 1 - i) === "1") {
            if (
                (shorterString.charAt(longerString.length - 2 - i) === "0" && longerString.charAt(longerString.length - 2 - i) === "0") ||
                longerString.length - 2 - i < 0
            ) {
                result = "10" + result
                skip = true
                continue
            }

            if (
                (shorterString.charAt(longerString.length - 2 - i) === "1" && longerString.charAt(longerString.length - 2 - i) === "0") ||
                (shorterString.charAt(longerString.length - 2 - i) === "0" && longerString.charAt(longerString.length - 2 - i) === "1")
            ) {
                result = "100" + result
                skip = true
                continue
            }
        }

    }

    return result
};

console.log(`"11", "1" : ${addBinary("11", "1") == "100"}, ${addBinary("11", "1")}`)
console.log(`"1010", "1011" : ${addBinary("1010", "1011") == "10101"}, ${addBinary("1010", "1011")}`)
