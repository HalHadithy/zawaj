Rails.application.routes.draw do
  resources :couples
  resources :inviations
  resources :guests
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"


  # not entirely sure this is the correct way to do it
  post '/login', to:'couples#login'
  get '/current_couple/:id', to: 'couples#current_couple'

  # create or replace photos
  patch '/change_photo/:id', to: 'couples#change_photo'

  # delete '/couples/:id/photos/:id', to: 'couples#destroy'
 
end
