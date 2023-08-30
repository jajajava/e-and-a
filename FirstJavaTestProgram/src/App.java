//! 8/15/23 - First program (following tutorial provided in class)

// public class App {
//     public static void main(String args[]){
//         JOptionPane.showMessageDialog(null, "test", "header", JOptionPane.CANCEL_OPTION);
//         System.out.println("Welcome to Java");
//     }
// }

//# Note how the indentation looks; You nest it like that to show a heirarchal structure, for better readability.

/*
//! IMPORTANT JAVA NOTES:

    Java consists of the compiler, called "Javac", and the interpreter, called the "Java Virtual Machine", or JVM. 
    When you run the command javac, the compiler checks for syntax errors. If the code is clean, it creates (or updates) a file called FileName.class
    Running java FileName is actually the JVM reading the compiled .class file (known as compiled bytecode), not the .java file (known as source code). 
 */


//# 8/16/23 - This program makes a modal window/message come up. Note the import of the java Library before the App class.

// import javax.swing.JOptionPane;
// public class App {
//     public static void main(String args[]){
//         JOptionPane.showMessageDialog(null, "test", "header", JOptionPane.INFORMATION_MESSAGE);
//     }
// }

//# 8/21/23 - Important lecture notes

//! JAVA PRIMITIVE DATA TYPES:
// 1. Byte: Stores whole numbers from -128 to 127 (Size: 1 byte)
// 2. Short: Stores whole numbers from -32,768 to 32,767 (Size: 2 bytes)
// 3. Int: Stores whole numbers from ~2.1 million to 2.1 million (Size: 4 bytes)
// 4. Long: Stores whole numbers from ~9.2 quintillion to 9.2 quintillion (Size: 8 bytes)
// 5. Float: Stores fractional numbers. Stores 6-7 decimal digits (Size: 4 bytes)
// 6. Double: Stores fractional numbers. Stores 15 decimal digits (Size: 8 bytes)
// 7. Boolean: Stores true/false values (Size: 1 byte)
// 8. Char: Stores a single character/letter or ASCII values (Size: 2 bytes)

//# variable = expression   <-- Variable is always on the left of the = operator (= being assignent operator, not equality)

//# DECLARING VARIABLES IN JAVA: 
//# Unlike JavaScript where you have a keyword to declare the variable (let, const, var), you simply write dataType variableName. Here's how it looks:
// double radius;    <-- Declare the variable (allocates memory)
// radius = 20;      <-- Initialize the variable (assigns value)
//# Java lets you assign values in the same line (double radius = 20;) and also declare multiple variables at once (double radius, area;)

//# In Java, you can only use double quotes (" ") only for strings, and only the single quotes (' ') only for chars.

//# Java has STRING CONCATENATION ("Hello my name is " + variableName);
//# There are also template literals, but it's much uglier than in newer languages. If you want more info, look up "Java string format"

// public class App {
//     public static void main(String args[]){
//         String variableName = "David";
//         System.out.println("My name is " + variableName);
//     }
// }

//# 8/23/23 - Lecture notes: Getting user input through console

//! Getting input from the console-
//# 1. Import java.util.Scanner;
//# 2. Create a Scanner object -> Scanner input = new Scanner(System.in);
//# 3. Use the methods next(), nextByte(), nextShort(), nextInt(), nextLong(), nextFloat(), nextDouble(), or nextBoolean() to obtain
//# a string, byte, short, int, long, float, double, or boolean value. For example:

//# Calculating area of a circle (classwork)
// import java.util.Scanner;
// public class App{
//     public static void main(String args[]){
//         Scanner input = new Scanner(System.in);
//         System.out.print("Enter a number for radius: ");  // NOTE the fact that it's not .println()- print vs println is that print has no line break, looks better
//         double radius = input.nextDouble();
//         double area = (radius * radius) * 3.14159265359;
//         System.out.println("Your area is " + area);    
//         input.close(); // This isn't necessary but it makes your code run faster by ending unnecessary operations
//     }
// }

//! Homework 1 - Calculating the area of a cylinder

// import java.util.Scanner;
// public class HW1 {
//     public static void main (String args[]){
//      // Declare and initialize constant variable "PI"
//         final double PI = 3.14159;

//         Scanner input = new Scanner(System.in);
//         System.out.print("Please input a value for radius: ");

//      // Declare and initialize "radius" with value that user inputs
//         double radius = input.nextDouble();

//         System.out.print("Please input a value for length: ");
//         double length = input.nextDouble();

//      // Close the Scanner to preserve resources
//         input.close();

//         double area = radius * radius * PI;
        
//         double volume = area * length;

//      // Prints area and volume
//         System.out.println("The area of the cylinder is " + area + " units squared.");
//         System.out.println("The volume of the cylinder is " + volume + " units cubed.");

//     }
// }

//! Lab 1 - Converting feet to meters

