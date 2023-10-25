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


//! 8/16/23 - This program makes a modal window/message come up. Note the import of the java Library before the App class.

// import javax.swing.JOptionPane;
// public class App {
//     public static void main(String args[]){
//         JOptionPane.showMessageDialog(null, "test", "header", JOptionPane.INFORMATION_MESSAGE);
//     }
// }


//! 8/21/23 - Important lecture notes

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


//! 8/23/23 - Lecture notes: Getting user input through console

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
//# One possible use for this ability that I thought of is logging when something happens in a program

// Similar program that takes strings and numbers as inputs; numbers added together
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

//! Personal notes - How to use printf method, Java's string interpolation

//# System.out.printf("This is a format string %d", var);
//# Two arguments: printf(FORMAT STRING, [OBJECT/VARIABLE/VALUE])
//# When you use printf, you have several components: % [flags] [precision] [width] [conversion-character]
// The % lets the code know where to insert a value. 
// You write % and then the letter corresponding to the data type of the value. Known as "conversion character"

//# MOST COMMON CONVERSION CHARACTERS:
//# 1. %d = integers (stands for 'decimal')
//# 2. %f = doubles/floats
//# 3. %s = strings
//# 4. %c = char
//# 5. %b = booleans

//# You can set the minimum number of characters to display with the "width" argument. Ex:
// String myString = "user";
// System.out.printf("Welcome%10s", myString);    -> The 10 means there will be a total of 10 characters after Welcome
// Output: "Welcome      user" (including the length of "user" (4 chars), 10 characters after "Welcome")

// public class App{
//     public static void main (String args[]){
//         String myString = "user";
//         System.out.printf("Welcome%-10s" + '\n', myString);     //The escape character was added to make terminal look nicer
//     }
// }

//# Precision- making the %f a decimal value indicates how many spaces you want after the decimal point. Ex:
// "%.2f" converts 1000.000000 to 1000.00

//# Flags-
//# - : makes the output left justified, meaning if you make %10s a negative number, %-10s, you'll have "Welcomeuser      "
//# + : output a plus or minus sign for a numeric value  (negative value displayed)
//# , : comma grouping separator if numbers > 1000


//! 9/18/23 - Lecture notes

//# do-while loop: use it is when you want to iterate a loop at least once
//# Syntax: do {loop body} while (iteration-condition);

// import java.util.Scanner;
// public class App{
//     public static void main (String args[]){
//         Scanner input = new Scanner(System.in);
//         int sum = 0;
//         System.out.print("Please enter a number: ");
//         int inputted; // You declare the variable here because it wouldn't be accessable in the while loop, because it's not in the global scope
//         do {
//             System.out.print("Please enter a number: ");
//             inputted = input.nextInt();
//             sum += inputted;
//         } while (inputted != 0); // This is the sentinel condition. Also note the necessity of the ; at the end
//         System.out.println(sum);
//         input.close();
//     }
// }

//# For loop: best for counter-controlled repetition (set number of iterations)
//# Syntax: for (initial-action; continuation-condition; action-after-iteration){loop body}

// public class App{
//     public static void main (String args[]){
//         int count; // This is how you can keep the count variable in the global scope
//         for (count = 0; count < 100; ++count){ // Iterates 100 times. ++count is why it ends on 100 from inside the loop instead of 99
//             System.out.println(count);
//         }
//         System.out.println("Your count is now " + count); // Note that the count was updated inside the loop and its value is updated in main method's scope
//     }
// }

// public class App{
//     public static void main (String args[]){
//         int sum = 0;
//         for (int count = 1; count <= 100; count++){ // Remember that the action-after-iteration doesn't have to be incrementing, or incrementing by 1. +2 == even #s only
//             sum += count;
//         }
//         System.out.println(sum);
//     }
// }


//! 9/20/23 - Lecture notes (Nested loops)

// import java.util.Scanner;
// public class App {
//     public static void main (String args[]){
//         Scanner input = new Scanner(System.in);
//         System.out.print("Please enter a number: ");
//         int numOfLines = input.nextInt();
//         input.close();
//         for (int row = 1; row <= numOfLines; row++){
//             for (int spaces = 0; spaces < numOfLines-row; spaces++){
//                 System.out.print(' ');
//             }

//             for (int num = row; num > 0; num--){
//                 System.out.print(num);
//             }

//             for (int endingNum = 2; endingNum <= row; endingNum++){
//                 System.out.print(endingNum);
//             }

//             System.out.print('\n');
//         }
//     }
// }

// public class App{
//     public static void main (String args[]){
//         int numOfLines = 6;
//         for (int row = 1; row <= numOfLines; row++){
//             for (int num = 1; num <= row; num++){
//                 System.out.print(num);
//             }
//             System.out.print('\n');
//         }
//     }
// }


// import java.util.Scanner;
// public class App {
//     public static void main (String args []){
//         Scanner input = new Scanner(System.in);
//         System.out.print("Please enter a number: ");
//         int number = input.nextInt();
//         input.close();
//         for (int row = number; row > 0; row--){
//             for (int num = 1; num <= row; num++){
//                 System.out.print(num);
//             }
//         System.out.println();
//         }
//     }
// }


//! HW4 - Factorial calculator

// import java.util.Scanner;

// public class App {
//     public static void main (String args[]){
//         Scanner input = new Scanner(System.in);

//         // Initialize this variable for the do-while loop encapsulating entire code
//         boolean keepGoing = true;

