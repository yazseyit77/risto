Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html


  # resources :restaurants, only: [:index, :show]
  # get 'search', to: 'restaurants#search'

  namespace :api do
    namespace :v1 do
      resources :restaurants do
        collection do
          get :search
        end
      end
    end
  end
end
