# Note: I am learning Python now, so please don't judge if it's weird code!

# * Variable assignment: No let/const/var keywords; snake_case; just like Ruby
# // pet_mood = 'hungry'
# // pet_name = 'Jim'
# * If you want to have a constant variable, though python won't stop you, you should capitalize the variable name to indicate it shouldn't be changed. (Ex: MAX_INPUTS)


# * if/ elif/ else instead of if/elseif/else. Uses : and indentation to indicate scope in code, not curly braces (INDENT NEEDS TO BE 4 SPACES)
# //  if pet_mood == 'hungry':
# //    print("Feed the beast")
# //  elif pet_mood == 'angry':
# //    print("Time to get eaten")
# //  else:
# //    print("Jim is straight up chilling")

# * Ternary operator in Python vs JavaScript
# // print("This code if true") if (condition met) else print("this code if false")  ==> Python
# // condition met ? console.log("This code if true") : console.log("this code if false") ==> JavaScript

# * Function declaration: snake_case; def keyword instead of function (like ruby); unlike ruby, needs (): and note the use of a colon; function needs to be invoked to work
# // def say_hello():
# //     print("Haiii :>")


# // say_hello()

# * String interpolation in python vs JavaScript
# // f"My name is {name}"  ==> Python
# // `My name is ${name}` ==> JavaScript

# * Default parameter here; can call function without passing argument


# // def greet(name="david"):
# //     print(f"hello, {name}")


# // greet()  ==> "hello, david"    greet("John") ==> "hello, John"


# // def greet(name):
# //     print(f"hello, {name}")


# // greet("David")  ==> "hello, David"

# * SOME USEFUL KEYWORDS IN PYTHON
#! try/except - these are for error catching & handling! Example:

# // def functionName():
# //     try:
# //         print("The function was executed successfully!")
# //     except TypeError:
# //         print("When a TypeError occurs, THIS code runs instead!")

# * While an if/else statement can be made for the same thing, try and except is for error handling usually

# ! ARRAYLISTS = LISTS
# ! IMMUTABLE ARRAYLISTS = TUPLES
# ! OBJECTS = DICTIONARIES

# !                                          LISTS (dynamic arrays in python; same as Java ArrayLists)
# * In python, if you put a negative "list" index value- array[-1] - it would start from the last number and go backwards.
# * You can use the "in" operator to see if a value is in a list (returns boolean), or "not in" to check if it's NOT in the list
# // list = [1, 2, 3]
# // print(2 in list) ==> true

# // menu_items = ["pizza", "mushroom stew",
# //               "burger", "sushi", "cheese fries", "wonton soup", "beer", "salad"]
# // menu_items[-1] ==> "salad"

# // If you want all list items above index # 3, you can just do the following:
# // print(menu_items[3:]) ==> ["sushi", "cheese fries","wonton soup", "beer", "salad"] (As you can see, inclusive)

# // As you might expect, if you want the opposite (all list items UP TO an index):
# // print(menu_items[:3]) ==> ["pizza", "mushroom stew", "burger"] (You just move the : before the index #; NOTE that it is exclusive, doesn't include #3)

# // You can combine the two to make a range:
# // print(menu_items[3:7]) ==> ["sushi", "cheese fries", "wonton soup", "beer"] (Note how it doesn't include 7, it goes 3-6)

# // You can also use [-3:] to get the last 3 values in a list no matter the size of the list
# // Another useful trick is COPYING lists (don't directly reference the first list, it'll just assign the new list to the old list's memory address):
# // list1 = [1, 2, 3, 4]
# // list2 = list1[:]
# // print(list2) ==> [1, 2, 3, 4]

# * .index() tells us the index of a list item
# // print(menu_items.index("cheese fries")) ==> 4

# * .reverse() doesn't return anything for us, but this reverses our original lists (LISTS ARE MUTABLE)
# * .upper() is non-destructive (doesn't change our original list like .reverse() did )
# * .count() counts number of times a list item is repeated (you must pass the value in- .count('item_to_look_for"))
# * .append() is like JavaScript ".pop()"; it adds a value at the end of the list (MUTATES OG LIST) (NOTE: You can remove a specific element like so: del arrayName[i])
# * .insert() takes 2 arguments: first one = index, second one = value. (list.insert(0, "bread") => inserts "bread" into list at array= 0)
# * .pop() takes no arguments, removes last item (just like with JavaScript)(obviously destructive)
# * .remove() is better- takes an argument of the thing you want to remove, removes from og list destructively (menu_items.remove("pizza"))
# * .clear() removes ALL items in a list. (menu_items.clear() ==> [])

# * You can combine two lists together by making a new variable and using +, as follows:
# // new_list = menu_items + ["another_item1", "another_item2"]

# !                                          TUPLES (immutable data structures)
# * With tuples. we use parentheses, as opposed to square or curly brackets.
# * Used to read data, not modify. If you do something like ".pop()" on a tuple, it'll say that the tuple object doesn't have that attribute.

# // pet_ages = (1,2,3,4,5,6,7,8,9,10)

# // print(pet_ages[0] ==> 1)

# !                                          RANGES (mostly used in loops)
# // print(range(#)) => range(0, #)
# * Here's how you make a loop and print it (I think this is similar to Ruby)
# // for num in range(10):
# //     print(num) ==> 0-9 (note that it isn't inclusive- no 10)

# * More advanced range parameters: first= starting point, second= ending point; third= increments by this value
# // for num in range(50,60,2):
# //     print(num) ==> 50, 52, 54, 56, 58


# !                                          DICTIONARIES (objects in python)
# * Dictionaries use curly brackets, just like sets (more on that in next part).
# * There are two ways of declaring dictionaries in python. Here are examples:

