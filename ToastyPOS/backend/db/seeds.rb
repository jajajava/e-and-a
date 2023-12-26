User.create(name: "David", pin: "2001", is_clocked_in: false, is_admin: false, hours_worked: 0.0)
User.create(name: "Kevin", pin: "0000", is_clocked_in: false, is_admin: true, hours_worked: 0.0)
puts "Finished generating users..."

# FOODS, MAINS
Food.create(name: "Twice Baked Wings", price: 14.00, description: "7 pieces dry rub flats & drums, crunchy veg, side blue cheese & hot honey sauce", category: "foods", is_alc: nil, subcategory: nil)
Food.create(name: "Tater Tot-Chos", price: 10.00, description: "crispy potato tater tots 'nacho style', smoked queso cheese, spiced guacamole, pickled onions & fresno peppers", category: "foods", is_alc: nil, subcategory: nil)
Food.create(name: "Cheeseburger Sliders", price: 17.00, description: "3 x beef slider patties, cheddar cheese, caramelized onions, king's hawaiian roll, cornishon pickle toppers, kettle chips", category: "foods", is_alc: nil, subcategory: nil)
Food.create(name: "Fingerling Potatoes", price: 9.00, description: "roasted fingerling potatoes, savory herbs, pepper & sea salt, side garlic aioli dip", category: "foods", is_alc: nil, subcategory: nil)
Food.create(name: "Soft Pretzel", price: 9.00, description: "sigmund's original soft pretzel, side spicy mustard & cheese sauce", category: "foods", is_alc: nil, subcategory: nil)
Food.create(name: "House Lobster Roll", price: 30.00, description: "chilled poached lobster, tarragon & chive mayo, lemon zest, sliced tomato, toasted split top roll, side of kettle chips, house coleslaw & spicy pickle", category: "foods", is_alc: nil, subcategory: nil)
Food.create(name: "Connecticut Lobster Roll", price: 30.00, description: "warm poached lobster, tarragon & chive butter, old bay seasoning & lemon zest, toasted split top roll, side of kettle chips, house coleslaw & spicy pickle", category: "foods", is_alc: nil, subcategory: nil)
Food.create(name: "Spiced Shrimp Bánh Mì", price: 17.00, description: "roasted garlic seasoned shrimp, pickled red pepper, carrots & cucumber, crunchy slaw, cilantro, cayenne aioli, toasted ciabatta, side of kettle chips & spicy pickle", category: "foods", is_alc: nil, subcategory: nil)
Food.create(name: "Pulled Pork Sammy", price: 16.00, description: "brisket pork shoulder, tangy bbq, melted american cheese, pickle chips, picnic style cole slaw, soft bun, side of kettle chips & spicy pickle", category: "foods", is_alc: nil, subcategory: nil)
Food.create(name: "California Veggie Burger", price: 15.00, description: "california style veggie burger, mixed greens, tomato slice, pickled red onions, avocado mousse, soft vegan bun, side of kettle chips & spicy pickle", category: "foods", is_alc: nil, subcategory: nil)
Food.create(name: "Short Rib Grilled Cheese", price: 21.00, description: "house braised beef short rib au jus, melted gruyère & sharp cheddar, granny smith apple, caramelized onions, toasted sourdough, side of kettle chips & spicy pickle", category: "foods", is_alc: nil, subcategory: nil)
Food.create(name: "Hearty Grilled Cheese", price: 13.00, description: "smoked cheddar & sharp cheddar, sliced tomato, caramelized onions, toasted sourdough, side of kettle chips & spicy pickle", category: "foods", is_alc: nil, subcategory: nil)
Food.create(name: "Short Rib Tacos", price: 20.00, description: "3 x soft corn tortilla, braised beef short rib, avocado mousse, chili lime slaw, pickled onions & fresno peppers", category: "foods", is_alc: nil, subcategory: nil)
Food.create(name: "Caesar Salad", price: 11.00, description: "romaine lettuce, parm, sourdough crouton, grape tomatoes, house caesar dressing", category: "foods", is_alc: nil, subcategory: nil)
Food.create(name: "Loaded Beef Chili", price: 16.00, description: "house chili with braised short rib, smoked cheddar & mexican crema, side tortilla chips", category: "foods", is_alc: nil, subcategory: nil)
Food.create(name: "Vegan Chili", price: 12.00, description: "side tortilla chips", category: "foods", is_alc: nil, subcategory: nil)
puts "Finished generating foods..."

