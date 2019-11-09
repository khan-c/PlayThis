require 'rails_helper'

RSpec.describe PlaylistFollow, type: :model do
  context "validations" do
    before(:example) do
      @user = FactoryBot.create(:user)
      @playlist = FactoryBot.create(:playlist, author_id: @user.id)
      @playlist_follow = FactoryBot.create(
        :playlist_follow, user_id: @user.id, playlist_id: @playlist.id)
    end

    it { should validate_presence_of(:user_id) }
    it { should validate_presence_of(:playlist_id) }
    it { should validate_uniqueness_of(:user_id).scoped_to(:playlist_id) }
  end

  context "associations" do
    it { should belong_to(:playlist_follower) }
    it { should belong_to(:followed_playlist) }
  end

  context "column_specification" do
    it { should have_db_column(:user_id).of_type(:integer).with_options(null: false) }
    it { should have_db_column(:playlist_id).of_type(:integer).with_options(null: false) }
  end
end
