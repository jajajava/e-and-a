class OrderSerializer < ActiveModel::Serializer
    attributes :id, :total, :tab_id, :is_complete, :created_at, :updated_at
    has_many :foods, through: :order_items
    belongs_to :tab
end