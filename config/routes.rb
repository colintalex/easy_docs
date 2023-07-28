Rails.application.routes.draw do
  root 'documents#index'

  get  '/login',  to: 'sessions#new'
  post '/login',  to: 'sessions#create'
  post '/logout', to: 'sessions#destroy'
  get  '/logout', to: 'sessions#destroy'

  get  '/register', to: 'users#new'
  post '/register', to: 'users#create'

  resources :users

  resources :documents, only: [:index, :show] do
    resources :fragments,  only: [:index, :show]
  end

  namespace :admin do
    resources :documents do
      resources :fragments
    end
  end
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html


end
