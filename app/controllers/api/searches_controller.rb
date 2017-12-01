class Api::SearchesController < ApplicationController
  def index
    @users = User.top_five_results(search_params[:query])
    @playlists = Playlist.top_five_results(search_params[:query])
    @songs = Song.top_five_results(search_params[:query])
    @albums = Album.top_five_results(search_params[:query])
    @artists = Artist.top_five_results(search_params[:query])
    render :index
  end

  private

  def search_params
    params.require(:search).permit(:query)
  end
end
