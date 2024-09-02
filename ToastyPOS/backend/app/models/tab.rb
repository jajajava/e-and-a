class Tab < ApplicationRecord
  has_many :orders

  def total
    sprintf('%.2f', super)
  end

  def calculate_total
    if self.total != nil
    self.total *= 1.08875
    return total
    end
  end
end