# ALCOHOLIC DRINKS, COCKTAILS
Food.create(name: "Honeycomb", price: 13.00, description: "broadhorn rye whiskey, honey, ginger ale, orange juice, candied ginger & lemon", category: "drinks", is_alc: true, subcategory: "cocktails")
Food.create(name: "Blackberry Mojito", price: 13.00, description: "don q white rum, cold pressed mint, lime & blackberries, fresh mint", category: "drinks", is_alc: true, subcategory: "cocktails")
Food.create(name: "Mezcalita", price: 13.00, description: "smoky mezcal, hard shaken pineapple, orange & citrus, tajin dusted orange", category: "drinks", is_alc: true, subcategory: "cocktails")
Food.create(name: "Chupacabra", price: 13.00, description: "tequila blanco, spicy serrano peppers & agave, citrus, pink prickly pear puree", category: "drinks", is_alc: true, subcategory: "cocktails")
Food.create(name: "Autumn Sangria", price: 12.00, description: "chilled white wine, peach, fresh juices, fruits & berries", category: "drinks", is_alc: true, subcategory: "cocktails")
Food.create(name: "Blood Orange Cosmo", price: 14.00, description: "citrus vodka, blood orange puree, citrus, orange liqueur, orange wedge", category: "drinks", is_alc: true, subcategory: "cocktails")

# ALCOHOLIC DRINKS, WINES
Food.create(name: "Pinot Grigio", price: 8.00, description: "Italian wine", category: "drinks", is_alc: true, subcategory: "wines")
Food.create(name: "Sauvignon Blanc", price: 9.00, description: "French wine", category: "drinks", is_alc: true, subcategory: "wines")
Food.create(name: "Chardonnay", price: 9.00, description: "Californian wine", category: "drinks", is_alc: true, subcategory: "wines")
Food.create(name: "Rosé", price: 10.00, description: "French wine", category: "drinks", is_alc: true, subcategory: "wines")
Food.create(name: "Malbec", price: 8.00, description: "Argentinian wine", category: "drinks", is_alc: true, subcategory: "wines")
Food.create(name: "Cabernet", price: 9.00, description: "Californian wine", category: "drinks", is_alc: true, subcategory: "wines")
Food.create(name: "Pinot Noir", price: 9.00, description: "Californian wine", category: "drinks", is_alc: true, subcategory: "wines")
Food.create(name: "Prosecco", price: 10.00, description: "Italian wine", category: "drinks", is_alc: true, subcategory: "wines")

# ALCOHOLIC DRINKS, SPIRITS
Food.create(name: "Vodka", price: 5.00, description: "Italian wine", category: "drinks", is_alc: true, subcategory: "spirits")
Food.create(name: "Whiskey", price: 7.00, description: "Italian wine", category: "drinks", is_alc: true, subcategory: "spirits")
Food.create(name: "Rum", price: 6.00, description: "Italian wine", category: "drinks", is_alc: true, subcategory: "spirits")
Food.create(name: "Tequila", price: 7.00, description: "Italian wine", category: "drinks", is_alc: true, subcategory: "spirits")
Food.create(name: "Gin", price: 7.00, description: "Italian wine", category: "drinks", is_alc: true, subcategory: "spirits")
Food.create(name: "Cognac", price: 12.00, description: "Italian wine", category: "drinks", is_alc: true, subcategory: "spirits")

# ALCOHOLIC DRINKS, BEER CANS
Food.create(name: "IPA", price: 10.00, description: nil, category: "drinks", is_alc: true, subcategory: "beers")
Food.create(name: "Ale", price: 7.00, description: nil, category: "drinks", is_alc: true, subcategory: "beers")
Food.create(name: "Pilsner", price: 8.00, description: nil, category: "drinks", is_alc: true, subcategory: "beers")
Food.create(name: "Lager", price: 8.00, description: nil, category: "drinks", is_alc: true, subcategory: "beers")

