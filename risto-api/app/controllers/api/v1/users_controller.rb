class Api::V1::UsersController < ApplicationController
  # skip_before_action :authorized, only: [:create]
  skip_before_action :verify_authenticity_token


  def index
    @users = User.all
    if @users
      render json: {
        users: @users
      }
    else
      render json: {
        status: 500,
        errors: ['no users found']
      }
    end
  end
    
  def show
    @user = User.find(params[:id])
    if @user
      render json: {
        user: @user
      }
    else
      render json: {
        status: 500,
        errors: ['user not found']
      }
    end
  end
  
  def create
    @user = User.new(user_params)
    if @user.save
      login!
      render json: {
        status: :created,
        user: @user
      }
    else 
      render json: {
        status: 500,
        errors: @user.errors.full_messages
      }
    end
  end
  
  private
  
  def user_params
    params.require(:user).permit(:username, :password, :password_confirmation)
  end

  # def index
  #   @users = User.all
  #   render json: @users.to_json
  # end
    
  # def profile
  #   render json: { user: UserSerializer.new(current_user) }, status: :accepted
  # end

  # def show
  #   @user = User.find_by(id: params[:id])
  #   render json: @user.to_json
  # end

  # def create
  #   @user = User.create(user_params)
  #   if @user.valid?
  #     @token = encode_token(user_id: @user.id)
  #     render json: { user: UserSerializer.new(@user), jwt: @token }, status: :created
  #   else
  #     render json: { error: 'Failed to create user' }, status: :not_acceptable
  #   end
  # end
  
  # private
  
  # def user_params
  #   params.require(:user).permit(:username, :password)
  # end

end