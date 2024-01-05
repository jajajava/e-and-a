class OrderItemsController < ApplicationController
  before_action :set_order_item, only: %i[ show update destroy ]

  def index
    @order_items = OrderItem.all

    render json: @order_items
  end

  def show
    render json: @order_item
  end

  def get_order_items
    @order_items = OrderItem.where(order_id: params[:order_id])
    render json: @order_items
  end

  def create
    @order_item = OrderItem.new(create_params)

    if @order_item.save
      render json: @order_item, status: :created, location: @order_item
    else
      render json: @order_item.errors, status: :unprocessable_entity
    end
  end

  def update
    if @order_item.update(update_params)
      render json: @order_item
    else
      render json: @order_item.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @order_item.destroy
  end

  private
    def set_order_item
      @order_item = OrderItem.find(params[:id])
    end

    def create_params
      order_item_instance = OrderItem.new(params.require(:order_item).permit(:order_id, :food_id, :quantity, :fulfilled))
      params.require(:order_item).permit(:order_id, :food_id, :quantity, :fulfilled).merge(fulfilled: false)
    end

    def update_params
      params.require(:order_item).permit(:fulfilled)
    end
end
