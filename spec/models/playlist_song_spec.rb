require 'rails_helper'

RSpec.describe PlaylistSong, type: :model do
  context "validations" do
    before(:example) do
      @user = FactoryBot.create(:user)
      @playlist = FactoryBot.create(:playlist, author_id: @user.id)
      @artist = FactoryBot.create(:artist)
      @album = FactoryBot.create(:album, artist_id: @artist.id)
      @song = FactoryBot.create(:song, artist_id: @artist.id, album_id: @album.id)
      @playlist_song = FactoryBot.create(
        :playlist_song, playlist_id: @playlist.id, song_id: @song.id
      )
    end

    it { should validate_presence_of(:song_id) }
    it { should validate_presence_of(:playlist_id) }
  end

  context "associations" do
    it { should belong_to(:playlist) }
    it { should belong_to(:song) }
  end

  context "column_specification" do
    it { should have_db_column(:song_id).of_type(:integer).with_options(null: false) }
    it { should have_db_column(:playlist_id).of_type(:integer).with_options(null: false) }
  end
end
