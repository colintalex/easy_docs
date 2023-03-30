Rails.application.routes.draw do
  root 'documents#index'
  resources :documents do
    resources :fragments
  end
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html


end
