require 'rails_helper'

RSpec.describe User, type: :model do
  context "validations" do
    before(:example) do
      @user = FactoryBot.create(:user)
    end

    it { should validate_presence_of(:username) }
    it { should validate_presence_of(:email) }
    it { should validate_uniqueness_of(:username) }
    it { should validate_uniqueness_of(:email) }
    it { should validate_length_of(:password).is_at_least(6).on(:create) }
    
  end

  context "associations" do
    it { should have_many(:playlists) }
    it { should have_many(:playlist_follows) }
    it { should have_many(:followed_playlists) }
    it { should have_many(:user_follows) }
    it { should have_many(:followed_users) }
    it { should have_many(:user_followed) }
    it { should have_many(:followers) }
  end

  context "column_specification" do
    it { should have_db_column(:username).of_type(:string).with_options(null: false)}
    it { should have_db_column(:email).of_type(:string).with_options(null: false)}
    it { should have_db_column(:avatar_url).of_type(:string).with_options(default: "https://s3-us-west-1.amazonaws.com/playthismusic/images/default_avatar.png")}
  end

  context ".find_by_credentials" do
    before(:example) do
      @user = FactoryBot.create(:user)
    end

    it "returns user that matches username and password" do
      expect(User.find_by_credentials("username", "password")).to eq(@user)
    end

    it "returns nil if user cannot be found" do
      expect(User.find_by_credentials("test", "tester")).to be nil
    end
  end
end
  