# // student_info_1 = {'name':'David', 'age': 21, 'study':'computer science', 'location':'USA'}
# // student_info_2 = dict(name= 'David', age= 21, study= 'computer science', location= 'USA')
# * As you can see, if you choose the first method, you must write it similar to JSON objects- string on the left side as well. Also uses colons and commas.
# * If you use the dict() dictionary creation method, you don't need curly braces, but the syntax inside is different.
# * The output is the same for both though

# * You can reassign AND create values within a dictionary same as with objects- just use bracket notation and write in a new value. Example:
# // student_info['age'] = 22 (changes age to 22)
# * You can also use the .update() method-
# // student_info.update({'age': 21}) (Note how it's the same way you'd do it with an API patch request!)
# * NOTE that you can create values the same way; if age didn't exist, doing either of the two above commands would add it to my dictionary.

# * You can DELETE dictionary attributes by using the del keyword:
# // del student_info['location'] (Would delete location from student_info)
# * You can also use .pop('attribute'). The list version of .pop() is the same as .popitem() for dictionaries; not sure why they'd do that but whatever
# // student_info.pop('location')

# * MORE ON LOOPING (here's how you make a function that loops through a list:)

# // vet_data = [
# //     {
# //         'name': 'Plato',
# //         'animal': 'cat',
# //         'age': 2
# //     },
# //     {
# //         'name': 'Shimmy',
# //         'animal': 'snake',
# //         'age': 1
# //     },
# //     {
# //         'name': 'Biter',
# //         'animal': 'dog',
# //         'age': 10
# //     }
# // ]   (You need to put the dictionaries into a list, or the loop won't be able to run)


# // def loop_through_list(list):  # Having this as a function instead of a loop in the global scope allows us to pick the argument we pass in, and also lets us call it when we want
# //     for call_whatever_you_want in list:
# //         print(call_whatever_you_want)

# vet_data = [
#     {
#         'name': 'Plato',
#         'animal': 'cat',
#         'age': 2
#     },
#     {
#         'name': 'Shimmy',
#         'animal': 'snake',
#         'age': 1
#     },
#     {
#         'name': 'Biter',
#         'animal': 'dog',
#         'age': 10
#     }
# ]


# def do_while(list):
#     counter = 0

#     while (counter < len(list) - 1):  # (Note that len(list) is like array.length())
#         counter += 1
#     return


# print(do_while(vet_data))

# print(len(vet_data))

# * input() lets the user input information.
# // input('What is your name?') --> "What is your name?" (allows you to type response. Then you can do the following)
# // name = input('What is your name?')

# * Notes from python CS50:
# * To better understand return values, think of a function as a friend. You tell the friend, go ask that person whether they like me.
# * When they come back, you hope that they will share this knowledge with you, after having performed the operation.

# * Comments should be used liberally when coding to make your code easy to understand for yourself, your teacher, or your colleagues.

# * In python, you can use ''' (three single- or double- quotes) to comment out multiple lines, as follows:

'''
    This is a comment
'''

# * The print function is shown to have 3 default parameters in the official documentation.
# * print(*objects, sep=' ', end='\n')
# * This means it can take any (*) number of objects, the arguments will be separated by a single space, and it will end by breaking the line.
# * THESE ARE DEFAULTS; you can change the values if you wanted to. For instance:
# // print("Alfred", "Barry", "Charlie", sep='!') --> "Alfred!Barry!Charlie"

# * Built in string method- .strip(), removes blank space
# // name = "      david   "
# // name.strip() --> "david"

# // name.capitalize() --> "David"
# // name.title() --> "Capitalizes First Letter Of Each Word"

# * In Python, you can assign multiple variables at once, which can sometimes come in handy:
# // name = input('what is your name?').strip().title() <-- input('david')
# // first, last = name.split(' ')
# // print(f"Hello, {first}") --> "Hello, David"

#! Data types in Python:
# * str - string
# * int - integer
# * float - float (decimal)
# * bool - boolean (true/false)
# * list - array basically
# * dict - dictionary (object basically)
# * None - None (null basically)


# * int(x) method would try to convert the data type of x to number
# * float(x) method would try to convert the data type of x to float
# * round(number[, ndigits]) from python docs- the square brackets indicate optional. ndigits = number of digits, decimal point values to round to
# * There is also a way to pick the rounding using the format strings:
# // x = 3.141592
# // print(f"{x:.2f}") --> 3.14
# * If you want to format a number output that's really big to have commas separating it, you can use the following syntax:
# // x = 1000
# // print(f"{x:,}") --> 1,000

# * In python you can create a range without using "and":
# // if 90 <= score <= 100: --> This conditional is saying if the score is between 90 and 100, do ___.

# * In python THERE IS NO i++ or i--. Only i+1, i-1

# * for loop allows you to iterate over a list in a very simple way:
# // for i in [1, 2, 3]:        <-- Could put range(3)
# //     print(i)
# //     i+1            --> 1 / 2 / 3 (/ = line break)

# * In loops, like some other languages, you can return, continue, and break.
# * Break- stops the loop without returning anything
# * Continue- Keeps the loop going if a condition is (or isn't) met
# * Return- lets you use a value returned by the function

# * list-
# // cowboys = ["John", "Bill", "Arthur"]

# * dict-
# // cowboys = {
# // "John": "high honor",
# // "Bill": "low honor",
# // "Arthur": "high honor"}

# // print(cowboys["Arthur"]) --> "high honor"

# // for cowboy in cowboys:
# //     print(cowboy, cowboys[cowboy], sep=": ") --> John: high honor / Bill: low honor / Arthur: high honor

# * You can use underscores in numbers to make them more readable. Python doesn't care about the placement, so you can have 1 million be 1000000, 1_000_000, or 1_0_0_0_00_0 
# *  and it will be interpreted the same

