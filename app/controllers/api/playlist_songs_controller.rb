class Api::PlaylistSongsController < ApplicationController
  def create
    @playlist_song = PlaylistSong.new(playlist_song_params)
    if @playlist_song.save
      render json: ["Track was added to your playlist!"]
    else
      render json: ["Error adding song"], status: 422
    end
  end

  def destroy
    @playlist_song = PlaylistSong.find_by(id: params[:id])
    if @playlist_song
      @playlist_song.destroy!
      render json: ["Song removed!"]
    else
      render json: ["Error removing song"], status: 422
    end
  end

  private

  def playlist_song_params
    params.require(:playlist_song).permit(:playlist_id, :song_id)
  end
end
