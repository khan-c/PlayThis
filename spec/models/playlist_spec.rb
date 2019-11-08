require 'rails_helper'

RSpec.describe Playlist, type: :model do
  context "validations" do
    before(:example) do
      @user = FactoryBot.create(:user)
      @playlist = FactoryBot.create(:playlist, author_id: @user.id)
    end

    it { should validate_presence_of(:title) }
    it { should validate_uniqueness_of(:id).scoped_to(:author_id) }
    
  end

  context "associations" do
    it { should belong_to(:author) }
    it { should have_many(:playlist_songs) }
    it { should have_many(:songs) }
    it { should have_many(:playlist_follows) }
    it { should have_many(:followers) }
  end

  context "column_specification" do
    it { should have_db_column(:title).of_type(:string).with_options(null: false)}
    it { should have_db_column(:author_id).of_type(:integer).with_options(null: false)}
  end

  context "new playlist creation" do
    before(:example) do
      @user = FactoryBot.create(:user)
    end
    
    it "saves new playlist" do
      expect(Playlist.count).to eq 0

      FactoryBot.create(:playlist, author_id: @user.id)

      expect(Playlist.count).to eq 1
    end
  end

  context "::top_five_results" do
    before(:example) do
      @user = FactoryBot.create(:user)
      FactoryBot.create(:playlist, title: 'aa', author_id: @user.id)
      FactoryBot.create(:playlist, title: 'ab', author_id: @user.id)
      FactoryBot.create(:playlist, title: 'ac', author_id: @user.id)
      FactoryBot.create(:playlist, title: 'ad', author_id: @user.id)
      FactoryBot.create(:playlist, title: 'ae', author_id: @user.id)
      FactoryBot.create(:playlist, title: 'bb', author_id: @user.id)
    end

    search_query = "a"

    it "returns five results" do
      expect(Playlist.top_five_results(search_query).count).to eq 5
    end

    it "returns results that contain the search_query" do
      expect(Playlist.top_five_results(search_query).all? do |result|
        result.title.include?(search_query)
      end).to be true
    end
  end
end
