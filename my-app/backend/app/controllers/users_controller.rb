class UsersController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :record_invalid
    rescue_from ActiveRecord::RecordNotFound, with: :record_not_found
    skip_before_action :authorized, only: [:create]


    def create 
        user = User.create!(priv_params)
        @token = encode_token(user_id: user.id)
        render json: {user: user, token: @token}, status: :created  # Old line: render json: {user: UserSerializer.new(user), token: @token}, status: :created
    end

    def me 
        render json: current_user, status: :ok
    end

    def update
        if current_user.is_admin
        user = User.find(params[:id])
        user.update!(edit_params)
        render json: user, status: :ok
        else 
        render json: {error: "Not authorized"}, status: 401
        end
    end

    def destroy
        user = User.find(params[:id])
        user.destroy
        render json: user, status: :ok
    end
# MAKE THE user ACTIONS CREATE AND DESTROY ACCESSIBLE ONLY TO ADMINS

    private

    def priv_params
        defaults = {is_clocked_in: false, hours_worked: 0}
        params.permit(:name, :password, :password_confirmation, :is_admin).merge(defaults)
    end

    def edit_params
        params.permit(:is_clocked_in, :hours_worked)
    end

    def record_invalid (error)
        render json: {error: error.record.errors.full_messages}, status: 422
    end

    def record_not_found
        render json: {error: "Event not found"}, status: 404
    end
end
