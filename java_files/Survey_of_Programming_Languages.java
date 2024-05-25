
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

//# Bash allows you to execute commands in a subshell like so: echo $( command )