//         // The do-while allows for the code to ask the user whether they want to keep practicing after completion
//         do {
//         // Ask user whether they'd like to practice factorials
//         System.out.print("Would you like to practice your factorials? (Answer 'true' or 'false'): ");
//         // If the user chooses to continue, it lets you practice. If not, it changes the keepGoing value in the while loop, breaking the loop
//         boolean choice = input.nextBoolean();
//         if (choice == true){
//             // Get practice problem from user
//             System.out.print("Please enter a number to begin practicing: ");
//             int enteredInt = input.nextInt();
//             // Initialize solution this way (and now) so that it's accessible as enteredInt. Cannot be enteredInt itself because then the for loop gets messed up
//             int trueSolutionInt = enteredInt;
//             // Ask user for solution
//             System.out.printf("What does %d! equal? ", enteredInt);
//             int enteredSolutionInt = input.nextInt();
//             for (int i = 1; i < enteredInt; i++){
//                 trueSolutionInt = trueSolutionInt * i;
//             }

//             // If the user's solution is incorrect, it keeps looping until the solution is correct
//             while (enteredSolutionInt != trueSolutionInt){
//                 System.out.println("Try again!");
//                 System.out.printf("What does %d! equal? ", enteredInt);
//                 enteredSolutionInt = input.nextInt();
//             }

//             // The code will not get to this point until the answer is indeed correct
//             System.out.println("Correct!");

//         } else {
//             keepGoing = false;
//             System.out.println("Goodbye.");
//         }} while (keepGoing);
//         // This needs to be outside of the loop or it will not run again (because the initialization of Scanner is outside of the loop too)
//         input.close();
//     }}


//! Lab4 - Pyramid variation

// import java.util.Scanner;

// public class App {
//     public static void main(String args[]) {
//         Scanner input = new Scanner(System.in);

//         // Prompting the user to enter the number of lines
//         System.out.println("Enter an integer input (ranging from 2 to 9): ");
//         int enteredValue = input.nextInt();
//         input.close();

//         // OUTER LOOP: Starting at 0, it increments number of rows until it's at desired number of rows
//         for (int i = 0; i < enteredValue; i++) {
//             // INNER LOOP: sets j = entered value. Because it starts at row 0, you start the row with 6-0, then 6-1. It then increments to the original #
//             for (int j = enteredValue - i; j <= enteredValue; j++) {
//                 System.out.print(j);
//             }
//             System.out.print('\n');
//         }
//     }
// }


//! 9/20/23 - Personal notes

//# Nested for loops have 3 main variables: input (could be a set limit for rows), i (outer loop - rows) and j (inner loop - values)

//# Example 1:

// public class App{
//     public static void main (String args[]){
//         int five = 5;

//         for (int i = five; i >= 1; i--){
//             // The inner loop's conditional sets j dependent on the row number instead of equal to the row number
//             for (int j = five; j >= i; j--){
//                 System.out.print(j);
//             }
//             System.out.println();
//         }
//     }
// }

// Output:
// 5
// 54
// 543
// 5432
// 54321

//# Example 2:
// public class App{
//     public static void main (String args[]){
//         int five = 5;

//         for (int i = 0; i < 5; i++){
//             // The inner loop's conditional sets j dependent on the row number instead of equal to the row number
//             for (int j = five - i; j <= five; j++){
//                 System.out.print(j);
//             }
//             System.out.println();
//         }
//     }
// }

// Output:
// 5
// 45
// 345
// 2345
// 12345

//# Example 3:
// public class App{
    // public static void main (String args[]){
//         int five = 5;

//         for (int i = 1; i <= five; i++){
//             // The difference between int j = 1 and int j = i is that the former will be iterated every time from 1-5. The latter is whatever the row number is, to 5.
//             for (int j = i; j <= five; j++){
//                 System.out.print(j);
//             }
//             System.out.println();
//         }
//     }
// }

// Output:
// 12345
// 2345
// 345
// 45
// 5

//# Example 4:
// public class App{
//     public static void main (String args[]){
//         int five = 5;

//         for (int i = 1; i <= five; i++){
//             // The difference between int j = 1 and int j = i is that the former will be iterated every time from 1-5. The latter is whatever the row number is, to 5.
//             for (int j = five; j >= i; j--){
//                 System.out.print(j);
//             }
//             System.out.println();
//         }
//     }
// }

// Because you now start at the top, 5 (in the inner loop), and go down to the row number, it is 5-5, then 5-4, then 5-3, etc.
// Output:
// 54321
// 5432
// 543
// 54
// 5


//! 9/24/23 - Personal notes

// public class App {
//     public static void main (String args[]){
//         int endRows = 10;

//         // Increasing pattern
//         for (int i = 1; i <= endRows; i++){
//             for ( int j = 1; j <= i; j++){
//                 System.out.print(j);
//             }
//             System.out.println();
//         }

//         // Decreasing pattern (note the < operator instead of the <=)
//         for (int i = 1; i < endRows; i++ ){
//             for (int j = 1; j <= endRows - i; j++){
//                 System.out.print(j);
//             }
//             System.out.println();
//         }
//     }
// }

// Output:
// 1
// 12
// 123
// 1234
// 12345
// 123456
// 1234567
// 12345678
// 123456789
// 12345678910
// 123456789
// 12345678
// 1234567
// 123456
// 12345
// 1234
// 123
// 12
// 1

//# This was the first nested loop shown in class. This time I made it myself
// public class App {
//     public static void main (String args[]){
//         int rows = 5;
//         for (int i = 1; i <= rows; i++){
//             // First nested loop: Blank spaces
//             for (int j = rows - i ; j > 0; j--){
//                 System.out.print(" ");
//             }
//             // Second nested loop: numbers, descending
//             for (int k = i; k >= 1; k--){
//                 System.out.print(k);
//             }

//             // Third nested loop: numbers, ascending (iterations - 1)
//             for (int l = 2; l <= i; l++ ){
//                 System.out.print(l);
//             }
//             System.out.println();
//         }
//     }
// }

// Output:
//     1
//    212
//   32123
//  4321234
// 543212345


//! 9/25/23 - Lecture notes

//# A method is a group of statements bundled together in order to be called later to perform an operation

//# Syntax: 
//# modifiers returnValueDataType methodName (parameters){
//#     // method body;
//# }

