# == Schema Information
#
# Table name: user_follows
#
#  id               :integer          not null, primary key
#  user_id          :integer          not null
#  followed_user_id :integer          not null
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#

class UserFollow < ApplicationRecord
  validates :user_id, :followed_user_id, presence: true
  validates :user_id, uniqueness: { scope: :followed_user_id }

  belongs_to :follower,
    class_name: :User,
    primary_key: :id,
    foreign_key: :user_id

  belongs_to :followed_user,
    class_name: :User,
    primary_key: :id,
    foreign_key: :followed_user_id
end
