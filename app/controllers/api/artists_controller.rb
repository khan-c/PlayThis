class Api::ArtistsController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, :with => :record_not_found

  def index
    @artists = Artist.includes(:albums, :songs).all
    render 'api/artists/index.json.jbuilder'
  end

  def show
    @artist = Artist.includes(:albums, :songs).find(params[:id])
    render 'api/artists/show.json.jbuilder'
  end

  def record_not_found
    render json: ["No Artist Found"], status: 404;
  end
end