//# If you have a value you want to return- say, int = 2+2- you MUST end the method with a return AND also declare the method's "returnValueDataType" as "int".
//# If not, you don't need return, and your "returnValueDataType" is "void"

//# You don't have to name the parameters "args", it can be anything you want.
//# Example: public static int max(int num1, int num2){ // whatever body you want, but return value at the end}
//# Note that you have to specify the data type of the parameters

//# JAVA DOES NOT ALLOW METHOD NESTING, AND NO METHOD HOISTING
//# However, it only runs from the main method, it doesn't need to have the methods in a particular order

//# Method signature: combination of the method name and parameters, like so- methodName(param1, param2)

//# You can have a chain of method invocation. Let's say you have a method, max(num1,num2), that finds the max number out of 2 args.
//# int m = max(max(1,2), 3) --> 3 
//# First compares inner max's args, 1 and 2. That is set as arg1 of outer max(), and is compared to 3. 3>2.

//# To invoke a static method that's in another class in the same directory:
//# ClassName.methodName();
//# If it's not in the same directory, you can import it somehow too

//# BREAK/CONTINUE STATEMENTS (used in loops to alter flow of control):
//# break: Causes immediate exit from the loop, no more iterations
//# continue: stops the current iteration of the loop
//# The following shows the difference between the two keywords

//# CONTINUE:
// public class App {
//     public static void main (String[] args){
//         for (int i = 1; i < 10; i++){
//             if (i%2==0){
//                 continue;
//             }
//             System.out.print(i + " ");
//         }
//     }
// }

// Output:
// 1 3 5 7 9

//# BREAK:
// public class App {
//     public static void main (String[] args){
//         for (int i = 1; i < 10; i++){
//             if (i%2==0){
//                 break;
//             }
//             System.out.print(i + " ");
//         }
//     }
// }

// Output:
// 1


//! 9/27/23 - Lecture notes

//# Overloading methods in Java:
//# You can have several methods w/ the same name. To do so, your params must be different- either a *different number of params* or a *different param type*. EX:
// max(int num1, int num2) --> 2 ints in params
// max(int num1) --> 1 int in params
// max(boolean yesOrNo) --> 1 boolean in params

//# When is this useful? If you want to let the user have a wider range of inputs. Here's a practical example:
//# System.out.println("Hello"); --> prints string
//# System.out.println(1+2); --> prints int
//# System.out.println(); --> prints just the linebreak

//# Ambiguous invocation: If there are 2+ methods that are possible matches for the invocation of the method, the compiler will throw an error

//# Local variable: a variable defined inside a method
//# Scope: part of the program where the variable can be referenced. 
//# The scope of a local variable starts at its declaration, to the end of the block that contains it.

//# Some Math.random notes:
//# Math.random(); --> [0.0, 1.0)                 // Includes double 0.0, excludes double 1.0
//# Math.random() * 50 --> [0.0, 50.0)            // Raises range's max
//# (int)(Math.random() * 50) --> [0, 49]         // Rounds max down to 49 since it's no longer a double
//# 50 + (int)(Math.random() * 50) --> [50, 99]   // Adds 50 to both ends of the range


//! HW5 - Creating the mean and deviation methods

// public class HW5 {
// 	/** Main method */
// 	public static void main(String[] args) {
//  		// Get mean
// 		double meanValue = mean(99, 1000);
//  		// Get deviation
// 		double deviationValue = deviation(99, 1000);
//  		// Display result
// 		System.out.println("The mean is " + meanValue);
// 		System.out.println("The standard deviation is " + deviationValue);
// 	}

	// public static double mean (int boundary, int n) {
// 		double sum = 0;
// 		// For loop gets a random number and adds it to the sum
// 		for (int i = 0; i < n; i++){
// 		sum += (int)(Math.random()*(boundary + 1));
// 		}
// 		return sum/n;
// 	}	

// 	public static double deviation (int boundary, int n) {
// 		double num = 0; // Store a random number
// 		double sumSquared = 0; // Store the sum of the squares
// 		double sum = 0; // Store the sum of the numbers

// 		// Create numbers, find its sum, and its square sum
// 		for (int i = 0; i < n; i++) {
// 			// Generate a new random number
// 			num = (int)(Math.random() * (boundary + 1));
// 			// Add the number to sum
// 			sum += num;
// 			// Add the square of the number to squareSum
// 			sumSquared += Math.pow(num, 2);
// 		}
// 		// Find standard deviation
// 		double temp = (sumSquared - ((sum*sum))/n)/(n-1);
// 		return Math.sqrt(temp);

	
// 	}	
// }


//! Lab5 - Overloading methods

// public class Lab5 {
//     //Main method declares/initializes variables, calls methods, and displays output
//     public static void main (String[] args) {
//         int a = 4, b = -9, c = 7, d = 10;
//         int larger = max(a,b);
//         System.out.println("The larger of a and b is " + larger);
//         int largestOfThree = max(a,b,c);
//         System.out.println("The largest of a, b, and c is " + largestOfThree);
//         int largestOfFour = max(a,b,c,d);
//         System.out.println("The largest of a, b, c and d is " + largestOfFour);
//     }
//     // First "max" method: checks greatest number out of 2 inputs
//     public static int max (int num1, int num2){
//         if (num1 > num2){
//             return num1;
//         } else {
//             return num2;
//         }
//     }

//     // Second "max" method: checks greatest number out of 3 inputs
//     public static int max (int num1, int num2, int num3){
//         if (num3 > max(num1, num2)){
//             return num3;
//         } else {
//             return max(num1, num2);
//         }
//     }

//     // Third "max" method: checks greatest number out of 4 inputs
//     public static int max (int num1, int num2, int num3, int num4){
//         if ( max(num1, num2) < max(num3, num4)){
//             return num4;
//         } else {
//             return max(max(num1, num2), num3);
//         }
//     }
// }


