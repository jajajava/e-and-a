class Order < ApplicationRecord
  belongs_to :user
  belongs_to :tab
  has_many :order_items
  has_many :foods, through: :order_items
  accepts_nested_attributes_for :order_items

  def calculate_total
    total = self.order_items.inject(0) do |sum, item|
      food_price = Food.find(item.food_id).price
      sum += (food_price * item.quantity)
    end

    # Apply sales tax
    total *= 1.04
  end
end