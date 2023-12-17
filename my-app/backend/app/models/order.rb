class Order < ApplicationRecord
  belongs_to :user
  belongs_to :tab
  has_many :order_items
  has_many :foods, through: :order_items
  accepts_nested_attributes_for :order_items
end
