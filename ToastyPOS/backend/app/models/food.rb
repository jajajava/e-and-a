class Food < ApplicationRecord
    has_many :order_items
    has_many :orders, through: :order_items

    def price
        sprintf('%.2f', super)
    end
end
