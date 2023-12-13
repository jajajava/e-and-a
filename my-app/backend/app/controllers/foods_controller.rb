class FoodsController < ApplicationController
  before_action :check_admin, only: %i[create update destroy]

  # GET /foods
  def index
    @foods = Food.all
    render json: @foods
  end

  # GET /foods/1
  def show
    @food = Food.find(params[:id])
    render json: @food
  end

  # POST /foods
  def create
    @food = Food.new(food_params)

    if @food.save
      render json: @food, status: :created, location: @food
    else
      render json: @food.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /foods/1
  def update
    if @food.update(food_params)
      render json: @food
    else
      render json: @food.errors, status: :unprocessable_entity
    end
  end

  # DELETE /foods/1
  def destroy
    @food.destroy
  end

  private

    # Only allow a list of trusted parameters through.
    def food_params
      params.permit(:name, :price, :category, :description)
    end

    def check_admin
      unless current_user&.is_admin
        render json: { error: 'Unauthorized request.' }, status: :unauthorized
      end
    end
end