//! 10/2/23 - Lecture notes

//# The "stack" is a memory storage within a computer's RAM. 
//# It is initially empty. When a local variable is declared, it gets added to the top of the stack.
//# If an int is added to a stack, the stack allocates 4 bytes for that variable. The stack stores main method variables first.
//# Note that passing params and getting the result requires separate memory allocation. Example:

// 6. int result;                         //# The result is obtained, and when it's assigned to int k,
// 5. int num2 = 2                        //# the stack gets rid of the max method and its local variables
// 4. int num1 = 5                        //# to clear up memory space
// // Max method called         -->      
// 3. int k;                               3. int k = {result}
// 2. int j = 2                            2. int j = 2
// 1. int i = 5                            1. int i = 5
// // Main method called


//! 10/4/23 - Lecture notes

//# OBJECT ORIENTED PROGRAMMING (OOP)

//# An object represents an entity in the real world that can be distinctly identified.
//# The state of an object consists of a set of DATA FIELDS (also known as properties / instance variables) with their current values
//# The behavior of an object is defined by a set of methods.

//# Objects of the same type are defined using a common CLASS
//# A class is a template that defines an object's data and methods. An object is an INSTANCE of a class.
//# Creating an instance is referred to as INSTANTIATION.

//# DATA FIELD: A variable defined in the class, outside of all methods. Class variables can be accessed in any method. MORE ON THIS 10/8/23

//# Constructors: A special kind of method that is invoked to construct objects.
//# RULES FOR CONSTRUCTORS:
//# 1. Constructors must have the same name as the class itself.
//# 2. Constructors do not have a return type, not even void (do not write the keyword)
//# 3. Constructors are invoked using the "new" keyword when an object is created. Constructors initialize objects.

//# Constructors are generally overloaded. You can pass no arguments, or you can pass an argument. EX:

// class App {
//     public static void main (String[] args){
//         // Declaring an object/instance: ConstructorClass variableName = new ConstructorMethod(params). ConstructorMethod and ConstructorClass always the same
//         Circle myCircle = new Circle(10);
//         System.out.print("The circle's radius is " + myCircle.radius + " and the circle's area is " + myCircle.getArea());
//     }
// }

// class Circle {
//     double radius = 1.0;

//     // When the constructor is called without a parameter, it creates the Circle without special params, and uses the data fields given (in this case, radius = 1)
//     // If you create a class without constructors, it's automatically given the no-arg constructor, the "default constructor". Has empty method body
//     Circle(){}

//     // To construct an object with parameters, create the constructor
//     // If you have a constructor like this, you MUST pass a double as an argument or it will say "The constructor Circle() does not exist" (no default constructor)
//     Circle(double r){
//         radius = r;
//     }

//     // METHODS OF THE CLASS
//     double getArea(){
//         return radius * radius * Math.PI;
//     }

// }

//# Multiple classes can go into one file, but only one should be "public", and it must have the same name as the file.
//# The dot operator, ".", aka the object member access operator, allows you to reference an object's data or to invoke the object's methods

//# If you call a constructor and there is an uninitialized data field in the class, a default value is given to that data field.
//# Null for a reference type, 0 for a numeric type, false for a boolean type, '\u0000' for a char type.


//! 10/7/23 - Personal notes

//# .equals() method is used for strings. In Java, you cannot directly write string == "stringOfChoice".
//# When you do that, that compares the reference to its place in the memory, not the contents of the string.
//# .equals() compares strings, and .equalsIgnoresCase() compares the string without case sensitivity.
//# In the following program, it is used to set "next" as the sentinel value for that loop
// import java.util.Scanner;
// public class App {
//     public static void main (String[] args){
//         Scanner input = new Scanner(System.in);
//         System.out.print("Enter input: ");
//         String s = input.next();
//         while (!s.equalsIgnoreCase("next")){
//             System.out.println("That's fine");
//             System.out.print("Enter input: ");
//             s = input.next();
//         }
//         System.out.print("How dare you");
//     }
// }


//! 10/8/23 - Personal notes

//# Data fields are also known as instance variables. 
//# Each object created from a class has its own set of instance variables. These variables store data that is unique to that particular object.
//# Instance variables can have a default value, or they can be declared without initialization- this will give them default values.
//# The value is accessed by creating a "GETTER" method inside the class. 
//# The "SETTER" method is what updates it; usually given only to authenticated admins.

//! IMPORTANT NOTE ON OBJECT ORIENTED PROGRAMMING (OOP)-
//# There are several types of classes. The two I'll write about now are "blueprint/definition" classes, and "application" classes (idk their correct names).
//# Blueprint classes are classes used as skeletons/blueprints, to allow the user to build instances with them.
//# Application classes (like what you are used to using in class) serve as entry points for the program, and manage the overall flow of the program.

//# INSTANCE METHODS VS CLASS METHODS:
//# Instance methods are called on objects, and they operate on the state of those objects. (declared without "static" keyword)
//# Class methods are called on the class itself and typically perform tasks that are independent of any specific instance. (declared with "static")

//# HOW TO CREATE DATA FIELDS, GETTERS, SETTERS, AND CONSTRUCTORS:

//# The "Application" class that provides the general flow of the program
//# NOTE that if you have more than one class in a file, only ONE can have the public keyword, and its name must match the file's name
// public class App {
//     public static void main(String[] args){
//         // You create the Person: Class customObjectName = new Constructor(parameters)
//         Person david = new Person("David", 21);
//         // Uses instance method to update the value of the "age" instance variable
//         david.setAge(22);
//         System.out.print(david.getAge()); // OUTPUTS 22 BECAUSE OF PREVIOUS LINE
//     }
// }

//# The "Blueprint" class that allows you to build a Person instance anywhere you want
// class Person {
//     // Instance variables/ data fields: They are private as a form of encapsulation, an important concept in OOP.
//     // By making these variables private, you hide their implementation details from external classes, preventing unexpected bugs or unauthorized access.
//     // If another class wants to interact with these variables, it would have to do so through public methods like getName and setAge, which provide controlled access to the data.
//     private String name;
//     private int age;

