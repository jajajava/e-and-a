class FoodSerializer < ActiveModel::Serializer
    attributes :id, :name, :price, :category, :subcategory, :is_alc
end