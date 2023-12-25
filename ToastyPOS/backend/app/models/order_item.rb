class OrderItem < ApplicationRecord
  belongs_to :order
  belongs_to :food
  validates :quantity, numericality: { greater_than: 0 }
end