//     // Constructor; USES "THIS", which references the instance variables IN THAT CLASS
//     // Allows you to initialize the instance variables for that instance.
//     public Person(String name, int age) {
//         this.name = name;
//         this.age = age;
//     }

//     // Method that allows you to get the name
//     public String getName() {
//         return name;
//     }

//     // Method that allows you to get the age
//     public int getAge(){
//         return age;
//     }

//     // Method that allows you to SET the age
//     public void setAge(int age) {
//         // Updates the "age" property of "this" (The INSTANCE of the Person class, in this case david), setting it to the age argument you pass
//         this.age = age;
//     }
// }

//# By allowing only a certain way (setters) to update the values, you are also creating a way to control who gets to update it.
//# Without the setter method, you'd be able to do person.name = "John" and it would change the value.
//# By making that instance variable private, you allow the regulation of WHO is authorized to use the setter method to update that value!


//! 10/9/23 - Lecture notes

//# UML Diagrams (unified modeling language) - standard way of mapping out program, to show you:

//   +--------------------------------------------------+
//   |                    Rectangle                     |   <-- Class name
//   +--------------------------------------------------+
//   | width: double                                    |   <-- Data field names and types
//   | height: double                                   |
//   +--------------------------------------------------+
//   | Rectangle()                                      | 
//   | Rectangle(newWidth: double, newHeight: double )  |   <-- Constructors with parameters and param types
//   | getArea(): double                                |   <-- Methods with params and param types
//   +--------------------------------------------------+

//! NOTE:
//# In UML diagrams, + means the member is public, - means the member is private, and nothing means it is default.

//# Data Fields -> dataFieldName: dataFieldType
//# Constructors -> ClassName(paramName: paramType)   <- Params separated with commas
//# Methods -> methodName(paramName: paramType)


// public class App {
//     public static void main (String[] args){
//         Rectangle r = new Rectangle(5, 5);
//         Rectangle r2 = new Rectangle();
//         System.out.println("Area is " + r.getArea() + " and the perimeter is " + r.getPerimeter());
//         System.out.println("Area is " + r2.getArea() + " and the perimeter is " + r2.getPerimeter());
//     }
// }

// class Rectangle {
//     double width = 1.0;
//     double height = 1.0;

//     // CONSTRUCTORS
//     Rectangle(){}

//     Rectangle(double width, double height){
//         this.width = width;
//         this.height = height;
//     }

//     // INSTANCE METHODS
//     double getArea(){
//         return width * height;
//     }

//     double getPerimeter(){
//         return (2*(width) + 2*(height));
//     }
// }

//# Alternatively, and preferably, you can make each class a separate file in the same directory/package,
//# That way you'd be able to access it from your other class and keep the program organized neatly.

//! STATIC KEYWORD
//# What is the "static" keyword? You see it in public static void main(), but didn't know why you need it.
//# Static members (static methods and variables) are associated with the class itself, NOT the instances of the class
//# This also means that STATIC MEMBERS ARE SHARED BETWEEN ALL OBJECTS OF A CLASS

//# Math.pow() is a static method. Math is the class, but you don't create a Math instance to use it.
//# .pow() isn't tied to an instance of Math, it's not an instance method

//# Here's one use of a static method:

// public class App {
//     public static void main (String [] args){
//         System.out.println("Your number of circles is: " + Circle.getNumberOfCircles()); // At the start, 0 circles were made
//         Circle c1 = new Circle(); // A new circle instance is made, constructor is called; numberOfCircles = 1
//         System.out.println("Your number of circles is: " + Circle.getNumberOfCircles()); // 1 circle
//         Circle c2 = new Circle(5); // A new circle instance is made, constructor is called; numberOfCircles = 2

//         // You can see that the number of circles is not affected by the instances- different values given for instances
//         System.out.println("Your number of circles is: " + Circle.getNumberOfCircles()); // 2 circles
//         System.out.println("Your c1 area is: " + c1.getArea() + "\nYour c2 area is: " + c2.getArea()); // Different area values
//     }
// }

// class Circle {
//     // DATA FIELDS
//     int radius = 1;

//     // STATIC VARIABLE- ONLY AFFECTS CIRCLE CLASS AS A WHOLE
//     static int numberOfCircles = 0;

//     // CONSTRUCTORS
//     Circle(){
//         // This increments the class variable when the constructor is called
//         numberOfCircles++;
//     }

//     Circle(int radius){
//         this.radius = radius;
//         // This increments the class variable when the constructor is called
//         numberOfCircles++;
//     }

//     // METHODS
//     double getArea(){
//         return (Math.PI * Math.pow(radius, 2));
//     }

//     // STATIC METHOD- CAN TELL YOU INFO ABOUT THE CIRCLE CLASS, BUT NOT ITS INSTANCES
//     static int getNumberOfCircles(){
//         return numberOfCircles;
//     }
// }


//! 10/11/23 - Lecture notes

//# VISIBILITY MODIFIERS:
//# Public - This keyword makes the class, variable, or method accessible by ANY class in ANY package.
//# Private - This keyword makes the class, variable, or method accessible only by its own class.
//# By default, without any visibility modifier, your class/variable/method would be accessible within the package but not outside of it

//# IF YOUR VARIABLE/DATA FIELD IS PRIVATE, YOU CAN USE GETTERS OR SETTERS TO USE THAT VALUE
//# Getter/accessor - A method to get the value. Normally has a return value
//# Setter/mutator - A method to update the value. Normally has NO return value

//# Anyone trying to modify a private variable from another class would need to use a getter/setter method.


//! HW6 - Cylinder (visibility modifiers, static methods, multiple classes)

