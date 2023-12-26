class Tab < ApplicationRecord
  has_many :orders

  def calculate_total
    if self.total != nil
    self.total *= 1.08875
    return total
    end
  end
end
