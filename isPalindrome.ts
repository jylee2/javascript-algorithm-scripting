function isPalindrome(x: number): boolean {
    if (x < 0) {
        return false
    }

    const numAsString = x.toString()
    if (numAsString.length == 1) {
        return true
    }

    for (let i = 0; i < numAsString.length; i++) {
        const frontIndex = i
        const backIndex = numAsString.length - 1 - i

        const frontNumber = numAsString.charAt(frontIndex)
        const backNumber = numAsString.charAt(backIndex)
        if (frontNumber != backNumber) {
            return false
        }
    }

    return true
};
