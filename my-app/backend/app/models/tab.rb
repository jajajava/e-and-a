class Tab < ApplicationRecord
  has_many :orders

  def calculate_total
    self.total *= 1.08875
    return total
  end
end
