class User < ApplicationRecord
    has_many :orders
    validates :pin, length: {is: 4}, presence: true
end
