class TabSerializer < ActiveModel::Serializer
  attributes :id, :name, :user_id, :total
end
