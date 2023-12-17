class RemoveColumn < ActiveRecord::Migration[7.0]
  def change
    remove_column :foods, :subcategory2, :string
  end
end
