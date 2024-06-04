
//! Module 4: Command line interfaces

//# All directories start '/' (root/ superuser root). 
//# The root/superuser/admin account is the most privileged in a unix/linux system and has complete control over the entire system, including access to all files and commands.
//# This is NOT the same as '~', the username root (aka home directory). Those are only the files within the regular user's control

//# Commands are issued in the directory that the shell is currently open in- the "working directory".
//# pwd - this command prints the current directory you're in (print working directory)
//# cd - change directory
//# ls - list directory (you can see the files within your current directory)
//# clear - clears text currently in the terminal
//# mkdir directoryName - Creates a directory with the directory name provided after a space
//# rmdir directoryName - Deletes a directory with the directory name provided after a space
//# touch fileName - Creates a file with the file name provided after a space
//# rm fileName - Deletes a file with the file name provided after a space ("rm -r directoryName" is how you delete directories recursively- the directory and all files inside it)
//# cat - prints a file's contents in the console window (could be used with the input redirection operator, <) (you can also use the "more" or "less" command to paginate the text file)
//# man commandName - Provides you with a manual for the command you specify (ex: man mkdir gives you all the possible flags and things you can do with it)
//# echo - like "print" in python, "console.log()" in javascript, "system.out.println()" in java
//# grep "keyword" fileName.txt - Searches the provided file for a keyword, then prints the text with the keyword highlighted
//# mv - used to move AND to rename files
//# nano - a built in text editor (like vim but better). Ctrl + O to save ("write out")
//# units - Probably not very useful in programming but it's a built in unit conversion tool
//# chmod - modifies file access rights of user, group, or others. (chmod u=rwx,g=r,o= fileName means: user can read, write, and execute that file; group can read only; others can't do anything to it)
    //chmod = CHange file MODe

//# Absolute path: a path showing how to get to a file/directory from the home directory
//# Relative path: a path relative to the current/working directory

//# . refers to the current directory
//# .. refers to the parent directory
//# ~ refers to your home directory

//# Commands can have switches and/or arguments
//# A command line switch, also known as an option, parameter, or flag, modifies the operation of a command. They use a single or double dash (- or --)
//# ls -a (all) shows all files, including hidden files
//# ls -l (long) shows a long description of the files
//# ls -h (human-readable) makes the text a lot easier to read
//# You can combine the flags like so: ls -alh
//# ls --help shows all the possible variants of the ls command 
//# (NOTE: for some reason, doesn't work on a lot of macs, maybe they're doing away with it? you can do man ls and it shows the manual for ls)

//# REDIRECTING COMMAND OUTPUTS INTO A FILE
//# 1. > is used to redirect the output of a command into a file. If the file doesn't exist, it is created; otherwise, it is overwritten.
// Ex:  echo "Hello" > fileName.txt   --> if you didn't have a file named fileName.txt, it would be created and "Hello" would be the only thing in it
//# 2. >> is used to APPEND the output of a command into a file (can create a file but doesn't overwrite existing, just adds to them)
//# 3. < is used to redirect input of a command FROM a file.
// Ex: cat < "Example.txt"  --> Prints contents of Example.txt in the terminal
//# 4. | is used to send the output of one command as the input to another.

//# DO NOT!! "do rm -rf /". It forcefully and recursively removes all files and directories from the ROOT (/). Your computer will become a brick unless you're able to reinstall the OS


//! Module 5: Bash scripting

//# Environment variables are capitalized
//# Shell variables are snake_case
//# To reference a variable, you do $variableName (with the '$')

//# cp fileOrDirectoryPath newStorageLocationPath - Copies the file or directory with the given relative path to the new location provided after a space (ex: "~/cp test.txt ." copies to current dir)

//# What is a shell script?
//# It is an executable file that, when executed, runs a set of commands written in the file

//# The shebang sequence is the first line in any Linux shell script. It starts with a character sequence consisting of a hash followed by an exclamation mark (#!). 
//# The presence of a shebang indicates that a file is executable. When the shebang line is missing, #!/bin/bash is the default shell used to execute the file.

