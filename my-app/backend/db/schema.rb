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

ActiveRecord::Schema[7.0].define(version: 2023_06_22_001634) do
  create_table "foods", force: :cascade do |t|
    t.string "name"
    t.float "price"
    t.string "category"
    t.text "description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "order_items", force: :cascade do |t|
    t.integer "order_id", null: false
    t.integer "food_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["food_id"], name: "index_order_items_on_food_id"
    t.index ["order_id"], name: "index_order_items_on_order_id"
  end

  create_table "orders", force: :cascade do |t|
    t.float "total"
    t.boolean "is_complete"
    t.integer "user_id", null: false
    t.integer "tab_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["tab_id"], name: "index_orders_on_tab_id"
    t.index ["user_id"], name: "index_orders_on_user_id"
  end

  create_table "tabs", force: :cascade do |t|
    t.string "name"
    t.integer "user_id", null: false
    t.float "total"
    t.boolean "is_active"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_tabs_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.string "pin"
    t.boolean "is_clocked_in"
    t.boolean "is_admin"
    t.integer "hours_worked"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "order_items", "foods"
  add_foreign_key "order_items", "orders"
  add_foreign_key "orders", "users"
  add_foreign_key "tabs", "users"
end
