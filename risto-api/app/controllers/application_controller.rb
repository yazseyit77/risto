class ApplicationController < ActionController::Base

  helper_method :login!, :logged_in?, :current_user, :authorized_user?, :logout!

  def login!
    session[:user_id] = @user.id
  end

  def logged_in?
    !!session[:user_id]
  end

  def current_user
    @current_user ||= User.find(session[:user_id]) if session[:user_id]
  end

  def authorized_user?
    @user == current_user
  end

  def logout!
    session.clear
  end

    # before_action :authorized

    # def encode_token(payload)
    #     # don't forget to hide your secret in an environment variable
    #     # payload => { beef: 'steak' }
    #     JWT.encode(payload, 'my_s3cr3t')
    #     # jwt string: "eyJhbGciOiJIUzI1NiJ9.eyJiZWVmIjoic3RlYWsifQ._IBTHTLGX35ZJWTCcY30tLmwU9arwdpNVxtVU0NpAuI"
    #   end
    
    #   def auth_header
    #     # { 'Authorization': 'Bearer <token>' }
    #     request.headers['Authorization']
    #   end
    
    #   def decoded_token
    #     if auth_header
    #       token = auth_header.split(' ')[1]
    #       # headers: { 'Authorization': 'Bearer <token>' }
    #       begin
    #         JWT.decode(token, 'my_s3cr3t', true, algorithm: 'HS256')
    #         # JWT.decode("eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoyM30.1T0Bnej0pFJPq0W27s4zpaIK76Gea5YDcuDwb3eMk_Y", 'my_s3cr3t', true, algorithm: 'HS256')
    #         # JWT.decode => [{ "beef"=>"steak" }, { "alg"=>"HS256" }]
    #       rescue JWT::DecodeError
    #         nil
    #       end
    #     end
    #   end
    

      
    #   def current_user
    #     if decoded_token
    #       # decoded_token=> [{"user_id"=>2}, {"alg"=>"HS256"}]
    #       # or nil if we can't decode the token
    #       user_id = decoded_token[0]['user_id']
    #       @user = User.find_by(id: user_id)
    #     end
    #   end
    
    #   def logged_in?
    #     !!current_user
    #   end

    #   def authorized
    #     render json: { message: 'Please login!' }, status: :unauthorized unless logged_in?
    #   end
end
