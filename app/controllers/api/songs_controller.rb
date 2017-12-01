class Api::SongsController < ApplicationController
  before_action :require_login

  def index
    if params[:playlist_id] == 'undefined'
      @songs = Song.all
      render 'api/songs/index.json.jbuilder'
    else
      playlist = Playlist.find_by(id: params[:playlist_id])
      if playlist
        @songs = playlist.songs.includes(:album, :artist)
        render 'api/songs/index.json.jbuilder'
      else
        render json: ["Songs cannot be retrieved at this moment"], status: 404
      end
    end
  end
end
