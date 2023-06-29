class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :is_clocked_in, :is_admin, :hours_worked
end
