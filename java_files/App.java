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

//! Final keyword:
//# Note the final keyword- like const in Java, this modifier makes your variable immodifiable.
//# Naming convention for constant variables is the following: CAPITAL_WORDS_WITH_UNDERSCORES_SEPARATING

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
//# When you have a long type integer literal, you need to append an L to the end of the number or it will think it's an int (upper/lowercase ok):
//# long L = 2147483648L;
//# You do the same thing with floats, you need to append an F to the end of the number or it will think it's a double (upper/lowercase ok):
//# float f = 10.2f;

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
//# int y=x++ means x=x+1, y=x. int y=++x means x=x+1, y=x+1

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

//         // By writing <= in the conditional, you avoid an extra "else if" to check equality
//         if (num1 <= num2) {
//             System.out.println("The sorted numbers are " + num1 + ", " + num2);
//         } else {
//             System.out.println("The sorted numbers are " + num2 + ", " + num1);
//         }

//     }
// }

//! 9/6/23 - Lecture notes

//# '\n' is the line break character. Here's how you can use it:
// System.out.print("Welcome to \nJava!") --> "Welcome to (new line) Java!"

//# '\t' is a tab character (makes tables in output):
// System.out.print("Student\t\tGrade")  -->  Student        Grade
// System.out.print("Bob\t\t" + 92)     -->   Bob            92
// The \t spaces the columns & helps with aligning

//# You must use \" to be able to use double quotes in a string:
// System.out.print("He said \"Java is fun\"") --> "He said "Java is fun""
// Note the wrapping: \" ... \"

//! Input modal using JOptionPane:

// import javax.swing.JOptionPane;

// public class App{
//     public static void main(String args[]){
//         String test = JOptionPane.showInputDialog(null, "Prompt message", "Header", JOptionPane.INFORMATION_MESSAGE);
//         System.out.println(test);
//     }
// }



//! HW3 - Tax calculator

// import java.util.Scanner;

// public class HW3 {
//     public static void main(String[] args) {
//         // Create a Scanner
//         Scanner input = new Scanner(System.in);
    
//         // Prompt the user to enter filing status
//         System.out.println("(0-single filer, 1-married jointly, 2-married separately, 3-head of household)");
//         System.out.print("Enter the filing status: ");
//         int status = input.nextInt();
    
//         // Prompt the user to enter taxable income
//         System.out.print("Enter the taxable income: ");
//         double income = input.nextDouble();
    
//         // Close the scanner
//         input.close();
    
//         // Compute tax
//         double tax = 0;
    
