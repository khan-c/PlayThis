class Api::AlbumsController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, :with => :record_not_found

  def index
    @albums = Album.all
    render 'api/albums/index.json.jbuilder'
  end

  def show
    @album = Album.includes(:songs, :artist).find(params[:id])
    render 'api/albums/show.json.jbuilder'
  end

  def record_not_found
    render json: ["No Album Found"], status: 404;
  end
end