// import java.util.Scanner;

// public class Lab1{
//     public static void main (String args[]){
//         Scanner input = new Scanner(System.in);
//         System.out.print("Please enter the value of feet: ");
//      // Declare and initialize foot variable
//         double foot = input.nextDouble();
//         input.close();
//      // Declare meter variable, assign converted value
//         double meter = foot * 0.305;
//      // Output result
//         System.out.println(foot + " ft converted to meters is " + meter + " m");
//     }
// }

//! 8/28/23 - Lecture notes

//# A LITERAL is a value you hardcode into your program.
//# When you have a long type integer literal, you need to append an L to the end of the number (upper/lowercase ok) --> long L = 2147483648L;
//# You do the same thing with floats, you need to append an F to the end of the number --> float f = 10.2f;

//# Java allows binary operations on values of different types. In that situation, the computer takes the value that stores more data.
//# This is why 5.0 / 2 = 2.5 while 5 / 2 = 2!

//# TYPE CASTING: an operation that converts a value of one data type to a value of another data type.
//# TYPE WIDENING is always fine. This means a smaller range value is assigned to a variable with a larger range value:
//# byte b = 10; --> int i = b   OK
//# int i = 1500; --> byte b = i   NOT OK (TYPE NARROWING can only be achieved with type casting)

//! How to type cast:
//# double d = 4.5;
//# int i = (int) d; --> This result is that i = 4. When you narrow the type, you lose some information (in this case, the decimal). 


// public class App {
//     public static void main (String args[]){
//         long L = 2147483648L;
//         int i = (int) L; --> Type casting performed
//         System.out.print(i); --> -2147483648 (When a number is too large or too small, out of the range of int, it will lose some of the bits and be misrepresented.)
//     }
// }

// Shortcut operators:
// += (add and assign)
// -= (subtract and assign)
// *= (multiply and assign)
// /= (divide and assign)
// %= (modulo and assign)
// ++ (increment operator)
// -- (decrement operator)

//! About the increment/decrement operator:
//# If you put it before the variable, preincrement/predecrement, (++var or --var), it will change the value of var and update it immediately.
//# If you put it after the variable, postincrement/postdecrement, (var++ or var--), it will change the value of var but not update it right away.

//! Example of preincrement:
//# int i = ++5;
//# int j = i;
//# Output: i = 6, j = 6

//! Example of postincrement:
//# int i = 5++;
//# int j = i;
//# Output: i = 6, j = 5

//! Character data types:
//# char letter  = 'A'; (ASCII)
//# char numChar = '4'; (ASCII)
//# char letter = '\u0041'; (Unicode)
//# char numChar = '\u0034'; (Unicode)

//# Note: Increment and decrement operators can be used on char variables to get the next or preceding unicode character. Ex:
//# char ch = 'a';
//# System.out.print(++ch); --> 'b';

//! Homework 2 - Should the tennis player practice for the tournament?

// import java.util.Scanner;

// public class HW2 {

//     public static void main(String args[]) {
//         Scanner input = new Scanner(System.in);

//         // Takes int for number of days before tournament; 14 or less for true
//         System.out.print("How many days are left until the tournament? ");
//         int days = input.nextInt();

//         // Takes int for number of wins before tournament; 2 or less for true
//         System.out.print("How many games have you won recently? ");
//         int wins = input.nextInt();

//         // Takes boolean for whether it's raining or not; false for true
//         System.out.print("Is it raining? (true/false) ");
//         boolean isRaining = input.nextBoolean();

//         // Takes double for temperature; less than 95 for true
//         System.out.print("What is the temperature outside? ");
//         double temperature = input.nextDouble();

//         // Closes the Scanner
//         input.close();

//         // Declares variable
//         boolean doPractice;

//         // Initializing the variable based on conditional
//         if (days < 14 || wins < 2 || (isRaining == false && temperature < 95)) {
//             doPractice = true;
//         } else {
//             doPractice = false;
//         }

//         // Final output
//         System.out.println("Should you practice today? " + doPractice);
//     }
// }

//! Lab 2 - Sort two numbers

// import java.util.Scanner;

// public class Lab2 {
//     public static void main(String args[]) {
//         // Open the scanner
//         Scanner input = new Scanner(System.in);

//         // Get value for num1
//         System.out.print("Enter the value of num1: ");
//         int num1 = input.nextInt();

//         // Get value for num2
//         System.out.print("Enter the value of num2: ");
//         int num2 = input.nextInt();

//         // Close the scanner
//         input.close();

//         // By writing <= in the conditional, you avoid an extra "else if" to check
//         // equality
//         if (num1 <= num2) {
//             System.out.println("The sorted numbers are " + num1 + ", " + num2);
//         } else {
//             System.out.println("The sorted numbers are " + num2 + ", " + num1);
//         }

//     }
// }