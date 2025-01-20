# from tempFolder.python_test import *
# import antigravity
# import calendar


# hello = "lord of the rings"
# print(hello.title())

# tempList = ["Hey", 1, True]
# tempList[2] = None
# print(tempList)

# temp = tuple(tempList)
# print(temp)

# car = "Audi"
# print(car.lower() == "audi")
# print(car)

# val = (1, 2, 3)
# if (4 not in val):
#     print("Not in the list")
# else:
#     print("Yep")


# def method(kwargs):
#     for k, v in kwargs.items():
#         print(f"{k}: {v}")

# dic = {"A": 1, "B": 2}
# method(dic) # You could also do method(A=1, B=2). A keyword argument means any argument that has a label (the parameter name it's affecting. Ex: param_name="John")

# def method2(*args):
#     for a in args:
#         print(a)

# method2("james", 1, None)

# class TempClass:
#     datafield = "balls"

# instance = TempClass()
# instance.datafield = "john"

# print(instance.datafield)

# def tempMethod(height, *args):
#     height = height
#     for value in args:
#         print(value)
#     return height
        
# output = tempMethod(30, "James", 7, None)
# print(output)

# def function_with_explicit_return():
#     return "Hello"

# result1 = function_with_explicit_return()
# print(result1)

# def function_without_explicit_return():
#     a = 1
#     b = 2
#     c = a + b

# class Temp:
#     def __init__(self):
#         self.odometer = 0
        
#     def odometer_reading(self):
#         print(f"This car has {self.odometer} miles on it.")
        
# temp = Temp()
# temp.odometer_reading()

# antigravity.fly()
# calendar.setfirstweekday(6)
# calendar.prmonth(2024, 12)
# print(calendar.isleap(2024))

# cal = calendar.TextCalendar(firstweekday=6)
# cal.prmonth(2025, 1)

# from pathlib import Path
# path = Path('tempFile.txt')
# lines = path.read_text().splitlines()

# print(lines)

# text = "Hello\n my name is john denver \t and I'm straight for sure"
# print(text.splitlines())

# from pathlib import Path
# import json

# numbers = [2, 3, 5, 7, 11, 13]

# path = Path('numbers.json')
# contents = json.dumps(numbers)
# path.write_text(contents)

# content = path.read_text()
# print(type(content)) # ==> outputs string
# print(content[0]) # ==> outputs [ (first character in the string)

# content = json.loads(path.read_text())
# print(type(content)) # ==> outputs list
# print(content[0]) # ==> outputs 2 (first character in the list)

# from pathlib import Path
# import json

# path = Path('example.json')
# if path.exists():
#    print(json.loads(path.read_text()))
# else:
#    print("The file was not found!")

# def division(int_1, int_2):
#     try:
#         return int_1 / int_2
#     except ZeroDivisionError:
#         return "You cannot divide by 0!"

# from python_practice import division

# def test_valid():
#     assert division(1,2) == 0.5
    
# def test_divide_zero():
#     assert division(1,0) == "You cannot divide by 0!"

# print(type(1))


# class Person:
#     def __init__(self, height, weight):
#         self._height = height
#         self._weight = weight
        
#     def set_height(self, height):
#         self._height = height
#         return self._height
    
# import pytest
# from python_practice import Person, division

# class TestDivision:
#     def test_valid(self):
#         assert type(division(1,2)) == float
        
#     def test_divide_zero(self):
#         assert division(1,0) == "You cannot divide by 0!"
        

# class TestClass:
#     @pytest.fixture()
#     def person(self):
#         person = Person(69, 180)
#         return person
    
#     def test_setter(self, person):
#         person.set_height(71)
#         assert person._height == 71

# WALK.PY
# from random import choice
# import secrets

# class Walk:
#     def __init__(self, points):
#         self.points = points
#         self.x_coord = [0]
#         self.y_coord = [0]
        
#         while (self.points > 0):
#             x_direction = choice([1, -1])
#             x_distance = secrets.randbelow(5)
#             x_steps = x_direction * x_distance
            
#             y_direction = choice((1, -1))
#             y_distance = secrets.randbelow(5)
#             y_steps = y_direction * y_distance
            
