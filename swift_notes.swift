//# It seems that Swift might similar to Rust

// Foundation includes how all the basic components of Swift work
import Foundation 

//# Two types of variables in Swift:
//# 1. var - mutable, can have new values assigned
//# 2. let - immutable, can NOT have new values assigned

//# Array: var names = [..., ..., ...]; note that it needs to be "var" if you want to make changes to it later
//# .append(...) lets you add something to the array

// You use ": [Any]" to specify that this array can hold any type of data
// var test: [Any] = [1, 2, 3, "john"]
// print("My name is \(test[3])")  // --> "My name is john"
//# Note the string interpolation syntax; using "\()" you can insert values

//# In Swift, structures are VALUE types, classes are REFERENCE types
//# Note that in other C languages, if you use pointers in the struct you can make it hold references instead of values

//# FUNCTIONS:
//# Declared with "func". Otherwise, syntax almost identical to Rust. EX:
//  func methodName (parameterName: Int) -> Int {
        // Returns this value b/c no semicolon. However with this syntax you cannot have multiple statements. For that, use "return"
//      parameterName + 2
//  }
//# NOTE: When you call a function in swift, you do it like so: methodName(param1: "John", param2: "Doe")
//# NOTE: Function overloading IS supported in Swift

//# INTERFACES:
//# In Swift, they're called "protocols". You create the blueprint, then have to implement them later. EX:
// protocol Greetable {
//     func greet()
// }

// (USED TO PROVIDE DEFAULT IMPLEMENTATION FOR GREET() )
// extension Greetable {
//     func greet() {
//         print("Hello!")
//     }
// }