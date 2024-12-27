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
#! try/except - these are for error catching & handling! Example (More on this later):

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
# * Return- lets you use a value returned by the function. NOTE: If no explicit return, a printed function will print "None"

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


# !        DYNAMIC PARAMETERS
# * If you use *args at the end of a method's parameters, you're allowing any number of parameters to be inserted into a function. Ex:
# //   def method_name(height, *args):
# //       height = height
# //       for value in args:  <-- args can have any size, it'll all get printed
# //           print(value)
# // Example method call: method_name(40, "john", 1, None)

# * If you use **kwargs (keyword args) at the end of a method's parameters, you're passing keyword arguments (labeled arguments, like food='apple'). It accepts key/value pairs (dicts can be passed)
# // def method_name(**kwargs):
# //     for k, v in kwargs.items():
# //         print(f"key: {k}, value: {v})

# * You can then pass a dictionary like so:
# // method_name(**dic)
# *  This basically converts your dictionary into method_name(a=1, b=2)


# !        OOP in Python
# * Note: A function that is part of a class is called a method.
# // You create a class with the "class" keyword, and name it with a capital letter per convention. Ex:
# //     class Person:
# //        data_field = "this is a variable shared across all instances. IT SHARES ONE MEMORY ADDRESS; UPDATING IN ONE INSTANCE MEANS UPDATING FOR ALL"
#           * The __init__() function is normally empty by default, automatically given if no other constructor is given
#           * It's used to 
# //        def __init__(self, name, age):
#               * This is where you insert attributes (instance variables). Not the same as data fields, which are basically static class variables
# //            self.name = name
# //            self.age = age
# //        -- DEFINE OTHER INSTANCE METHODS HERE --

# * When we use the __init__() method, we must list "self" as the first parameter each time; when we make an instance of the class though, it's automatically inserted so we skip over that argument.
# * NOTE: When we instantiate a class, we don't call __init__(), we call ClassName(param2, param3); __init__() is called automatically from inside the class, and self is auto-inserted
# * ("self" is like "this" in Java OOP)

# * If you have a child class, you must write super().__init__(...) inside the child's __init__().
# * If you want a sister class, you just do self.attribute_name = SisterClass() inside the original class's init method (dividing one class into several peer classes is "composition")


# !         File I/O
# * You need to create a path, an object that represents a file path (location).

# // from pathlib import Path
# // path = Path('file_name.txt')
# // contents = path.read_text()

# * We can remove the space/linebreaks in a file with .strip(), or just .rstrip() for the right side of the text (the end of the text, in other words)
#// contents = path.read_text().rstrip()

# * If we want to create a list from a string, we can do so with ".splitlines()", which looks for a physical linebreak in a text document, or an escape sequence like \n in a python program
# // lines = contents.splitlines()
# // print(lines[0]) ==> prints the first part of the text, before a line break
# // for line in lines
# //    print(line) ==> prints the text as normal

# * We can use this to make one string out of it- useful for string methods, or to get the length of the text:
# // lines = contents.splitlines()
# // text_string = ''
# // for line in lines:
# //    text_string += line.lstrip()  <== we use lstrip() to remove the line break on the left side
# // print(f"{text_string[:52]}...") ==> prints first 52 values in text string without mutating the string
# // print(len(text_string)) ==> prints the actual text_string length

# * To write to a file, you make a separate Path object:
# // path = Path("output.txt")
# // path.write_text("This string will be in the output file")


# !          Exceptions
# * In Java, we have try/catch, with the syntax like this:
# // try {
# //    System.out.println(5/0);
# // }
# // catch (ArithmeticException e){
# //    System.out.println("You can't divide by 0! You're better than this");
# // }

# * Exceptions in python are handled in a similar way, using "except" instead of "catch":
# // try:
# //    print(5/0)
# // except ZeroDivisionError:
# //    print("You can't divide by 0!")

