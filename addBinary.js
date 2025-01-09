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

    if (!a.includes("1") && !b.includes("1")) {
        let result = ""
        
        for (let i = 0; i < longerString.length; i++) {
            result = "0" + result
        }

        return result
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
        // Previously added "10" to the front of result
        if (isTen) {
            isTen = false

            if (
                (shorterString.charAt(longerString.length - 1 - i) === "1" && longerString.charAt(longerString.length - 1 - i) === "0") ||
                (shorterString.charAt(longerString.length - 1 - i) === "0" && longerString.charAt(longerString.length - 1 - i) === "1")
            ) {
                result = result.slice(1) // remove the "1" at the front
                result = "10" + result
                isTen = true
                continue
            }

            if (shorterString.charAt(longerString.length - 1 - i) === "1" && longerString.charAt(longerString.length - 1 - i) === "1") {
                result = result.slice(1) // remove the "1" at the front
                result = "11" + result
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

console.log(`"11", "1" = "100" : ${addBinary("11", "1") == "100"}, ${addBinary("11", "1")}`)
console.log(`"1010", "1011" = "10101" : ${addBinary("1010", "1011") == "10101"}, ${addBinary("1010", "1011")}`)
console.log(`"1", "111" = "1000" : ${addBinary("1", "111") == "1000"}, ${addBinary("1", "111")}`)
console.log(`"1111", "1111" = "11110" : ${addBinary("1111", "1111") == "11110"}, ${addBinary("1111", "1111")}`)