//# How do you run shell scripts? There are a few ways:
//# You can write $ "/bin/bash fileName.sh", which is long and tedious.
//# You can also give yourself permissions with $ "chmod u=rwx fileName.sh". From there, you can always execute it via $ "./fileName.sh".
//# Remember, you can see who has what permissions with ls -l. The first part that says "-rwxr--r--@" are the permissions of the user, group, and others in that order
//# (rwx means the user has read, write, and execution permissions)
//# The permission triplets can be represented as binary and decimal numbers. Think of "has the permission" as a 1, and "doesnt have the permission" as a 0.
//# --- = 000 (in decimal) = 0 (in binary)
//# --x = 001 (in decimal) = 1 (in binary)
//# -w- = 010 (in decimal) = 2 (in binary)
//# -wx = 011 (in decimal) = 3 (in binary)
//# r-- = 100 (in decimal) = 4 (in binary)
//# r-x = 101 (in decimal) = 5 (in binary)
//# rw- = 102 (in decimal) = 6 (in binary)
//# rwx = 103 (in decimal) = 7 (in binary)
//# If you want, instead of writing $ "chmod u=rwx,g=r,o= fileName", you can write one number per group using the binary equivalents above^
// Ex: chmod 740 fileName -> assigns 7 to user, 4 to group, 0 to others
//# Another option is this syntax:
// Ex: chmod u-w,g+r  --> user "minus write" (takes away user's write permissions), group "plus read" (gives group read permissions)
// You can also just write chmod +rwx fileName if you want to give everyone the rights to read/write/execute in one shot

//# As you realized by now, spacing is important. Naming variables looks like this: string="your string". Note the lack of spacing before and after the variable's value

//# You can make comments in shell scripts via '#'

//# read - This command is like the scanner input in Java. You can input values into the command window and it can store that value on a variable. EX:
// echo "Enter your name: "
// read first_name
// echo "Hello $first_name"

//# You can pass arguments into the command with a space, and then reference them. EX:
// (You run this command: "./test.txt a b c")
//. #0 - returns the name of the script ("./test.txt")
//. #n - returns number of arguments passed
//. #1 - returns first argument (a), #2 - returns second argument (b), #3 - returns third argument (c)

//# CONDITIONAL STATEMENTS IN SHELL:
//# if/elif/else/fi
// In older languages, they'd close a statement with the reverse of the starting word (if is closed with fi)
//# When using if or elif, you need the "then" keyword to indicate the start of the code block, like so:
// if [ condition1 ]; then
//   (commands go here)
// elif [ conditional2 ]; then
//   (commands go here)
// else
//   (commands go here)
// fi
//# NOTE: the spacing between the brackets of the conditional statement and the condition. That is required.
//# Also, note that you finish the conditional statement with a semicolon, write "then", and then write commands (could be on same line but it's less readable imo)
//# Multiple commands are separated with semicolons. Note the way the else clause also doesn't have any requirements (semicolon, do, spacing, etc.)
//# Then you just close all of the conditional statements with one "fi"

//# RELATIONAL OPERATORS IN SHELL:
//# -lt = less than
//# -lte = less than or equal to
//# -gt = greater than
//# -gte = greater than or equal to
//# -eq = equal to
//# -ne = not equal to
// Example usage: 
// if [ $n -gt 5 ]; then
//   echo "Variable n is greater than 5"
// fi

//# LOOPS IN SHELL:
//# There are many types, but what makes them similar is their use of "do"
//# The "do" keyword indicates that it should do something, kind of like in Ruby. EX:
// (ENHANCED FOR LOOP):
// for arg in $@; do ... done
//# for - keyword that starts the loop
//# arg - temporary variable that may be updated with each iteration
//# in $@ - specifies the list of items to iterate over ($@ is a variable that expands to all the positional parameters; essentially represents all passed arguments as array of args)
//# ; - separates the for statement from the next one
//# do - indicates the beginning of the commands to be executed for each item in the list
//# ... - NOT ACTUAL CODE, JUST A PLACEHOLDER. Between do and done, you put your lines of code which are separated with semicolons.
//# done - indicates the end of the commands to be executed for each item in the list

