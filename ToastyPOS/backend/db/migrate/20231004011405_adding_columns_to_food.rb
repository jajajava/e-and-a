class AddingColumnsToFood < ActiveRecord::Migration[7.0]
  def change
    add_column :foods, :is_alc, :boolean
    add_column :foods, :subcategory, :string
  end
end
