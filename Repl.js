// function solver(base, exp) {
//     let newBase = 1
//     for (let i = exp; i > 0; i--) {
//         newBase = base * newBase             // This function takes a base and exponent and does the math. Easier to just do "**", but this is just another option
//     }
//     return newBase
// }

// console.log(solver(3, 3))


function fib(first, second, end) {
    let holder = [first, second]
    for (let i = first; i <= end; i++) {
        holder.push(holder[holder.length - 1] + holder[holder.length - 2])  // This function is the fibonacci sequence, a very famous example of recursion in math
    }
    return holder
}

console.log(fib(1, 1, 1000))