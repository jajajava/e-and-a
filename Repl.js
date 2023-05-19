function solver(base, exp) {
    let newBase = 1
    for (let i = exp; i > 0; i--) {
        newBase = base * newBase
    }
    return newBase
}

console.log(solver(3, 3))