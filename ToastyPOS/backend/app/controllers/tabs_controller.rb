class TabsController < ApplicationController
  before_action :set_tab, only: %i[ show update destroy ]

  # GET /tabs
  def index
    @tabs = Tab.all
    render json: @tabs
  end

  # GET /tabs/1
  def show
    render json: @tab
  end

  # POST /tabs
  def create
    @tab = Tab.new(tab_params)

    if @tab.save
      render json: @tab, status: :created, location: @tab
    else
      render json: @tab.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /tabs/1
  def update
    # Prevents updating old tabs
    if @tab.is_active == false
      render json: @tab
      return
    end

    was_active = @tab.is_active
    updating_active_status = params[:tab].key?(:is_active)
  
    if updating_active_status && !params[:tab][:is_active] && was_active
      new_total = @tab.calculate_total
      tab_update_params = tab_params.merge(total: new_total)
    else
      tab_update_params = tab_params
    end
  
    if @tab.update(tab_update_params)
      render json: @tab
    else
      render json: @tab.errors, status: :unprocessable_entity
    end
  end

  # DELETE /tabs/1
  def destroy
    @tab.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_tab
      @tab = Tab.find(params[:id])
    end

    def calculate_tab_total
      @tab.total = @tab.calculate_total
    end

    # Only allow a list of trusted parameters through.
    def tab_params
      tab_instance = Tab.new(params.require(:tab).permit(:name, :user_id, :total, :is_active))
      
      not_editable_defaults = {user_id: current_user.id}
      editable_defaults = {total: 0.00, is_active: true}
      # .reverse_merge is used so that instead of the second hash overwriting matching values in first hash, it's the opposite (custom values > default values)
      params.require(:tab).permit(:name, :user_id, :total, :is_active).merge(not_editable_defaults).reverse_merge(editable_defaults)
    end
end
