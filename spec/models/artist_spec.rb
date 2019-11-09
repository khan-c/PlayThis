require 'rails_helper'

RSpec.describe Artist, type: :model do
  context "validations" do
    before(:example) do
      @artist = FactoryBot.create(:artist)
    end

    it { should validate_presence_of(:name) }
  end

  context "associations" do
    it { should have_many(:albums) }
    it { should have_many(:songs) }
  end

  context "column_specification" do
    it { should have_db_column(:name).of_type(:string).with_options(null: false) }
  end

  context "::top_five_results" do
    before(:example) do
      FactoryBot.create(:artist, name: 'aa')
      FactoryBot.create(:artist, name: 'ab')
      FactoryBot.create(:artist, name: 'ac')
      FactoryBot.create(:artist, name: 'ad')
      FactoryBot.create(:artist, name: 'ae')
      FactoryBot.create(:artist, name: 'bb')
    end

    search_query = "a"

    it "returns five results" do
      expect(Artist.top_five_results(search_query).count).to eq 5
    end

    it "returns results that contain the search_query" do
      expect(Artist.top_five_results(search_query).all? do |result|
        result.name.include?(search_query)
      end).to be true
    end
  end
end
