class RemovePinFromUsers < ActiveRecord::Migration[7.0]
  def change
    remove_column :users, :pin, :string
  end
end
