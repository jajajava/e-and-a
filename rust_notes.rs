//# The program enters through the main method
//# print! is a macro. Macros are like functions in that they hold blocks of code
//# Macros are different in a few ways- one of them being that macros are processed at compilation, while functions expand into code at runtime
//# Print! replaces the code required to output stuff into the console. It requires a string literal to work, so we put "{}"
//# The "{}" is then replaced by the first value we passed as the next argument; in the case below, adder(1,2) is the value
fn main(){
    let x = 3;
    let y = &x; // Create a reference pointing from y to x
    // Println would add a line break at the end, like System.out.println in Java
    println!("John eats {} apples every {} days", adder(1, 2), adder(2,*y)); // --> "John eats 3 apples every 5 days"
    print!("{}", string_printer("test".to_string()));
}

//# 1. Declare method via "fn" (method name should be in snake_case, like Ruby)
//# 2. Declare parameter types with x: dataType
//# 3. Set a return type for the method with -> dataType before the code block
//# Note: If you have no semicolon, this is an implicit return; no "return" keyword necessary
fn adder(a: i8, b: i8) -> i8 {
    return a + b
}

fn string_printer(a: String) -> String {
    a
}

//# DATA TYPES IN RUST:
//# 1. Integer, signed: i8, i16, i32, i64, i128, isize (the number being the number of bits; isize- on 64-bit processor it's i64, on 32-bit processor it's i32. Used for differently sized int)
//# 2. Integer, unsigned: u8, u16, u32, u64, u128, usize
//# 3. Float: f32, f63
//# 4. Character: char
//# 5. Boolean: bool

//# TERNARY EXPRESSION IN RUST:
//# a = if condition { true_branch } else { false_branch }
//# (No using ? : )

//# POINTERS
//# Pointers allow you to reference a piece of code without copying it. Pointers use referencing and dereferencing to refer to things.
//# &var creates a reference to var. You can assign it, like "y = 5; let x = &y". 
//# *x is the dereferencing step; now you're telling the computer to access the value x is pointing to (y).
//# In most cases, pointers are read only. If you want to modify the thing you're referencing, you'd have to do &mut x, which creates a mutable reference to x.
//# You can have multiple immutable references to a variable, OR ONLY ONE mutable reference. If you have a mutable reference, you can't have immutables references
//# An example of immutable pointer can be seen in the main method
//# The example I used makes you ask "why not just copy the value of x to y with the = operator?" You can, but it's a lot more memory efficient to use memory addresses, especially for large code
//# Example of a mutable pointer:
// fn main(){
//     let mut x = 3; // You create a mutable variable, x, and assign it the value 3.
//     method_name(&mut x); // Code is executed below. Note the argument is &mut x, letting the param know x's address and that it's mutable
//     print!("updated x: {x}"); // --> "updated x: 13"
// }

// fn value_updater(variable_name: &mut i32){
//     // This method accepts ONLY references to a signed integer, sized 32 bits. No regular integers allowed (can work around this with generic parameters)
//     println!("{}", *variable_name); // --> prints the original value of x, 3
//     *variable_name = 13; // Assigns 13 to the argument, which in turn reassigns x to be 13
//     println!("{}", *variable_name); // --> prints x's new value, 13
// }
//# With this in mind, you can now understand syntax like this:
// let slice: &[u8] = &arr[1..3];
//# This just means that slice is a variable whose type is a reference to an array of u8's, and whose value is some array "arr" from indices 1-3.
//# Once again, we could have just assigned arr[1..3] to slice; however, this way is a lot more efficient

//# BY DEFAULT, VARIABLES ARE IMMUTABLE. MORE ON THAT IN ARRAY DESCRIPTION

//# DATA STRUCTURES:
//# 1. ARRAY:
// let mut a: [i8; 10] = [42; 10];
// In the example given above, you are saying the variable a is mutable ("mut"), saying it's an int array with the size 10, and setting the value of each element to 42.