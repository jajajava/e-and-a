class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :name
      t.integer :number # 4 digit login
      t.string :position # Job position
      t.boolean :is_clocked_in
      t.boolean :is_admin
      t.integer :hours_worked

      #For the hours worked column, every time you switch from yes to no, you would GET the old value of updated timestamps (and total), then subtract it from the new value,
      #and then add it to the hours worked.

      t.timestamps
    end
  end
end
