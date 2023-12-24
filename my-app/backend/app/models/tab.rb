class Tab < ApplicationRecord
  has_many :orders

  def calculate_total
    total = 0.0
    self.orders.each do |order|
      total += order.calculate_total
    end
    total *= 1.04

    return total
  end
end
