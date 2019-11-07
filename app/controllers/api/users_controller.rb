class Api::UsersController < ApplicationController
  before_action :require_login, only: [:index]

  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def index
    @users = User.includes(:followed_playlists, :followed_users, :followers).all
    render :index
  end

  def update
    @user = current_user
    followed_users = params[:user][:followed_user_ids]
    followed_playlists = params[:user][:followed_playlist_ids]
    @user.followed_user_ids = followed_users
    @user.followed_playlist_ids = followed_playlists
    @users = User.includes(:followed_playlists, :followed_users, :followers).all
    render :index
  end

  private

  def user_params
    params.require(:user).permit(:username, :password, :email)
  end
end
