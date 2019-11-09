require 'rails_helper'

RSpec.describe Album, type: :model do
  context "validations" do
    before(:example) do
      @artist = FactoryBot.create(:artist)
      @album = FactoryBot.create(:album, artist_id: @artist.id)
    end

    it { should validate_presence_of(:title) }
  end

  context "associations" do
    it { should belong_to(:artist) }
    it { should have_many(:songs) }
  end

  context "column_specification" do
    it { should have_db_column(:title).of_type(:string).with_options(null: false) }
    it { should have_db_column(:artist_id).of_type(:integer).with_options(null: false) }
  end

  context "::top_five_results" do
    before(:example) do
      @artist = FactoryBot.create(:artist)
      FactoryBot.create(:album, title: 'aa', artist_id: @artist.id)
      FactoryBot.create(:album, title: 'ab', artist_id: @artist.id)
      FactoryBot.create(:album, title: 'ac', artist_id: @artist.id)
      FactoryBot.create(:album, title: 'ad', artist_id: @artist.id)
      FactoryBot.create(:album, title: 'ae', artist_id: @artist.id)
      FactoryBot.create(:album, title: 'bb', artist_id: @artist.id)
    end

    search_query = "a"

    it "returns five results" do
      expect(Album.top_five_results(search_query).count).to eq 5
    end

    it "returns results that contain the search_query" do
      expect(Album.top_five_results(search_query).all? do |result|
        result.title.include?(search_query)
      end).to be true
    end
  end
end
