class UsersController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :record_invalid
    rescue_from ActiveRecord::RecordNotFound, with: :record_not_found


    def create 
        user = User.create!(priv_params)
        render json: user, status: :created
    end

    def me
        render json: current_user, status: :ok
    end

    def update
        user = User.find(params[:id])
        if current_user && (current_user.is_admin || current_user == user)
            user.update!(edit_params)
            render json: user, status: :ok
        else
            render json: { error: "Not authorized" }, status: :unauthorized
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
        params.permit(:name, :pin,:is_admin).merge(defaults)
    end

    def edit_params     #! GIVE EDIT PARAMS ONLY TO ADMIN USERS
        params.permit(:is_clocked_in, :hours_worked, :name, :pin, :created_at, :updated_at)
    end

    def record_invalid (error)
        render json: {error: error.record.errors.full_messages}, status: 422
    end

    def record_not_found
        render json: {error: "User not found"}, status: 404
    end
end
