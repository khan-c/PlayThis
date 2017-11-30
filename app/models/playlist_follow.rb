# == Schema Information
#
# Table name: playlist_follows
#
#  id          :integer          not null, primary key
#  user_id     :integer          not null
#  playlist_id :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class PlaylistFollow < ApplicationRecord
  validates :user_id, :playlist_id, presence: true
  validates :user_id, uniqueness: { scope: :playlist_id }

  belongs_to :playlist_follower,
    class_name: :User,
    primary_key: :id,
    foreign_key: :user_id

  belongs_to :followed_playlist,
    class_name: :Playlist,
    primary_key: :id,
    foreign_key: :playlist_id
end