#             x = self.x_coord[-1] + x_steps
#             y = self.y_coord[-1] + y_steps
            
#             self.points -= 1
            
#             self.x_coord.append(x)
#             self.y_coord.append(y)

# import matplotlib.pyplot as plt
# from walk import Walk

# while True:
#     var = 50_000
#     ant = Walk(var)
#     fig, ax = plt.subplots(figsize=(8,6), dpi=128)
#     ax.scatter(ant.x_coord, ant.y_coord, c=range(var + 1), cmap=plt.cm.Blues, edgecolors='none', s=1)
#     ax.scatter(0, 0, c="red")
#     ax.scatter(ant.x_coord[-1], ant.y_coord[-1], c="black")
#     ax.set_facecolor("pink")
#     ax.get_xaxis().set_visible(False)
#     ax.get_yaxis().set_visible(False)
#     plt.show()
    
#     keep_running = input("Make another walk? (y/n): ")
#     if keep_running == 'n':
#         break


# ---
# nums = (1, 2, 3, 4, 5)
# squares = [x**2 for x in nums]
# plt.style.use('seaborn-v0_8')
# fig, ax = plt.subplots(figsize=(10,6), dpi=128)
# ax.plot(nums, squares)
# x_val = range(1, 101)
# y_val = [x**2 for x in x_val]
# ax.scatter(x_val, y_val, s=1, c=y_val, cmap=plt.cm.coolwarm)
# ax.ticklabel_format(style="plain")
# ax.set_title("your mom", fontsize = 48, color = 'red', loc="right")
# ax.set_xlabel("temp", color = 'orange')
# ax.set_ylabel("time", color = 'green')
# ax.set_facecolor("lightblue")
# ax.tick_params(direction="inout", grid_color = "purple", length=10, width=10)
# print(plt.style.available)
# plt.savefig('output1.png', bbox_inches="tight")
# plt.show()

# DIE.PY
# import secrets

# class Die:
#     def __init__(self, max_sides = 6):
#         self.max_sides = max_sides
    
#     def roll(self):
#         return secrets.randbelow(self.max_sides) + 1

# from die import Die
# import plotly.express as px

# die = Die()
# results = []
# frequency = []
# for _ in range(50000):
#     results.append(die.roll())

# possible_results = range(1, die.max_sides + 1)
# for value in possible_results:
#     frequency.append(results.count(value))
# print(frequency)
# labels = {'x': 'Result', 'y': 'Frequency'}
# fig = px.bar(x=possible_results, y=frequency, labels=labels)
# fig.show()

# from pathlib import Path
# from datetime import datetime
# import matplotlib.pyplot as plt
# import csv

# path = Path('sitka_weather_2021_full.csv')
# lines = path.read_text().splitlines()

# reader = csv.reader(lines)
# header_row = next(reader)
# # print(header_row)

# # To get height:
# dates = []
# highs = []
# lows = []
# for row in reader:
#     if (row[7] != '' and row[8] != ''):
#         high = int(row[7])
#         highs.append(high)
#         low = int(row[8])
#         lows.append(low)
#         date = datetime.strptime(row[2], '%Y-%m-%d')
#         dates.append(date)

# fig, ax = plt.subplots()
# ax.plot(dates, highs, color='red')
# ax.plot(dates, lows, color='blue')

# fig.autofmt_xdate()
# ax.fill_between(dates, highs, lows, facecolor='lightgrey', alpha=1)
# ax.set_title("Daily High Temperatures. Sitka 2021")
# # ax.set_xlabel('')
# ax.set_ylabel("Temperature(F)")

# plt.show()

# from pathlib import Path
# from datetime import datetime
# import plotly.express as px
# import csv
# import json

# path = Path('world_fires_7_day.csv')
# lines = path.read_text().splitlines()
# reader = csv.reader(lines)
# header = next(reader)

# lats = []
# lons = []
# dates = set()
# for row in reader:
#     lats.append(row[0])
#     lons.append(row[1])
#     dates.add(row[5])
# print(dates)
# fig = px.scatter_geo(lat=lats, lon=lons)
# fig.show()

# import plotly.express as px
# import requests

