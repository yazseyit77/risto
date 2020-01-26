class Api::V1::RestaurantsController < ActionController::Base
  before_action :set_restaurant, only: [:show, :update, :destroy]
  skip_before_action :verify_authenticity_token

  # GET /restaurants
  def index
    @restaurants = Restaurant.all
    render json: @restaurants.to_json(:except => [:created_at, :updated_at]), status: 200
  end

  def search
      # q = params[:q]
  
      # if q.blank?
      #   render status: 400, json: { error: 'Expected parameter `q` '}
      # else
      #   render(
      #     status: 200,
      #     json: Restaurant.where(["name LIKE ?", "%#{q}%"]).limit(100)
      #   )
      # end

    # @restaurant = Restaurant.where("name LIKE ?", "%" + params[:q] + "%")
    @restaurant = Restaurant.fetch(params[:q])
    render json: @restaurant.to_json
  end

  # GET /restaurants/1
  def show
    @restaurant = Restaurant.find(params[:id])
    render json: @restaurant
  end

  # POST /restaurants
  def create
    @restaurant = Restaurant.new(restaurant_params)

    if @restaurant.save
      render json: @restaurant, status: :created, location: nil
    else
      render json: @restaurant.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /restaurants/1
  # def update
  #   if @restaurant.update(restaurant_params)
  #     render json: @restaurant
  #   else
  #     render json: @restaurant.errors, status: :unprocessable_entity
  #   end
  # end

  # DELETE /restaurants/1
  # def destroy
  #   @restaurant.destroy
  # end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_restaurant
      @restaurant = Restaurant.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def restaurant_params
      params.require(:restaurant).permit(:name, :address, :hours, :images)
    end
end