# * Just like in Java, all code in the program after a try/except block is executed as normal
# * NOTE: In Java, you're kind of forced to make a FileNotFoundException catch block to prevent issues. Python doesn't force you, so don't forget it!
# * Also, the Path object has a method, ".exists()", which returns true/false depending on whether a file exists or not
# // path = Path('example.json')
# // if path.exists():
# //    print(json.loads(path.read_text()))
# // else:
# //    print("The file was not found!")
# * In python you could make an except block for "FileNotFoundError".


# !         File Serialization (JSON)

# * JSON is a human-readable text format used for storing/transmitting data.
# * Serialization- The process of converting an object/data into a format that can be stored/transmitted (such as JSON)
# * Deserialization- The process of converting an object in serialization format to an object that can be used by a program.

# * In JavaScript, we use JSON.stringify() to convert an object in the program to JSON format, and Response.json() converts a JSON object into a JavaScript object.
# * In Python, we use json.dumps(data) to convert the data into JSON, and json.loads(data) converts JSON into a Python object. YOU NEED TO IMPORT JSON!

# // from pathlib import Path
# // import json

# // numbers = [2, 3, 5, 7, 11, 13]

# // path = Path('numbers.json')
# // contents = json.dumps(numbers)
# // path.write_text(contents)

# * An easy way to remember it: json.dumps() throws data out of python code, json.loads() loads the data into python


# !         Installing third party packages:
# * To install third party packages, type this in the CLI:
# // python3 -m pip install --user [package name] <== the --user flag tells pip to install the package for the current user only
# * You can upgrade third party packages like so:
# //  $  python3 -m pip install --upgrade [package name] <== You can update the pip package installer by putting "pip" as the argument

# !         Testing with pytest
# * Having tests automates the process of checking whether a function works after a modification has been made to it. 
# * For instance, instead of having to manually run the program and inputting values for a function each time, you can just have tests do it for you

# * Unit test: verifies that one specific part of a function's behavior is correct
# * Test case: a collection of unit tests that together show that a function behaves as it's supposed to within the full range of situations you expect it to handle
# * Might be easy to remember it like unit = singular, test case = briefcase full of tests

# * A test file's name MUST start with test_ so that pytest may recognize it as a test.
# * If it's a separate test file, we import the functions that we want to test.
# * You don't ever call a test function yourself, pytest finds it and calls it.
# * We call the function we're testing and assign it to a variable, then assert that the variable should be equal to whatever output we expect, like so:

# // def test_first_last_name():
# //    formatted_name = get_formatted_name('James', 'Bond')
# //    assert formatted_name == "James Bond"

# * To then run the test, we would have the test file open, then type "pytest" in the terminal and it will run the tests.
# * IF that doesn't work, your package might have not been installed on the path (same directory as python itself)
# * In that case, try "python3 -m pytest". It runs the pytest module as a script

# * It's good practice to have each possible case of a function be separate test functions ("unit tests").
# * If you want to group the unit tests into a test case, you can put them in a class TestClassName (has to start with Test). MAKE SURE EACH UNIT TEST GETS "self" AS A PARAM IF IT'S IN A CLASS
# * To run only a specific class/method, you can type "python3 -m pytest -k '<expression>'", where expression is a set of unit tests or a set of test cases.
# * You can select multiple test cases or unit tests by doing "python3 -m pytest -k 'formatted_name and other_function_name'". Even typing a part of the name is enough so make sure to be specific!
# * If You have more than one test file, you can select the correct one with "python3 -m pytest file_name.py"

# * Here is a list of common assertions and what they mean:
# * assert a == b                   ==> Assert that two values are equal
# * assert a != b                   ==> Assert that two values aren't equal
# * assert a                        ==> Assert that a evaluates to True
# * assert not a                    ==> Assert that a evaluates to False
# * assert element in list          ==> Assert that an element is in a list
# * assert element not in list      ==> Assert that an element is not in a list
# * assert type(a) == type          ==> Assert that an element is of a certain data type
# * NOTE: Anything that can be expressed conditionally can be included in a test

