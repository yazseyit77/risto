Rails.application.routes.draw do
  devise_for :users, controllers: { registrations: "registrations"}
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  devise_scope :user do
    get 'login', to: 'devise/sessions#new'
  end
  devise_scope :user do
    get 'signup', to: 'devise/registrations#new'
  end
  devise_scope :user do
    get '/users/sign_out', to: 'devise/sessions#destroy'
  end

  resources :users, only: [:show]

  # resources :restaurants, only: [:index, :show]
  # get 'search', to: 'restaurants#search'

  namespace :api, defaults: {format: 'json'} do
    namespace :v1 do
      resources :restaurants do
        collection do
          get :search
        end
      end
    end
  end
end
