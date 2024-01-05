class ColumnUpdateOrderItems < ActiveRecord::Migration[7.0]
  def change
    change_column_default :order_items, :fulfilled, false
  end
end
