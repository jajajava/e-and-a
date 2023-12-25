class OrdersController < ApplicationController
  before_action :set_order, only: %i[ show update destroy ]

  # GET /orders
  def index
    @orders = Order.all
    render json: @orders
  end

  def indexComplete
    @orders = Order.where(is_complete: true)
    render json: @orders
  end

  def indexIncomplete
    @orders = Order.where(is_complete: false)
    render json: @orders
  end

  # GET /orders/1
  def show
    render json: @order
  end

  # POST /orders
  def create
    @order = Order.new(order_params)

    if @order.save
      render json: @order, status: :created, location: @order
    else
      render json: @order.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /orders/1
  def update
    if @order.update(order_params)
      render json: @order
    else
      render json: @order.errors, status: :unprocessable_entity
    end
  end

  # DELETE /orders/1
  def destroy
    @order.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_order
      @order = Order.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def order_params
      # Build the order with nested attributes
      order_instance = Order.new(params.require(:order).permit(:user_id, :tab_id, order_items_attributes: [:food_id, :quantity]))
    
      # Calculate total for this order_instance instance
      total = order_instance.calculate_total
    
      # Merge the calculated total and other defaults
      defaults = { user_id: current_user.id, is_complete: false, total: total }
      params.require(:order).permit(:is_complete, :user_id, :tab_id, order_items_attributes: [:food_id, :quantity]).merge(defaults)
    end
end