// public class Cylinder {
//     // DATA FIELDS:
//     private double radius;
//     private double length;
//     public static int numberOfObjects;

//     // CONSTRUCTORS
//     public Cylinder(){
//         radius = 1.0;
//         length = 1.0;
//         numberOfObjects++;
//     }

//     public Cylinder(double radius, double length){
//         this.radius = radius;
//         this.length = length;
//         numberOfObjects++;
//     }

//     // METHODS
//     public double getRadius(){
//         return radius;
//     }

//     public void setRadius(double radius){
//         this.radius = radius;
//     }

//     public double getLength(){
//         return length;
//     }

//     public void setLength(double length){
//         this.length = length;
//     }

//     public double getArea(){
//         return (Math.PI * Math.pow(radius, 2));
//     }

//     public double getVolume(){
//         double area = getArea();
//         return (length * area);
//     }

//     public static int getNumberOfObjects(){
//         return numberOfObjects;
//     }
// }

// public class CylinderTest {
//     public static void main (String[] args){
//         Cylinder cylinder1 = new Cylinder();
//         Cylinder cylinder2 = new Cylinder(2.5, 12.3);
//         Cylinder cylinder3 = new Cylinder();
//         cylinder3.setRadius(5.0);
//         cylinder3.setLength(6.5);
//         System.out.println("The radius of the first cylinder is: " + cylinder1.getRadius() + " and the length is: " + cylinder1.getLength());
//         System.out.println("The base area of the second cylinder is: " + cylinder2.getArea());
//         System.out.println("The volume of the third cylinder is: " + cylinder3.getVolume());
//         System.out.println("The amount of objects created is: " + Cylinder.getNumberOfObjects());
//     }
// }


//! Lab 6 - Rectangle calculations

// public class Rectangle {
//     // DATA FIELDS
//     private double width;
//     private double height;

//     // CONSTRUCTORS
//     public Rectangle(){
//         width = 1.0;
//         height = 1.0;
//     }

//     public Rectangle(double width, double height){
//         this.width = width;
//         this.height = height;
//     }

//     // METHODS
//     public double getWidth(){
//         return width;
//     }

//     public double getHeight(){
//         return height;
//     }

//     public void setWidth(double width){
//         this.width = width;
//     }

//     public void setHeight(double height){
//         this.height = height;
//     }

//     public double getArea(){
//         double area = width * height;
//         return area;
//     }

//     public double getPerimeter(){
//         double perimeter = (2*(width) + 2*(height));
//         return perimeter;
//     }

// }

// public class RectangleTest {
//     public static void main (String[] args){
//         // Instantiating the rectangle
//         Rectangle rectangle = new Rectangle(4.0, 40.0);

//         // Outputting the initial dimensions of the rectangle object
//         System.out.println("The width before is " + rectangle.getWidth());
//         System.out.println("The height before is " + rectangle.getHeight());

//         // Changing the dimensions using setter methods
//         rectangle.setWidth(5.0);
//         rectangle.setHeight(50.0);

//         // Outputting the updated dimensions of the rectangle object
//         System.out.println("The width after is " + rectangle.getWidth());
//         System.out.println("The height after is " + rectangle.getHeight());

//         // Get the area and perimeter of the updated rectangle object
//         System.out.println("The area is " + rectangle.getArea());
//         System.out.println("The perimeter is " + rectangle.getPerimeter());
//     }
// }


//! 10/16/23 - Lecure notes

//# Reference variables (aka "Object variables") contain references (memory addresses). EX:
//# Circle myCircle = new Circle(5.0);
//# In the above example, your myCircle variable is a reference variable. 
//# It doesn't store the object itself, just a reference to the object.

//# HEAP VS STACK:
//# The stack is an organized memory space that's executed in a predictable order. You know that it's last in/first out.
//# The variable is linked to an address of the object which is in the HEAP
//# Think of the heap as a box into which you throw info, with no particular order or predictable organization.
//# Making changes to the object is done *through* the stack, but the updates save in the heap.
//# If you do c1 = c2, your c1 will now reference the c2 object. Now your c1 object has no variable addressing it...
//# THIS IS KNOWN AS GARBAGE

//# Strings are objects

//# You can't access instance variables inside of static methods, but you can access static variables inside of instance methods.

//# Local variables cannot be left uninitialized, but data fields can be (they'll have default values).

//# If you have a local variable that has the same name as a data field, the local variable takes precedence (the compiler ignores the data field).
//# This is why constructors with custom values for the data fields take the new value and not the data field's value
//# This is also the reason why the "this" keyword works the way it does: It sets precedence on the INSTANCE variable instead of the local variable. EX:

// public class valueOfI{
//    int i = 0;
//    getI(){
//    return i       --> Returns i = 0
//    }

    // setI(int i){
    //     return this.i = i  --> Returns i = param i
    // }
// }
//# In the above example, the "this" keyword indicates to the compiler that it's referencing the class. That's also why you can do this-
//# You can use this() as a constructor. Here's how:

// public class ClassName{
//     int radius;
//     int height;
    
//     //Constructors
//     ClassName(int radius, int height){     
//         this.radius = radius;
//         this.height = height;
//     }

//     ClassName(){
//         this(3, 5); // Using this(3, 5) invokes another constructor, the first constructor with (int radius, int height) as its params
//     }
// }


//! 10/18/23 - Lecture notes

//# If the contents of an object cannot be changed once the object is created, the object is called an "immutable object",
//# and its class is called an "immutable class".

//# To create a completely immutable object:
//# 1. Your data fields must be private
//# 2. Your class must have no setter methods
//# 3. The class that references the private class cannot have a getter method that returns that mutable object

//# The third condition is a little confusing. This means that you can't have the following:

// public Otherclass getOtherClass(){
//     return otherClass;
// }

//# If you have a method that returns the mutable object, you can assign it to a variable and change its value like that (see below).

// newObject = firstClass.getOtherClass();
// newObject.setDataField("updated value");

