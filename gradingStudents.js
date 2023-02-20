// https://www.hackerrank.com/challenges/grading/problem?isFullScreen=true

// return grades after rounding as appropriate

export function gradingStudents(grades) {
    return grades.map(g => {
        if (g < 38) return g
        
        if ((g + 1) % 5 === 0) return g + 1
        if ((g + 2) % 5 === 0) return g + 2
        
        return g
    })
}
