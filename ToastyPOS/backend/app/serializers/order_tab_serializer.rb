class OrderTabSerializer < ActiveModel::Serializer
    attributes :id, :name, :total, :is_active
end