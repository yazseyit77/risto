class Api::V1::AuthController < ApplicationController
    skip_before_action :authorized, only: [:create]
    skip_before_action :verify_authenticity_token
  
    def create
      @user = User.find_by(username: user_login_params[:username])
      #User#authenticate comes from BCrypt
      if @user && @user.authenticate(user_login_params[:password])
        # encode token comes from ApplicationController
        token = encode_token({ user_id: @user.id })
        render json: { user: UserSerializer.new(@user), jwt: token }, status: :accepted
      else
        render json: { message: 'Invalid username or password' }, status: :unauthorized
      end
    end

    def is_logged_in?
      if logged_in? && current_user
        render json: {
          logged_in: true,
          user: current_user
        }
      else
        render json: {
          logged_in: false,
          message: 'no such user'
        }
      end
    end
    
    def destroy
      logout!
      render json: {
        status: 200,
        logged_out: true
      }
    end
  
    private
  
    def user_login_params
      # params { user: {username: 'Chandler Bing', password: 'hi' } }
      params.require(:auth).permit(:username, :password)
    end
  end