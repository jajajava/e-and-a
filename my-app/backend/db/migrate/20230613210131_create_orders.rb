class CreateOrders < ActiveRecord::Migration[7.0]
  def change
    create_table :orders do |t|
      t.integer :total
      t.boolean :is_complete
      t.integer :user_id
      t.integer :tab_id

      t.timestamps
    end
  end
end
