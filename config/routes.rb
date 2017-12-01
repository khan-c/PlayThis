Rails.application.routes.draw do

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  namespace :api, default: { format: :json } do
    resources :users, only: [:create, :index, :update]
    resource :session, only: [:create, :destroy]
    resources :playlists, only: [:create, :destroy, :update, :show, :index] do
      resources :songs, only: [:index]
    end
    resources :playlist_songs, only: [:create, :destroy, :index]
    resources :searches, only: [:index]
    resources :artists, only: [:index, :show]
    resources :albums, only: [:index, :show]
  end
end
