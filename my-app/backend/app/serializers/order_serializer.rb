class OrderSerializer < ActiveModel::Serializer
  attributes :id, :total, :is_complete, :user_id, :tab_id
end