//! In-class practice assignment

// public class Fan {
//     // CONSTANTS
//     public static final int SLOW = 1;
//     public static final int MEDIUM = 2;
//     public static final int FAST = 3;

//     // DATA FIELDS
//     private int speed = SLOW;
//     private boolean status = false;
//     private double radius = 5.0;
//     private String color = "blue";

//     // CONSTRUCTORS
//     public Fan(){
//     }

//     public Fan(int speed, boolean status, double radius, String color){
//         this.speed = speed;
//         this.status = status;
//         this.radius = radius;
//         this.color = color;
//     }

//     // METHODS
//     public int getSpeed() {
//         return speed;
//     }

//     public boolean getStatus(){
//         return status;
//     }

//     public double getRadius(){
//         return radius;
//     }

//     public String getColor(){
//         return color;
//     }

//     public void setSpeed(int speed) {
//         this.speed = speed;
//     }

//     public void setStatus(boolean status){
//         this.status = status;
//     }

//     public void setRadius(double radius){
//         this.radius = radius;
//     }

//     public void setColor(String color){
//         this.color = color;
//     }

//     public String toString(){
//         String onOrOff;
//         if (this.getStatus() == true){
//             onOrOff = "on";
//         } else {
//             onOrOff = "off";
//         }
//         return "The fan's speed is " + this.getSpeed() + ", it is " + onOrOff + ", its radius is " + this.getRadius() + ", and its color is " + this.getColor() + ".";
//     }
// }

// public class FanTest {
//     public static void main (String[] args){
//         Fan f1 = new Fan(Fan.FAST, true, 10, "yellow");
//         Fan f2 = new Fan(Fan.MEDIUM, true, 5, "blue");
//         System.out.println(f1.toString());
//         System.out.println(f2.toString());
//     }
// }


//! HW7 - Package ordering system

// import java.util.*;
// public class Order {
//     // Static variables
//     public static final int ON_ORDER = 0;
//     public static final int CANCELED = 1;
//     public static final int SHIPPED = 2;
//     private static int totalOrder = 0;

//     // Instance variables
//     private String orderName;
//     private Date date;
//     private int status;
//     private String shippingAddress;
//     private String phoneNumber;
//     private String billingAddress;

//     // CONSTRUCTORS
//     public Order(String Name){
//         orderName = Name;
//         totalOrder += 1;
//         status = ON_ORDER;
//         date = new Date();
//     }

//     // METHODS
//     public void cancel(){
//         date = new Date();
//         status = CANCELED;
//     }

//     public void ship(){
//         date = new Date();
//         status = SHIPPED;
//     }

//     public String getShippingAddress(){
//         return shippingAddress;
//     }

//     public void setShippingAddress(String a) {
//         shippingAddress = a;
//     }

//     public String getPhoneNumber(){
//         return phoneNumber;
//     }

//     public void setPhoneNumber(String p){
//         phoneNumber = p;
//     }

//     public String getBillingAddress(){
//         return billingAddress;
//     }

//     public void setBillingAddress(String add){
//         billingAddress = add;
//     }

//     public static int getTotalOrder(){
//         return totalOrder;
//     }

//     public String getOrderName(){
//         return orderName;
//     }

//     public Date getDate(){
//         return date;
//     }

//     public int getStatus(){
//         return status;
//     }

//     public String toString(){
//         return "Order Name: " + orderName + "| Date: " + date + "| Status: " + status + "| Shipping Address: " + 
//         shippingAddress + "| Billing Address: " + billingAddress + "| Phone Number: " + phoneNumber;
//     }

// }


// public class TestOrder {
//     public static void main(String[] args){
//         Order o1 = new Order("One PC");
//         Order o2 = new Order("Two Cars");
//         Order o3 = new Order("Three Baskets");
        
//         // Setting all values for o1
//         o1.cancel();

//         // Setting all values for o2
//         o2.setShippingAddress("91 Oliverio Drive");
//         o2.setBillingAddress("255 Counts Lane");
//         o2.setPhoneNumber("(620)-562-5212");
//         o2.ship();

//         // Setting all values for o3
//         o3.setShippingAddress("123 Ave Street");
//         o3.setBillingAddress("67 North Lane");
//         o3.setPhoneNumber("(999)-999-9999");

//         // ALL OUTPUTS FOR ASSIGNMENT:
//         System.out.println("Order 2's Name: " + o2.getOrderName());
//         System.out.println("Order 3's Date: " + o3.getDate());
//         System.out.println("Order 2's Status: " + o2.getStatus());
//         System.out.println("Order 3's Shipping Address: " + o3.getShippingAddress());
//         System.out.println("Order 2's Billing Address: " + o2.getBillingAddress());
//         System.out.println("Order 3's Number: " + o3.getPhoneNumber());
//         System.out.println("The number of orders is: " + Order.getTotalOrder());
//         System.out.println(o1.toString());
//         System.out.println(o2.toString());        
//         System.out.println(o3.toString());

//     }
// }


//! Lab 7 - Distance between two circles

// public class Circle {
//     // The radius of this circle, and the x & y coordinates of the circle center
//     private double radius, centerX, centerY;

//     // CONSTRUCTORS
//     public Circle(double radius, double centerX, double centerY) {
//         this.radius = radius;
//         this.centerX = centerX;
//         this.centerY = centerY;
//     }

//     public Circle() {
//         this (1.0, 1.0, 1.0);
//     }
//     // get and set methods for the private data fields radius, centerX, centerY
//     public double getRadius(){
//         return radius;
//     }

//     public void setRadius(int radius){
//         this.radius = radius;
//     }

//     public double getCenterX(){
//         return centerX;
//     }

//     public void setCenterX(int centerX){
//         this.centerX = centerX;
//     }

//     public double getCenterY(){
//         return centerY;
//     }

//     public void setCenterY(int centerY){
//         this.centerY = centerY;
//     }
    