# * To avoid having a new instance for every unit test, we can set up a test environment using a fixture. Here's how:

# // import pytest  <== we import pytest now because we're using a decorator defined in pytest (@pytest.fixture is a decorator, a directive that alters how a function is processed)
# // @pytest.fixture(scope="class") <== coould also be scope="function". By default it will have a scope of running before each function
# // def method_name():
# //    variable = ClassName(value)
# //    return variable

# * When a parameter in a test function matches the name of a function with the @pytest.fixture decorator right before it,
# * the fixture will run automatically and the return value will be passed as an argument to the other function.
# * So we can make an instance in one method, then use the fixture and use that value in the other functions
# * The easy way to understand fixtures is that it's like Java's JUnit testing library's "@BeforeAll"/"@BeforeEach" methods. They help declare and initialize values


# !         Plotting Data (Matplotlib)
# ** We begin by installing the Matplotlib package: 
# // $ python3 -m pip install --user matplotlib

# ** Import the package:
# // import matplotlib.pyplot as plt <== allows us to use an alias for the module to shorten/simplify the name

# ** To create a simple line graph:
# // fig, ax = plt.subplots(figsize=(10,6), dpi=128)  <== .subplots() generates the fig, a collection of generated plots, and ax, a single plot in the figure.
# //                                                      The size of the figure can be given with the arguments shown in example. No args allowed
# // ax.plot(list_name)        <== .plot() tries to plot the data it's given in a meaningful way
# //                               If you want to make it index 1 based instead of index 0, you can make a tuple starting with 1 as the first param, and the actual list as the second param
# // plt.show()                <== opens the Matplotlib viewer (should be at the end of all customizations)
#* If you would like to save the generated fig:
# // plt.savefig('output_name.png', bbox_inches='tight') <== First arg necessary. Second arg trims extra white space, can be omitted

# * NOTE: pretty much all aspects of Matplotlib's visualization are customizable (many use keyword arguments). Here are some examples:
# // ax.set_title("chart title", fontsize = 48, color = 'red', loc="right")
# // ax.set_xlabel("temp", color = 'orange')
# // ax.set_ylabel("time", color = 'green')
# // ax.set_facecolor("red")
# // ax.tick_params(direction="inout", grid_color = "purple", length=10, width=10)
# // ax.ticklabel_format(style="plain") <== sets tick labels to plain format instead of scientific notation
# // ax.set_facecolor("pink")

# * If you don't have time for customizations but want a different style, you can use preset styles:
# // print(plt.style.available) ==> print  a list of style names you can apply
# // plt.style.use('seaborn-v0_8')  <== apply the style of choice

# * To make a scatter plot, you can do this:
# // ax.scatter(nums, squares, s=100) <== takes nums as the list of x coordinates, squares as the list of y coordinates, s=100 as the size of each point (optional);
# //                                       BOTH x AND y MUST USE LISTS OF THE SAME LENGTH
# // ax.scatter(1, 2) <== takes a single value for the x and y coordinates.
# * To plot a lot of points, you can have x be automatically created:
# // x_val = range(1, 1001)           <== creates x values from 1 - 1000
# // y_val = [x**2 for x in x_val]
# // ax.scatter(x_val, y_val, c=y_val, cmap=plt.cm.coolwarm) <== c= takes the axis which we color code, cmap=plt.cm.[mapName] lets us pick the color map (find them on matplotlib.org)


# !         Plotting Data (Plotly Express)
# * You can make a bar plot using plotly.express. Here's how:
# // import plotly.express as px
# // labels = {'x': 'Result', 'y': 'Frequency'}                      <== create the labels for x and y axis, which then get added in next line
# // fig = px.bar(x=possible_results, y=frequency, labels=labels)    <== creates the bar plot
# // fig.show()                                                      <== visualizes data in HTML format
# // fig.write_html("output.html")                                   <== generates HTML file that can be opened any time