class OrdersController < ApplicationController
  before_action :set_order, only: %i[ show update destroy ]

  # GET /orders
  def index
    @orders = Order.all
    render json: @orders
  end

  def indexComplete
    @orders = Order.where(is_complete: true).order(updated_at: :asc)
    render json: @orders
  end

  def indexIncomplete
    @orders = Order.where(is_complete: false).order(created_at: :asc)
    render json: @orders
  end

  # GET /orders/1
  def show
    render json: @order
  end

  # POST /orders
  def create
    @order = Order.new(create_params)

    if @order.save
      render json: @order, status: :created, location: @order
    else
      render json: @order.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /orders/1
  def update
    # Cannot update an order marked completed nor an order's tab_id
    if @order.is_complete == true || params[:order].key?(:tab_id)
      render json: @order
      return
    end
  
    if @order.update(update_params)
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

    def create_params
        # Build the order with nested attributes
        order_instance = Order.new(params.require(:order).permit(:user_id, :tab_id, order_items_attributes: [:food_id, :quantity, :fulfilled]))
      
        # Calculate total for this order_instance instance
        total = order_instance.calculate_total
      
        # Merge the calculated total and other defaults
        not_editable_defaults = {user_id: current_user.id}
        editable_defaults = {is_complete: false, total: total}
        params.require(:order).permit(:is_complete, :user_id, :tab_id, order_items_attributes: [:food_id, :quantity, :fulfilled]).merge(not_editable_defaults).reverse_merge(editable_defaults)
    end

    def update_params
      total = @order.calculate_total
      editable_defaults = {total: total}
      params.require(:order).permit(:is_complete, :total).merge(editable_defaults)
    end
end