# response = requests.get('https://511ny.org/api/getcameras?key={API_KEY}&format=%7Bjson%7D')

# coord_dict = {}
# names_dict = {}

# for entity in response.json():
#     key = entity['Latitude']
#     value = entity['Longitude']
#     name = entity['Name']
    
#     if key in coord_dict:
#         coord_dict[key].append(value)
#     else:
#         coord_dict[key] = [value]
    
#     if key in names_dict:
#         names_dict[(key)].append(name)
#     else:
#         names_dict[(key)] = [name]

# coord_dict.pop(42, None)
# coord_dict.pop(45, None)
# coord_dict.pop(0, None)
# names_dict.pop(42, None)
# names_dict.pop(45, None)
# names_dict.pop(0, None)

# lats = []
# longs = []
# hover_names = []

# for key, values in coord_dict.items():
#     for lon in values:
#         lats.append(key)
#         longs.append(lon)
#         hover_names.append(", ".join(names_dict.get(key, ["Unknown"])))

# fig = px.scatter_geo(lat=lats, lon=longs, projection='natural earth', hover_name=hover_names)
# fig.show()

# import plotly.express as px
# import requests

# response = requests.get('https://511ny.org/api/getcameras?key={API_KEY}&format=%7Bjson%7D')

# coords_list = []

# for entity in response.json():
#     title_coord_dict = {entity['Name']: (entity['Latitude'], entity['Longitude'])}
#     coords_list.append(title_coord_dict)

# print(list(coords_list[0].values())[0])




# fig.show()
# fig = px.scatter_geo(lat=)

# key = tuple(1, 2)

# l = [1, 2, 3, 4, 5]
# t = (1, 2, 3, 4, 5)
# d = {}
# d['a'] = 1
# s = "James"
# if 1 in d.values():
#     print("It's there")
#     print(list(d.values())[0])
# else:
#     print("No")

# from pathlib import Path
# import datetime as dt
# import csv
import polars as pl
# import geopandas as gpd
# from lonboard import Map, ScatterplotLayer

# path = Path('world_fires_7_day.csv')
# lines = path.read_text().splitlines()
# reader = csv.reader(lines)
# header = next(reader)

# lats = []
# lons = []
# for row in reader:
#     lats.append(row[0])
#     lons.append(row[1])

# df = pl.DataFrame({
#     "latitudes": lats,
#     "longitudes": lons
# })

# df = pl.DataFrame(
#     {
#         "Name": ["Ben", "James", "Sarah", "Felicia"],
#         "Weight": [12, 57.9, 72.5, 53.6], # (kg)
#         "Height": [1.56, 1.77, 1.65, 1.75], # (m)
#     }
# )

# pl.Config.set_tbl_rows(len(df))
# print(df)

# result = df.select(
#     pl.col("Name").alias("Nombre").map_elements(lambda x: f"Name: {x}"),
#     pl.col("Height").cast(pl.Int8),
#     (pl.col("Weight") % 1),
# )
# print(result)
# gdf = gpd.GeoDataFrame()
# layer = ScatterplotLayer.from_geopandas(
#     gdf,
#     get_fill_color=[255,0,0]
# )
# m = Map(layer)

# import polars as pl

# read = pl.read_csv("./world_fires_7_day.csv", try_parse_dates=True)
# pl.Config.set_tbl_cols(len(read))
# pl.Config.set_tbl_rows(len(read))
# print(read.describe())

# import polars as pl

# df = pl.DataFrame(
#     {
#         "Name": ["Ben", "James", "Sarah", "Felicia"],
#         "Weight": ["Steve", 57.9, 72.5, 53.6], # (kg)
#         "Height": [1.56, 1.77, 1.65, 1.75], # (m)
#     }, strict=False  <== Allows you to mix data types
# )

# pl.Config.set_tbl_rows(len(df))
# print(df)

# read = pl.read_csv("./world_fires_7_day.csv", try_parse_dates=True)
# pl.Config.set_tbl_cols(len(read))
# pl.Config.set_tbl_rows(len(read))
# pr = read.filter(pl.col("latitude") < 2).select(pl.col("latitude", "longitude")).sort("latitude", descending=True)
# print(pr)