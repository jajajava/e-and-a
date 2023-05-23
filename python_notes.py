# Note: I am learning Python now, so please don't judge if it's weird code!

# * Variable assignment: No let/const/var keywords; snake_case; just like Ruby
# // pet_mood = 'hungry'
# // pet_name = 'Jim'


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

# ! ARRAYS = LISTS
# ! OBJECTS = DICTIONARIES

# !                                          LISTS (arrays in python)
# * In python, if you put a negative "list" index value- array[-1] - it would start from the last number and go backwards.

# // menu_items = ["pizza", "mushroom stew",
# //               "burger", "sushi", "cheese fries", "wonton soup", "beer", "salad"]
# // menu_items[-1] ==> "salad"

# // If you want all list items above index # 3, you can just do the following:
# // print(menu_items[3:]) ==> ["sushi", "cheese fries","wonton soup", "beer", "salad"] (As you can see, inclusive)

# // As you might expect, if you want the opposite, showing before an index:
# // print(menu_items[:3]) ==> ["pizza", "mushroom stew", "burger"] (You just move the : before the index #; NOTE that it is exclusive, doesn't include #3)

# // You can combine the two to make a range:
# // print(menu_items[3:7]) ==> ["sushi", "cheese fries", "wonton soup", "beer"] (Note how it doesn't include 7, it goes 3-6)

# * .index() tells us the index of a list item
# // print(menu_items.index("cheese fries")) ==> 4

# * .reverse() doesn't return anything for us, but this reverses our original lists (LISTS ARE MUTABLE)
# * .upper() is non-destructive (doesn't change our original list like .reverse() did )
# * .count() counts number of times a list item is repeated (you must pass the value in- .count('item_to_look_for"))
# * .append() is like JavaScript ".pop()"; it adds a value at the end of the list (MUTATES OG LIST)
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
