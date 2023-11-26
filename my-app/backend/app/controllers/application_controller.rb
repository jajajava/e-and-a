class ApplicationController < ActionController::API
    require 'dotenv/load'
    before_action :authorized
    @@secret_key = ENV["SECRET_KEY"]

    def encode_token(user_id)
        payload = { user_id: user_id }
        JWT.encode(payload, @@secret_key) 
    end

    def decoded_token
        header = request.headers['Authorization']
        if header
            token = header.split(" ")[1]
            begin
                tempVar = JWT.decode(token, @@secret_key, true, algorithm: 'HS256')
                ## DELETE THIS WHEN YOU FINISH
                print tempVar + "this is a temp var"
            rescue JWT::DecodeError
                return nil
            end
        end
    end

    def current_user 
        if decoded_token
            user_id = decoded_token[0]['user_id']['user_id']
            print user_id
            @user = User.find_by(id: user_id)
        end
    end

    def authorized
        unless current_user
        render json: { message: 'Please log in' }, status: :unauthorized
        end
    end

end