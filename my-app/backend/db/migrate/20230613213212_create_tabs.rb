class CreateTabs < ActiveRecord::Migration[7.0]
  def change
    create_table :tabs do |t|
      t.string :name
      t.integer :user_id
      t.float :total

      t.timestamps
    end
  end
end
