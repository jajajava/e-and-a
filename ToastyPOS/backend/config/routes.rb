Rails.application.routes.draw do
  get "/orders/complete", to: "orders#indexComplete"
  get "/orders/incomplete", to: "orders#indexIncomplete" 
  post "/users", to: "users#create"
  get "/me", to: "users#me"
  post "/auth/login", to: "auth#login"
  get "/order_items/single/:order_id", to: "order_items#oneOrdersItems"
  resources :order_items
  resources :foods
  resources :tabs
  resources :orders
  resources :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
