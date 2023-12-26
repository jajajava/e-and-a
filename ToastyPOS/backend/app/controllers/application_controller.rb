class ApplicationController < ActionController::API
    # Bug squashed: Among other weird modifications to the code, you forgot to make a .env on the laptop
    require "dotenv/load"
    @@secret_key = ENV["SECRET_KEY"]
    before_action :authorized

    def encode_token(payload)
        JWT.encode(payload, @@secret_key) 
    end

    def decoded_token
        header = request.headers['Authorization']
        if header
            token = header.split(" ")[1]
            begin
                JWT.decode(token, @@secret_key, true, algorithm: 'HS256')
            rescue JWT::DecodeError
                nil
            end
        end
    end

    def current_user 
        if decoded_token
            user_id = decoded_token[0]['user_id']
            @user = User.find_by(id: user_id)
        end
    end

    def authorized
        unless !!current_user
        render json: { message: 'Please log in' }, status: :unauthorized
        end
    end
end