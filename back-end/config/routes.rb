Rails.application.routes.draw do
  resources :couples
  resources :invitations
  resources :guests

  post '/login', to:'couples#login'
  patch '/couples_edit', to:'couples#couples_edit'
  get '/current_couple', to: 'couples#current_couple'
  patch '/change_photo', to: 'couples#change_photo'
  # delete '/delete_photo/:id', to: 'couples#delete_photo'

  get '/guests_couple', to: 'guests#guests_couple'

  get '/find_by_address', to: 'invitations#find_by_address'
 
end
