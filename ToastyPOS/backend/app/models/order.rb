class Order < ApplicationRecord
  belongs_to :user
  belongs_to :tab
  has_many :order_items
  has_many :foods, through: :order_items
  accepts_nested_attributes_for :order_items

  def calculate_total
    total = 0.00
    self.order_items.each do |n|
      food_price = Food.find(n.food_id).price
      total += (food_price * n.quantity)
    end

    # Apply sales tax only if self.tab_id is not nil
    if self.tab_id == nil
      total *= 1.08875
    end

    return total
  end
end