//         // Computed tax for single filers
//         if (status == 0) {
//         if (income <= 9325)
//             tax = income * 0.10;
//         else if (income <= 37950)
//             tax = 9325 * 0.10 + (income - 9325) * 0.15;
//         else if (income <= 91900)
//             tax = 9325 * 0.10 + (37950 - 9325) * 0.15 + (income - 37950) * 0.25;
//         else if (income <= 191650)
//             tax = 9325 * 0.10 + (37950 - 9325) * 0.15 + (91900 - 37950) * 0.25 + (income - 91900) * 0.28;
//         else if (income <= 416700)
//             tax = 9325 * 0.10 + (37950 - 9325) * 0.15 + (91900 - 37950) * 0.25 + (191650 - 91900) * 0.28 + (income - 191650) * 0.33;
//         else if (income <= 418400)
//             tax = 9325 * 0.10 + (37950 - 9325) * 0.15 + (91900 - 37950) * 0.25 + (191650 - 91900) * 0.28 + (416700 - 191650) * 0.33 + (income- 416700) * 0.35 ;
//         else
//             tax = 9325 * 0.10 + (37950 - 9325) * 0.15 + (91900 - 37950) * 0.25 + (191650 - 91900) * 0.28 + (416700 - 191650) * 0.33 + (418400 - 416700) * 0.35 + (income - 418400) * 0.396;
//         }
//         // Computed tax for married file jointly
//         else if (status == 1) { 
//         if (income <= 18650)
//             tax = income * 0.10;
//         else if (income <= 75900)
//             tax = 18650 * 0.10 + (income - 18650) * 0.15;
//         else if (income <= 153100)
//             tax = 18650 * 0.10 + (75900 - 18650) * 0.15 + (income - 75900) * 0.25;
//         else if (income <= 233350)
//             tax = 18650 * 0.10 + (75900 - 18650) * 0.15 + (153100 - 75900) * 0.25 + (income - 153100) * 0.28;
//         else if (income <= 416700)
//             tax = 18650 * 0.10 + (75900 - 18650) * 0.15 + (153100 - 75900) * 0.25 + (233350 - 153100) * 0.28 + (income - 233350) * 0.33;
//         else if (income <= 470700)
//             tax = 18650 * 0.10 + (75900 - 18650) * 0.15 + (153100 - 75900) * 0.25 + (233350 - 153100) * 0.28 + (416700 - 233350) * 0.33 + (income- 416700) * 0.35 ;
//         else
//             tax = 18650 * 0.10 + (75900 - 18650) * 0.15 + (153100 - 75900) * 0.25 + (233350 - 153100) * 0.28 + (416700 - 233350) * 0.33 + (470700 - 416700) * 0.35 + (income - 470700) * 0.396;
//         }
//         // Computed tax for married separately
//         else if (status == 2) {
//         if (income <= 9325)
//             tax = income * 0.10;
//         else if (income <= 37950)
//             tax = 9325 * 0.10 + (income - 9325) * 0.15;
//         else if (income <= 76550)
//             tax = 9325 * 0.10 + (37950 - 9325) * 0.15 + (income - 37950) * 0.25;
//         else if (income <= 116675)
//             tax = 9325 * 0.10 + (37950 - 9325) * 0.15 + (76550 - 37950) * 0.25 + (income - 76550) * 0.28;
//         else if (income <= 208350)
//             tax = 9325 * 0.10 + (37950 - 9325) * 0.15 + (76550 - 37950) * 0.25 + (116675 - 76550) * 0.28 + (income - 116675) * 0.33;
//         else if (income <= 235350)
//             tax = 9325 * 0.10 + (37950 - 9325) * 0.15 + (76550 - 37950) * 0.25 + (116675 - 76550) * 0.28 + (208350 - 116675) * 0.33 + (income- 208350) * 0.35 ;
//         else
//             tax = 9325 * 0.10 + (37950 - 9325) * 0.15 + (76550 - 37950) * 0.25 + (116675 - 76550) * 0.28 + (208350 - 116675) * 0.33 + (235350 - 208350) * 0.35 + (income - 235350) * 0.396;
//         }
//         // Computed tax for head of household
//         else if (status == 3) { 
//         if (income <= 13350)
//             tax = income * 0.10;
//         else if (income <= 50800)
//             tax = 13350 * 0.10 + (income - 13350) * 0.15;
//         else if (income <= 131200)
//             tax = 13350 * 0.10 + (50800 - 13350) * 0.15 + (income - 50800) * 0.25;
//         else if (income <= 212500)
//             tax = 13350 * 0.10 + (50800 - 13350) * 0.15 + (131200 - 50800) * 0.25 + (income - 131200) * 0.28;
//         else if (income <= 416700)
//             tax = 13350 * 0.10 + (50800 - 13350) * 0.15 + (131200 - 50800) * 0.25 + (212500 - 131200) * 0.28 + (income - 212500) * 0.33;
//         else if (income <= 444550)
//             tax = 13350 * 0.10 + (50800 - 13350) * 0.15 + (131200 - 50800) * 0.25 + (212500 - 131200) * 0.28 + (416700 - 212500) * 0.33 + (income- 416700) * 0.35 ;
//         else
//             tax = 13350 * 0.10 + (50800 - 13350) * 0.15 + (131200 - 50800) * 0.25 + (212500 - 131200) * 0.28 + (416700 - 212500) * 0.33 + (444550 - 416700) * 0.35 + (income - 444550) * 0.396;
//     } else {
//         System.out.println("Error: invalid status");
//         return;
//     }
    
//         // Display the result
//         System.out.println("Tax is " + (int)(tax * 100) / 100.0);
//     }
// }

//! Lab3 - If/else statement that checks if number is divisible by 5 and 6

// import java.util.Scanner;

// public class Lab3{
//     public static void main (String args[]){
//         //Create scanner
//         Scanner input = new Scanner(System.in);

//         //Prompt user, create and assign variable
//         System.out.print("Please Enter Integer: ");
//         int value = input.nextInt();

//         //Close scanner
//         input.close();

//         if((value % 5 == 0 ) && (value % 6 == 0)){
//             System.out.println(value + "is divisble by both 5 and 6.");
//         } else if (value % 5 == 0){
//             System.out.println(value + "is divisble by 5 but not 6.");
//         } else if (value % 6 == 0){
//             System.out.println(value + "is divisble by 6 but not 5.");
//         } else {
//             System.out.println(value + "is divisble by neither 5 nor 6.");
//         }
//     }
// }

