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
    let isTen = false
    for (let i = 0; i < longerString.length; i++) {
        // console.log(`------ i: ${i}, isTen: ${isTen}, ${shorterString} : ${shorterString.charAt(longerString.length - 1 - i)}, ${longerString} : ${longerString.charAt(longerString.length - 1 - i)}`)

        if (isTen) {
            isTen = false

            // Previously added "10" to the front of result
            if (
                (shorterString.charAt(longerString.length - 1 - i) === "1" && longerString.charAt(longerString.length - 1 - i) === "0") ||
                (shorterString.charAt(longerString.length - 1 - i) === "0" && longerString.charAt(longerString.length - 1 - i) === "1")
            ) {
                result = result.slice(1) // remove the "1" at the front
                result = "10" + result
                isTen = true
                continue
            }

            continue
        }

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
            result = "10" + result
            isTen = true
        }

    }

    return result
};

console.log(`"11", "1" : ${addBinary("11", "1") == "100"}, ${addBinary("11", "1")}`)
console.log(`"1010", "1011" : ${addBinary("1010", "1011") == "10101"}, ${addBinary("1010", "1011")}`)
console.log(`"1", "111" : ${addBinary("1", "111") == "1000"}, ${addBinary("1", "111")}`)
