class Api::PlaylistsController < ApplicationController
  before_action :require_login

  def create
    @playlist = Playlist.new(playlist_params)
    @playlist.author_id = current_user.id
    if @playlist.save
      render :show
    else
      render json: @playlist.errors.full_messages, status: 401
    end
  end

  def destroy
    @playlist = Playlist.find_by(id: params[:id])
    if @playlist
      @playlist.destroy!
      render :index
    else
      render json: ["No playlist to delete"], status: 404
    end
  end

  def update
    @playlist = current_user.playlists.find_by(id: params[:id])
    if @playlist && @playlist.update_attributes(playlist_params)
      render :show
    else
      render json: @playlist.errors.full_messages, status: 401
    end
  end

  def show
    @playlist = Playlist.includes(:songs).find_by(id: params[:id])
    render 'api/playlists/show.json.jbuilder'
  end

  def index
    @playlists = Playlist.includes(:songs).all
    render 'api/playlists/index.json.jbuilder'
  end

  private

  def playlist_params
    params.require(:playlist).permit(:title)
  end
end