//! Personal notes - Math.random()
// public class App{
//     public static void main (String args[]){
//         // Math.random() naturally gives a double between 0.0 and 0.1 (ex- 0.06067281955789661). If you want random whole #:
//         System.out.println((int)(Math.random() * 10));
//     }
// }
//# Math.random()* 10 == 8.231… ; (int) changes double to int, resulting in 8.
//# MAKE SURE if you do this you separate Math.random() * 10 and int with parentheses or you’ll get zero every time-
//# (Math.random gets turned to int first, then *10; 0.01… -> int rounds to 0)

//! 9/11/23 - Lecture notes (Module 4 - Loops)
//# Loop body: Statements to be repeated
//# Iteration of the loop: One full execution of a loop body
//# Condition (continuation-condition): A boolean expression. If true, execution of loop body is repeated; else, loop terminates. 

//! WHILE LOOP
// while (condition){
//     loop body
// }

// The while loop repeats while the condition is true.
// A loop that goes on forever is known as a "dead loop"

// This program calculates the number of years it would take (from now) to double your initial investment
// import java.util.Scanner;
// public class App{
//     public static void main (String args[]){
//         Scanner input = new Scanner(System.in);
//         System.out.print("Enter the initial amount: ");
//         double tuition = input.nextInt();
//         // The initial variable's purpose is to remain constant, hence the final modifier
//         final double initial = tuition;
//         System.out.print("Enter the rate in percentage: ");
//         // Percent -> decimal
//         double percentToDecimal = ((input.nextDouble())*0.01);
//         // Close scanner
//         input.close();
//         // First year starts with 0 because it's calculating FROM NOW
//         int year = 0;
//         // While - until double the initial value is reached, increment year
//         while (tuition < initial * 2){
//             tuition = tuition * (1 + percentToDecimal);
//             year++;  
//         }
//         System.out.println(year);
//         }
//     }

//! 9/13/23 - Lecture notes

// Sentinel value - Sometimes the number of iterations isn't predetermined. The sentinel value is the "exit value", the thing that lets you choose to break the loop.


// import java.util.Scanner;

// public class App{
//     public static void main(String args[]){
//         Scanner input = new Scanner(System.in);
//         double sum = 0;
//         System.out.print("Enter a number: ");
//         double inputted = input.nextDouble();
//         while (inputted != 0){
//             sum += inputted;
//             System.out.print("Enter a number: ");
//             inputted = input.nextDouble();
//         }
//         input.close();
//         System.out.println("Your total sum is: " + sum);
//     }
// }

//# Input redirection: If you have a large number of data to enter, it would be cumbersome to type from the keyboard.
//# You can take data from another file and input it into your program. Example:
// input.txt - 1 2 3 4 5 0
//$ java ClassName < input.txt 
// Result: "Your total sum is: 15"

// NOTE: Your input.txt file has to be in the same directory as the source code for this to work
// NOTE 2: If there was a non-number value there, it would give you an error because of the input.nextDouble();

//# Output redirection: Instead of the result appearing in the CLI you can make it appear in a textfile
//$ java ClassName > output.txt
// Result: "Your total sum is: 15" (inside of Output.txt)

//# Input AND output redirection: $ java ClassName < input.txt > output.txt
// The following code was used to test the input + output command; successfully outputted text
// import java.util.Scanner;
// public class App {
//     public static void main (String args[]){
//         Scanner input = new Scanner(System.in);
//         // While checks whether input HAS a next input
//         while (input.hasNext()){
//         String string = input.next();
//         // This prints the words separately
//         System.out.print(string + " ");
//         }

//     }
// }

// Similar program that takes strings and numbers as inputs
// import java.util.Scanner;
// public class App {
//     public static void main (String args[]){
//         Scanner input = new Scanner(System.in);
//         double total = 0;

//         // While checks whether input HAS a next input
//         while (input.hasNext()){
//             // If checks if the input is a number or a string
//             if (input.hasNextDouble()){
//                 double number = input.nextDouble();
//                 total += number;
//             } else {
//                 String string = input.next();
//                 // This prints the words separately
//                 System.out.print(string + " ");
//             }}

//         // Prints total on separate line
//         input.close();

//         // If there's no number, don't print a total
//         if (total != 0.0)
//         System.out.print('\n' + "Total: " + total);
//     }
// }


