require 'rails_helper'

RSpec.describe UserFollow, type: :model do
  context "validations" do
    before(:example) do
      @user = FactoryBot.create(:user)
      @user2 = FactoryBot.create(:user)
      @user_follow = FactoryBot.create(
        :user_follow, user_id: @user.id, followed_user_id: @user2.id
      )
    end

    it { should validate_presence_of(:user_id) }
    it { should validate_presence_of(:followed_user_id) }
    it { should validate_uniqueness_of(:user_id).scoped_to(:followed_user_id) }
  end

  context "associations" do
    it { should belong_to(:follower) }
    it { should belong_to(:followed_user) }
  end

  context "column_specification" do
    it { should have_db_column(:user_id).of_type(:integer).with_options(null: false) }
    it { should have_db_column(:followed_user_id).of_type(:integer).with_options(null: false) }
  end
end
