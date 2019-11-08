require 'rails_helper'

RSpec.describe Song, type: :model do
  context "validations" do
    before(:example) do
      @artist = FactoryBot.create(:artist)
      @album = FactoryBot.create(:album, artist_id: @artist.id)
      @song = FactoryBot.create(:song, artist_id: @artist.id, album_id: @album.id)
    end

    it { should validate_presence_of(:title) }
    it { should validate_presence_of(:artist_id) }
    it { should validate_presence_of(:album_id) }
    it { should validate_presence_of(:song_url) }
    it { should validate_uniqueness_of(:title).scoped_to([:artist_id, :album_id]) }
  end

  context "associations" do
    it { should belong_to(:album) }
    it { should belong_to(:artist) }
    it { should have_many(:playlist_songs) }
    it { should have_many(:playlists) }
  end

  context "column_specification" do
    it { should have_db_column(:title).of_type(:string).with_options(null: false) }
    it { should have_db_column(:artist_id).of_type(:integer).with_options(null: false) }
    it { should have_db_column(:album_id).of_type(:integer).with_options(null: false) }
    it { should have_db_column(:length).of_type(:integer).with_options(null: false) }
  end

  context "new song creation" do
    before(:example) do
      @artist = FactoryBot.create(:artist)
      @album = FactoryBot.create(:album, artist_id: @artist.id)
    end
    
    it "saves new song" do
      expect(Song.count).to eq 0

      FactoryBot.create(:song, artist_id: @artist.id, album_id: @album.id)

      expect(Song.count).to eq 1
    end
  end

  context "::top_five_results" do
    before(:example) do
      @artist = FactoryBot.create(:artist)
      @album = FactoryBot.create(:album, artist_id: @artist.id)
      FactoryBot.create(:song, title: 'aa', artist_id: @artist.id, album_id: @album.id)
      FactoryBot.create(:song, title: 'ab', artist_id: @artist.id, album_id: @album.id)
      FactoryBot.create(:song, title: 'ac', artist_id: @artist.id, album_id: @album.id)
      FactoryBot.create(:song, title: 'ad', artist_id: @artist.id, album_id: @album.id)
      FactoryBot.create(:song, title: 'ae', artist_id: @artist.id, album_id: @album.id)
      FactoryBot.create(:song, title: 'bb', artist_id: @artist.id, album_id: @album.id)
    end

    search_query = "a"

    it "returns five results" do
      expect(Song.top_five_results(search_query).count).to eq 5
    end

    it "returns results that contain the search_query" do
      expect(Song.top_five_results(search_query).all? do |result|
        result.title.include?(search_query)
      end).to be true
    end
  end
end
