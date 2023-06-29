class User < ApplicationRecord
    has_secure_password
    has_many :orders
    validates :password, length: {is: 4}, presence: true
end
