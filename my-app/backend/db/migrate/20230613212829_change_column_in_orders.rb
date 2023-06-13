class ChangeColumnInOrders < ActiveRecord::Migration[7.0]
  def change
    change_column :orders, :total, :float
  end
end
