class TabOrderSerializer < ActiveModel::Serializer
    attributes :id, :total, :tab_id, :is_complete, :created_at, :updated_at
    attribute :items, key: :order_items

    def items
        object.order_items.map do |order_item|{
            id: order_item.id,
            food_id: order_item.food_id,
            quantity: order_item.quantity
        } end
    end
end