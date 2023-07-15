class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :name
      t.string :pin
      t.boolean :is_clocked_in
      t.boolean :is_admin
      t.integer :hours_worked
      t.datetime :time_in
      t.datetime :time_out

      t.timestamps
    end
  end
end
