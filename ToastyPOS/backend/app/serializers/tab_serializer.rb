class TabSerializer < ActiveModel::Serializer
    attributes :id, :name, :total, :is_active, :user_id, :created_at, :updated_at
    has_many :orders, serializer: TabOrderSerializer
end