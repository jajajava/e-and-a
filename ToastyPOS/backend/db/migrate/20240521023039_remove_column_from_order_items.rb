class RemoveColumnFromOrderItems < ActiveRecord::Migration[7.0]
  def change
    remove_column :order_items, :fulfilled, :boolean
  end
end
