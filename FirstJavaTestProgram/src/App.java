// 8/15/23 - First program (following tutorial provided in class)

// public class App {
//     public static void main(String args[]){
//         JOptionPane.showMessageDialog(null, "test", "header", JOptionPane.CANCEL_OPTION);
//         // System.out.println("Welcome to Java");
//     }
// }

// Note how the indentation looks; You nest it like that to show a heirarchal structure, for better readability.

/*
    IMPORTANT JAVA NOTES:

    Java consists of the compiler, called "Javac", and the interpreter, called the "Java Virtual Machine", or JVM. 
    When you run the command javac, the compiler checks for syntax errors. If the code is clean, it creates (or updates) a file called FileName.class
    Running java FileName is actually the JVM reading the compiled .class file (known as compiled bytecode), not the .java file (known as source code). 
 */


// 8/16/23 - This program makes a modal window/message come up. Note the import of the java Library before the App class.

// import javax.swing.JOptionPane;
// public class App {
//     public static void main(String args[]){
//         JOptionPane.showMessageDialog(null, "test", "header", JOptionPane.INFORMATION_MESSAGE);
//     }
// }

// 8/21/23 - Important lecture notes

// JAVA PRIMITIVE DATA TYPES:
// 1. Byte: Stores whole numbers from -128 to 127 (Size: 1 byte)
// 2. Short: Stores whole numbers from -32,768 to 32,767 (Size: 2 bytes)
// 3. Int: Stores whole numbers from ~2.1 million to 2.1 million (Size: 4 bytes)
// 4. Long: Stores whole numbers from ~9.2 quintillion to 9.2 quintillion (Size: 8 bytes)
// 5. Float: Stores fractional numbers. Stores 6-7 decimal digits (Size: 4 bytes)
// 6. Double: Stores fractional numbers. Stores 15 decimal digits (Size: 8 bytes)
// 7. Boolean: Stores true/false values (Size: 1 byte)
// 8. Char: Stores a single character/letter or ASCII values (Size: 2 bytes)

// variable = expression   <-- Variable is always on the left of the = operator (= being assignent operator, not equality)

// DECLARING VARIABLES IN JAVA: 
// Unlike JavaScript where you have a keyword to declare the variable (let, const, var), you simply write dataType variableName. Here's how it looks:
// double radius;    <-- Declare the variable (allocates memory)
// radius = 20;      <-- Initialize the variable (assigns value)
// Java lets you assign values in the same line (double radius = 20;) and also declare multiple variables at once (double radius, area;)

// In Java, you can only use double quotes (" ") only for strings, and only the single quotes (' ') only for chars.

// Java has STRING CONCATENATION ("Hello my name is " + variableName);
// There are also template literals, but it's much uglier than in newer languages. If you want more info, look up "Java string format"

// public class App {
//     public static void main(String args[]){
//         String variableName = "David";
//         System.out.println("My name is " + variableName);
//     }
// }

// 8/23/23 - Lecture notes: Getting user input through console

// Getting input from the console-
// 1. Import java.util.Scanner;
// 2. Create a Scanner object -> Scanner input = new Scanner(System.in);
// 3. Use the methods next(), nextByte(), nextShort(), nextInt(), nextLong(), nextFloat(), nextDouble(), or nextBoolean() to obtain
// a string, byte, short, int, long, float, double, or boolean value. For example:

import java.util.Scanner;
public class App{
    public static void main(String args[]){
        Scanner input = new Scanner(System.in);
        System.out.print("Enter a number for radius: ");  // NOTE the fact that it's not .println()- print vs println is that print has no line break, looks better
        double radius = input.nextDouble();
        double area = (radius * radius) * 3.14159265359;
        System.out.println("Your area is " + area);    
        input.close(); // This isn't necessary but it makes your code run faster by ending unnecessary operations
    }
}