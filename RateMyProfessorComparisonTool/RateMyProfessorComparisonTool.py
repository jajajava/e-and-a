# This tool allows the user to see data for either 1 professor or to compare 2 by using a RateMyProfessor scraping tool

import ratemyprofessor
import os
from dotenv import load_dotenv

def tool():
    # Get ENV variable
    load_dotenv(".env")
    school_name = os.getenv("SCHOOL_NAME")

    # If there's no ENV file, school_name is None. In that case, code skips ahead to asking what the university's name is
    if (school_name != None):
        schoolInput = input(f"\n\nIs this professor teaching at {school_name}? [y/n]: ")
        if (schoolInput.lower() == 'n'):
            school_name = input("Enter the university's full name: ")
        elif (schoolInput.lower() == 'y'):
            pass
        else:
            print("Error: y/n not entered.\nGoodbye.")
            return
    else:
        school_name = input("Enter the university's full name: ")

    inputted = input("Enter the professor's name, or type \"COMPARE\" to compare two professors: ")
    # Returns one professor's data
    if (inputted.lower() != "compare"):
        # There are three spots in this code where the school_name is an imported ENV variable, change to hardcoded string to modify
        professor = ratemyprofessor.get_professor_by_school_and_name(ratemyprofessor.get_school_by_name(school_name), inputted)
        if (professor is not None):
            print("-------------------------------------------------------------------------------")
            print(f"\n{professor} works in the {professor.department} Department of {professor.school.name}.")
            print(f"Rating: {professor.rating} / 5.0")
            print(f"Difficulty: {professor.difficulty} / 5.0")
            print(f"Rated by: {professor.num_ratings} people")
            if (professor.would_take_again == -1):
                print(f"Would take {professor} again: N/A")
            elif (professor.would_take_again is None):
                print(f"Would take {professor} again: 0 %")
            else:
                print(f"Would take {professor} again: {round(professor.would_take_again, 1)} %")
    # Comparing data of two professors:
    else:
        name1 = input("Enter the 1st professor's name: ")
        school2Bool = input(f"Is the second professor teaching also teaching at {school_name}? [y/n]: ")
        if (school2Bool.lower() == 'n'):
            school2_name = input("Enter the university's full name: ")
        elif (school2Bool.lower() == 'y'):
            pass
        else:
            print("Error: y/n not entered.\nGoodbye.")
            return
        name2 = input("Enter the 2nd professor's name: ")
        professor1 = ratemyprofessor.get_professor_by_school_and_name(ratemyprofessor.get_school_by_name(school_name), name1)
        professor2 = ratemyprofessor.get_professor_by_school_and_name(ratemyprofessor.get_school_by_name(school2_name), name2)
        # Both professors must exist in order to be compared
        if (professor1 and professor2) is not None:
            print("--------------------------------------------------------------------------------")
            print(f"\n{professor1} was rated by {professor1.num_ratings} students, {professor2} was rated by {professor2.num_ratings} students")
            ratioProf1 = professor1.rating * professor1.num_ratings
            ratioProf2 = professor2.rating * professor2.num_ratings
            if (ratioProf1 > ratioProf2):
                print(f"{professor1}'s total score (number of reviews * average) is better than {professor2}'s.")
            else:
                print(f"{professor2}'s total score (number of reviews * average) is better than {professor1}'s.")

            if (professor1.rating > professor2.rating):
                print(f"{professor1} has a better rating: {professor1.rating} / 5.0")
            else:
                print(f"{professor2} has a better rating: {professor2.rating} / 5.0")

            if (professor1.difficulty < professor2.difficulty):
                print(f"{professor1} has a lower difficulty: {professor1.difficulty} / 5.0")
            else:
                print(f"{professor2} has a lower difficulty: {professor2.difficulty} / 5.0")

            if (professor1.would_take_again == -1):
                print(f"Would take {professor1} again: N/A")
            elif (professor1.would_take_again is None):
                print(f"Would take {professor1} again: 0 %")
            else:
                print(f"Would take {professor1} again: {round(professor1.would_take_again, 1)} %")

            if (professor2.would_take_again == -1):
                print(f"Would take {professor2} again: N/A")
            elif (professor2.would_take_again is None):
                print(f"Would take {professor2} again: 0 %")
            else:
                print(f"Would take {professor2} again: {round(professor2.would_take_again, 1)} %")
        # Misspelled name or professor not on RateMyProfessor
        else:
            print("\nCheck your spelling and try again.")


# Call the tool function
tool()