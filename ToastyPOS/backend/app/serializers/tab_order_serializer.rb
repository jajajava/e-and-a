class TabOrderSerializer < ActiveModel::Serializer
    attributes :id, :total, :tab_id, :is_complete, :created_at, :updated_at
    attribute :items, key: :order_items

    def items
        object.order_items.map do |order_item|
            food = order_item.food
            
            {
                food_name: food.name,
                food_price: sprintf('%.2f', food.price),
                quantity: order_item.quantity
            }
        end
    end
end