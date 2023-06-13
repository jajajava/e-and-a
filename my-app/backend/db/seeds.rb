
User.create(name: "David", number: 2001, is_clocked_in: false, is_admin: false, hours_worked: 0 )
User.create(name: "Kevin", number: 0000, is_clocked_in: false, is_admin: true, hours_worked: 0)
# User.create(name: "", number: , is_clocked_in: false, is_admin: false, hours_worked: 0)

puts "Finished generating users..."


MenuItem.create(name: "Fish Tacos", price: 17.00, description: "3x soft corn tortilla, roasted cod, chili lime slaw, mexican crema, avacado mousse, cilantro, pickled onions & fresno peppers", category: "entree")
MenuItem.create(name: "Salmon Burger", price: 18 , description: "homemade salmon fillet patty contains: capers, dill, egg, peppers, breadcrumbs & lemon, topped wth cucumber, tomato, lemon aioli & baby field greens, soft bun, side of kettle chips & mcclure's spicy pickle", category: "entree" )
MenuItem.create(name: "Caesar Salad", price: 11, description: "mixed greens, parmesan, sourdough crouton, heirloom grape tomato, house cheddar", category: "appetizer")
MenuItem.create(name: "Sunset Sangria", price: 11, description: "chilled white wine, peach, fresh juices, fruits & berries", category: "beverage")
# MenuItem.create(name: "", price: , description: "", category: "" )

puts "Finished generating menu..."


Order.create(total: 100.00, is_complete: true, user_id: 1, tab_id: nil)
# Order.create(total: , is_complete: false, user_id: , tab_id: nil)

puts "Finished creating order..."

puts "DB SUCCESSFULLY SEEDED"