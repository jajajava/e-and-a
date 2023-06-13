# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2023_06_13_213212) do
  create_table "menu_items", force: :cascade do |t|
    t.string "name"
    t.float "price"
    t.string "category"
    t.text "description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "orders", force: :cascade do |t|
    t.float "total"
    t.boolean "is_complete"
    t.integer "user_id"
    t.integer "tab_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "tabs", force: :cascade do |t|
    t.string "name"
    t.integer "user_id"
    t.float "total"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.integer "number"
    t.boolean "is_clocked_in"
    t.boolean "is_admin"
    t.integer "hours_worked"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
