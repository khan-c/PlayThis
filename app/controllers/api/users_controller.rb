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
    @users = User.all
    render 'api/users/index.json.jbuilder'
  end

  private

  def user_params
    params.require(:user).permit(:username, :password, :email)
  end
end
