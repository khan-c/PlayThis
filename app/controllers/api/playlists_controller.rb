class Api::PlaylistsController < ApplicationController
  before_action :require_login
  rescue_from ActiveRecord::RecordNotFound, :with => :record_not_found

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
    @playlist = current_user.playlists.find(params[:id])
    if @playlist
      @playlist.destroy!
      render json: ["Playlist deleted"]
    else
      render json: ["No playlist to delete"], status: 404
    end
  end

  def update
    @playlist = current_user.playlists.includes(:songs).find(params[:id])
    if @playlist && @playlist.update_attributes(playlist_params)
      songs = params[:playlist][:song_ids]
      @playlist.song_ids = songs
      render 'api/playlists/show.json.jbuilder'
    else
      render json: @playlist.errors.full_messages, status: 401
    end
  end

  def show
    @playlist = Playlist.includes(:songs, :author).find(params[:id])
    render 'api/playlists/show.json.jbuilder'
  end

  def index
    if params[:userId]
      @playlists = User.find(params[:userId]).playlists.includes(:songs, :author)
    else
      @playlists = Playlist.includes(:songs, :author).all
    end
    render 'api/playlists/index.json.jbuilder'
  end

  def record_not_found
    render json: ["No Playlist Found"], status: 404;
  end

  private

  def playlist_params
    params.require(:playlist).permit(:title)
  end
end
