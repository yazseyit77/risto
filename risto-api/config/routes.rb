Rails.application.routes.draw do

  # resources :users, only: [:show]
  # resources :restaurants, only: [:index, :show]
  # get 'search', to: 'restaurants#search'

  namespace :api, defaults: {format: 'json'} do
    namespace :v1 do
      resources :users, only: [:show, :create, :index, :profile]
      # post '/login', to: 'auth#create'
      # get '/profile', to: 'users#profile'
      post '/login', to: 'sessions#create'
      delete '/logout', to: 'sessions#destroy'
      get '/logged_in', to: 'sessions#is_logged_in?'

      
      resources :restaurants do
        collection do
          get :search
        end
      end
    end
  end
end