//# $* - like the special $@ variable, it references all positional parameters; however, it treats them all as one single word/string.

//# ARRAYS IN SHELL:
//# arrayName=('value1' 'value2' 'value3')
//# ${#arrayName[@]}   --> returns the array length. Can be assigned to a variable like so:
// variableName=${#arrayName[@]}
//# As shown before, can be iterated over via loops. EX:
// (FOR LOOP):
// for (( i=0;i<$variableName;i++ )); do
//      echo ${arrayName[${i}]}
// done
//# The outer ${} allows you to reference the current value of the arrayName array. You then access a value in the array via []. Inside, you have ${} to reference the current value of i
//# So to clarify, you access values in an array the same way. ${array[0]} -> first value of the array
//# You can apparently do a hell of a lot more with symbols and the ${} syntax. One very useful thing is default values for variables.
//# If you do this: ${variableName:-whatever_value_you_want}  --> if your variableName variable is null or unset (empty in javascript), it temporarily becomes the string "whatever_value_you_want".
//# HOWEVER, when you reference it again without the default flag, like so: ${variableName}  --> it returns an empty string, "".
//# If you want to ASSIGN an unset or null variable to a default value, you do it with this:
//# ${variableName:=Value}  --> Now if your variableName variable was unset originally, it is assigned the string "Value" and referencing it will return "Value"!

//# Bash allows you to execute commands in a subshell like so: echo $( command )

//# FUNCTIONS IN SHELL:
//# You can define functions and call them SEQUENTIALLY (you can't define a function at the bottom cause it isn't pre-compiled, it's executed at runtime) like so:

// function function_name {
//     local VAR_NAME="This is an example variable"
//     echo VAR_NAME
// }

// function_name  --> calls the function

//# NOTE the function keyword, the use of curly braces, lack of semicolons between commands (only necessary if they're on one line), the LOCAL keyword, and the way you call the function.
//# The local keyword is used to declare a local variable that's only visible in the function. If you have a VAR_NAME variable outside the function and don't use local, it gets reassigned.
//# To call the function, you just write the function's name, no need for the () like in other languages.
//# TO WRITE A FUNCTION WITH PARAMETERS:
//# All you need to do is add () to the function name, like so:
// function function_name(){...}
//# Then you just access the arguments passed via $1, $2, ... $n


//! Assignment 3 - Python

// with open("grades.txt", "r") as file:
//     class_data = {}
//     for line in file:
//         locatorFront = line.find(',')
//         locatorBack = line.find(',') + 1
//         student = line[:locatorFront]
//         grade = line[locatorBack:].strip()
//         class_data[student] = float(grade)
//     students_list = list(class_data.keys())
//     grades_list = list(class_data.values())

// def get_average():
//     total = 0
//     for grade in grades_list:
//         if grade is not None:
//             total += grade
//     return float(total / len(grades_list))

// def get_max():
//     max_grade = max(grades_list)
//     best_student = students_list[grades_list.index(max_grade)]
//     return f"Maximum: {max_grade} ({best_student})"

// def get_min():
//     min_grade = min(grades_list)
//     worst_student = students_list[grades_list.index(min_grade)]
//     return f"Minimum: {min_grade} ({worst_student})"

// def above_average_counter():
//     average = get_average()
//     counter = 0
//     for grade in grades_list:
//         if grade > average:
//             counter += 1
//     percent_of_class = (counter/len(grades_list)) * 100
//     return f"Grades above average: {counter}, {percent_of_class}%"

// def below_average_counter():
//     average = get_average()
//     counter = 0
//     for grade in grades_list:
//         if grade < average:
//             counter += 1
//     percent_of_class = (counter/len(grades_list)) * 100
//     return f"Grades below average: {counter}, {percent_of_class}%"

// # I hope it's not an issue that I put the formatting in the print(). I originally had it inside of the method, but moved it so I can reuse it in the two counter methods
// print(f"Average: {get_average()}")
// print(get_max())
// print(get_min())
// print(above_average_counter())
// print(below_average_counter())

//# Note: The format for each line in the imported file was "firstName LastName,grade", with grade being a float