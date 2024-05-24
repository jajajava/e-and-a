
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