//     // An instance distance method 
//     // (it would be better as static w/ 2 objects as params, imo)
//     public double distance(Circle c2){
//         // d = sqrt((x2- x1)^2 + (y2- y1)^2)
//         Circle c1 = this;
//         double innerFunction = ((Math.pow((c2.getCenterX() - c1.getCenterY()), 2)) + (Math.pow((c2.getCenterY() - c1.getCenterY()), 2)));
//         return Math.sqrt(innerFunction);
//     }
// }


// public class TestCircle {
//     public static void main (String[] args){
//         Circle c1 = new Circle();
//         Circle c2 = new Circle(5.5, 3.5, 4.2);
//         double d = c1.distance(c2);

//         System.out.println("Circle 1's Radius: " + c1.getRadius());
//         System.out.println("Circle 1's CenterX: " + c1.getCenterX());
//         System.out.println("Circle 1's CenterY: " + c1.getCenterY());
//         System.out.println("Circle 2's Radius: " + c2.getRadius());
//         System.out.println("Circle 2's CenterX: " + c2.getCenterX());
//         System.out.println("Circle 2's CenterY: " + c2.getCenterY());
//         System.out.println("Distance from Circle1 to Circle2: " + d);
//     }
// }


//! 10/23/23 - Lecture notes

//# ARRAYS:
//# An array is a data structure that represents a collection of the SAME TYPE OF DATA

//# Arrays are reference type, like objects and strings.

//# DECLARING ARRAYS VARIABLES (first half)
//# double arrayName[];

//# INITIALIZING ARRAY VARIABLES (second half)
//# arrayName = new dataType[size];
// EX: array = new double[10]; --> this array can store 10 doubles

//# Like data fields taking default values, when you create an array, your elements are assigned default values

//# Once an array is created, you cannot change its size; it's fixed.
//# arrayName.length; --> returns the size of the array.
//# arrayName[arrayName.length - 1]; --> returns the last element's value.

//# If you know your array's values ahead of time, you can use the SHORTHAND INITIALIZER:
//# double[] myList = {1, 2, 3} --> this creates an array (length= 3) w/ those values.

//# USING FOR LOOPS FOR ARRAYS:
//# 1. Initializing arrays- once you declared your array, you must change from default values. You can use a for loop like so:

// import java.util.Scanner;
//# You must import the following line to have Array methods
// import java.util.Arrays;
// public class App{
//     public static void main (String args[]){
//         Scanner input = new Scanner(System.in);
//         double myArray[] = new double[10];
//         for (int i = 0; i< myArray.length; i++){
//             System.out.print("Please enter a value for the array: ");
//             myArray[i] = input.nextDouble();
//         }
//         input.close();
//         System.out.print(Arrays.toString(myArray));
//     }
// }

//# 2. Copying arrays=
// import java.util.Arrays;
// public class App{
//     public static void main(String args[]){
//         int array1[] = {1, 2, 3, 4};
//         // Declare an array with the length of the first array
//         int array2[] = new int[array1.length];

//         // This for loop sets each array element in a2 to be the same as a1
//         for (int i = 0; i < array1.length; i++){
//             array2[i] = array1[i];
//         }
//         System.out.println(Arrays.toString(array1));
//         System.out.println(Arrays.toString(array2));
//     }
// }


//! 10/24/23 - Personal notes

//# Though I'm not sure when you'd need this, you can mass initialize a bunch of objects at the same time with a loop:

// Circle circleArray[] = new Circle[10];
// for (int i = 0; i < circleArray.length; i++){
//     circleArray[i] = new Circle();
// }

//# This would create an array of objects


//! 10/25/23 - Lecture notes

//# Understanding the brackets:
//# In java, when the compiler sees a datatype and [], it knows that it isn't working with that datatype, but an ARRAY of that type.
//# This is why PASSING ARRAYS AS ARGUMENTS needs your method to be written like so:

// public static voic printArray (int[] array){
// }

//# A useful example demonstrating nuances when passing arrays as arguments:
//# int[] indicates that the method returns an array of ints. the param is an array of ints.
// public static int[] reverse (int[] list){
//     // sets the length of the new array = to array passed as argument
//     int[] result = new int[list.length];  

//     // i increases, going from the start of the argument array. j decreases, going from the end of the new array
//     for (int i = 0, j = result.length - 1; i < list.length; i++, j--){ 
//         result[j] = list[i];
//     }

//     // remember that you must return an array
//      return result;
// }


//! Lab 8: Find a value greater than or equal to the average in an array

// import java.util.Scanner;
// public class Lab8 {
//     // Put the scanner as a static datafield to be accessed in all methods
//     private static Scanner input = new Scanner(System.in);

//     public static void main (String[] args){
//         System.out.println("Please enter the array size:");
//         int arraySize = input.nextInt();
//         double[] scores = inputScores(arraySize);
//         // Get return value from highScoreCount
//         int highScore = highScoreCount(scores);
//         System.out.println("The number of scores above average is: " + highScore);
//     }

//     // A method that returns a double array using user’s inputs from the console window
//     public static double[] inputScores (int size){
//         double[] array = new double[size];
//         System.out.print("Please enter " + size + " scores in the array you want to make: \n");
//         for (int i = 0; i < size; i++){
//             System.out.println("Please enter a score");
//             array[i] = input.nextDouble();
//         }
//         return array;
//     }

//     public static int highScoreCount(double[] scores){
//         int sum = 0;
//         // A for loop to add each array element together for the average
//         for (int i = 0; i < scores.length; i++){
//             sum += scores[i];
//         }
//         double average = (sum * 1.0) / scores.length;

//         int highScore = 0;
//         // Another for loop to count the number of scores above the average
//         for (int j = 0; j < scores.length; j++){
//             if (scores[j] > average){
//                 highScore++;
//             }
//         }
//         return highScore;
//     }
// }
