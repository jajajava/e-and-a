#* Similarly to how React takes JavaScript and changes the way you write with it, Rails replaces the need for raw Ruby code.

#* We are going to use Rails as an API

#* In order to make a minimal API using Rails, you can type the following command:
#// rails new app_name --api --minimal

#! PLURALIZATION IN RAILS:
#* Migrations - plural
#* Tables - plural
#* Model - singular
#* Serializer - singular
#* PRETTY MUCH EVERYTHING BUT MODEL/SERIALIZER IS PLURALIZED


#! FOLDER STRUCTURE/ FILE NAMES:
#* app contains our models and controllers
#* config will have our configurations
#* db is where our database, seeds, and migrations are

#! BUILDING A RAILS APP:
#* If you want to create an individual model, or controller, or a migration, do the following
#// rails g migration name_of_migration name:string age:integer
#* OTHERWISE, you can create all of those with one command.
#* Note that you can run 'rails d migration name_of_migration' to undo the file creation
#* ALSO NOTE that if the column's data type is a string, rails does it by default so you can just write 'name' and it'll be a string

#* 1. Use the generate resource command to build a table. User will be our example table-
#// rails g resource user name age:integer --no-test-framework
#* This will create a table of userS (plural) for us with the columns "name (string)", "age(integer)", and "timestamps(time)"

#* WHAT IS A MIGRATION? Migrations can be used as version control of our databases- we can see what changes are made with each migration.
#* When we want to modify our database, we make changes by creating migrations. If you want to create (or delete) a column in the db, create a migration:
#// rails g migration add_column_weight_to_user weight:integer
#* This adds the column "weight" to our user with the data type "integer"

#* 2. Once you're happy with how your table looks, you can create the database:
#// rails db:migrate
#* This compiles all your migrations and creates the final product, our database.

#* 3. We create seeds in our db/seeds.rb file, which would allow us to populate our databases upon creation.
#// User.create(name: "John Johnson", age: 37, weight: 190)
#* Once we have our seed file ready, we can run the command "rails db:seed" to populate our database with the pre-built data.
#* If there is no response, it is a good thing. If you prefer, you can type "puts 'done!'" in the seed file after the data so that you can see that it loaded successfully
#* You can also check your db directly, or you can just run the command "rails c" to open the console, then type 'User.all' and see all instances of the User object.

#* If you do rails db:seed twice, it will make duplicates. To avoid this, if you do rails db:seed:replant, it would reseed the database (starting at a higher id).
#* rails routes -> tells you all routes you have available at the moment