# NON-ALCOHOLIC DRINKS, SOFT DRINKS
Food.create(name: "Coca Cola", price: 1.50, description: nil, category: "drinks", is_alc: false, subcategory: "soft drinks")
Food.create(name: "Diet Coke", price: 1.50, description: nil, category: "drinks", is_alc: false, subcategory: "soft drinks")
Food.create(name: "Sprite", price: 1.50, description: nil, category: "drinks", is_alc: false, subcategory: "soft drinks")
Food.create(name: "Pepsi", price: 1.50, description: nil, category: "drinks", is_alc: false, subcategory: "soft drinks")
Food.create(name: "Root Beer", price: 1.50, description: nil, category: "drinks", is_alc: false, subcategory: "soft drinks")
Food.create(name: "Ginger Ale", price: 1.50, description: nil, category: "drinks", is_alc: false, subcategory: "soft drinks")
Food.create(name: "Fanta", price: 1.50, description: nil, category: "drinks", is_alc: false, subcategory: "soft drinks")
Food.create(name: "Water Bottle", price: 1, description: nil, category: "drinks", is_alc: false, subcategory: "soft drinks")
Food.create(name: "Mineral Water", price: 1.50, description: nil, category: "drinks", is_alc: false, subcategory: "soft drinks")

# NON-ALCOHOLIC DRINKS, LEMONADES
Food.create(name: "Classic", price: 3.50, description: nil, category: "drinks", is_alc: false, subcategory: "lemonades")
Food.create(name: "Pink", price: 4.50, description: nil, category: "drinks", is_alc: false, subcategory: "lemonades")
Food.create(name: "Raspberry", price: 4.50, description: nil, category: "drinks", is_alc: false, subcategory: "lemonades")

# NON-ALCOHOLIC DRINKS, FROZEN
Food.create(name: "Strawberry limeade", price: 6.00, description: nil, category: "drinks", is_alc: false, subcategory: "frozen")
Food.create(name: "Blueberry limeade", price: 6.00, description: nil, category: "drinks", is_alc: false, subcategory: "frozen")
Food.create(name: "Cherry limeade", price: 6.00, description: nil, category: "drinks", is_alc: false, subcategory: "frozen")
Food.create(name: "Cherry limeade", price: 6.00, description: nil, category: "drinks", is_alc: false, subcategory: "frozen")
Food.create(name: "Peach limeade", price: 6.00, description: nil, category: "drinks", is_alc: false, subcategory: "frozen")
Food.create(name: "Mango limeade", price: 6.00, description: nil, category: "drinks", is_alc: false, subcategory: "frozen")
puts "Finished generating drinks..."
puts "Finished generating menu..."


# Tab.create(name: "Jim", user_id: 1, total: 0, is_active: true)
# Tab.create(name: "Stacey", user_id: 1, total: 0, is_active: true)
# puts "Finished making tabs..."


# Order.create(total: 43.68, is_complete: true, user_id: 1, tab_id: nil)
# Order.create(total: 18.72, is_complete: true, user_id: 2, tab_id: nil)
# puts "Created orders..."

# This is each individual item in an order
# OrderItem.create(order_id: 1, food_id: 1, quantity: 1)
# OrderItem.create(order_id: 1, food_id: 4, quantity: 2)
# OrderItem.create(order_id: 1, food_id: 2, quantity: 1)
# OrderItem.create(order_id: 2, food_id: 4, quantity: 2)
# puts "Finished orders..."


puts "DB SUCCESSFULLY SEEDED"

# BUG SOLUTION:
# I noticed that every table but one was getting loaded into the database when seeded. 
# Every time I would do rails db:reset, if my associations weren't commented out in my model, it wouldn't be seeded, despite no error message.
# Turns out it was because of the order. If your association says that it belongs to something, and you're putting it before that thing, it won't load.
# To fix, just move the code further down in the seed file, past the association it belongs to.