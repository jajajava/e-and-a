// function solver(base, exp) {
//     let newBase = 1
//     for (let i = exp; i > 0; i--) {
//         newBase = base * newBase             //* This function takes a base and exponent and does the math. Easier to just do "**", but this is just another option
//     }
//     return newBase
// }

// console.log(solver(3, 3))


// function fib(first, second, end) {
//     let holder = [first, second]         //* If you wanted to, you could remove "first"/"second" parameters and replace the holder with [1, 1] to start out.
//     for (let i = first; i <= end; i++) {
//         holder.push(holder[holder.length - 1] + holder[holder.length - 2])  //* This function is the fibonacci sequence, a very famous example of recursion in math
//     }
//     return holder
// }

// console.log(fib(1, 1, 1000))

// function fibRecurve(n) {
//     if (n <= 0) {
//         console.log('Done!')
//     } else {                                //* This function is the recursive function for the fib() function. It calls itself several times,
//         console.log(fib(1, 1, n + 1))       //* which in turn executes fib until condition met (called n times)
//         return fibRecurve(n - 1)
//     }
// }

// console.log(fibRecurve(4))

// function recursive(num) {
//     if (num == 0) {
//         console.log("All done!")         //* Just a recursive function counting down even numbers
//         return
//     }
//     num % 2 == 0 ? console.log(num) : null
//     num -= 1
//     recursive(num)

// }

// recursive(10)

// function fizzBuzz(num) {
//     for (let i = 1; i <= num; i++) {
//         if (i % 3 === 0 && i % 5 === 0) {
//             console.log(i, "FizzBuzz")
//         } else if (i % 3 === 0) {            //* FizzBuzz algorithm
//             {
//                 console.log(i, "Fizz")
//             }
//         } else if (i % 5 === 0) {
//             console.log(i, "Buzz")
//         } else {
//             console.log(i)
//         }

//     }

// }

// fizzBuzz(45)