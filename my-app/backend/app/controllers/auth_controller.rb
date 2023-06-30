class AuthController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :handle_record_not_found

    def login 
        @user = User.find_by!(pin: login_params[:pin])
        if @user
            render json: {
                user: UserSerializer.new(@user)
            }, status: :accepted
        end

    end

    private 

    def login_params 
        params.permit(:pin)
    end

    def handle_record_not_found(e)
        render json: { message: "User doesn't exist" }, status: :unauthorized
    end

end