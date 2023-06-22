User.create(name: "David", pin: "2001", is_clocked_in: false, is_admin: false, hours_worked: 0)
User.create(name: "Kevin", pin: "0000", is_clocked_in: false, is_admin: true, hours_worked: 0)
puts "Finished generating users..."


Food.create(name: "Fish Tacos", price: 17.00, description: "3x soft corn tortilla, roasted cod, chili lime slaw, mexican crema, avocado mousse, cilantro, pickled onions & fresno peppers", category: "entree")
Food.create(name: "Salmon Burger", price: 18, description: "homemade salmon fillet patty contains: capers, dill, egg, peppers, breadcrumbs & lemon, topped with cucumber, tomato, lemon aioli & baby field greens, soft bun, side of kettle chips & mcclure's spicy pickle", category: "entree")
Food.create(name: "Caesar Salad", price: 11, description: "mixed greens, parmesan, sourdough crouton, heirloom grape tomato, house cheddar", category: "appetizer")
Food.create(name: "Sunset Sangria", price: 11, description: "chilled white wine, peach, fresh juices, fruits & berries", category: "beverage")
puts "Finished generating menu..."


Tab.create(name: "Jim", user_id: 1, total: 0, is_active: true)
Tab.create(name: "Stacey", user_id: 1, total: 0, is_active: true)
puts "Finished making tabs..."


Order.create(total: 61.56, is_complete: true, user_id: 1, tab_id: nil)
Order.create(total: 18, is_complete: true, user_id: 2, tab_id: nil)
Order.create(total: 20, is_complete: true, user_id: 2, tab_id: 2)
Order.create(total: 20, is_complete: true, user_id: 1, tab_id: 2)
Order.create(total: 20, is_complete: true, user_id: 2, tab_id: 1)
puts "Created orders..."


OrderItem.create(order_id: 1, food_id: 1)
OrderItem.create(order_id: 1, food_id: 4)
OrderItem.create(order_id: 1, food_id: 4)
OrderItem.create(order_id: 1, food_id: 2)
OrderItem.create(order_id: 2, food_id: 4)
OrderItem.create(order_id: 2, food_id: 4)
puts "Finished orders..."


puts "DB SUCCESSFULLY SEEDED"