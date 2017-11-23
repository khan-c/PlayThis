class Api::SongsController < ApplicationController
  before_action :require_login

  def index
    playlist = Playlist.find_by(id: params[:playlist_id])
    if playlist
      @songs = playlist.songs
      render 'api/songs/index.json.jbuilder'
    else
      render json: ["Songs cannot be retrieved at this moment"], status: 404
    end
  end
end
