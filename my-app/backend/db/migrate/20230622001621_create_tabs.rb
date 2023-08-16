class CreateTabs < ActiveRecord::Migration[7.0]
  def change
    create_table :tabs do |t|
      t.string :name
      t.references :user, null: false, foreign_key: true
      t.float :total
      t.boolean :is_active

      t.timestamps
    end
  end
end
