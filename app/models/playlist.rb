# == Schema Information
#
# Table name: playlists
#
#  id         :integer          not null, primary key
#  title      :string           not null
#  author_id  :integer          not null
#  image_url  :string           default("https://s3-us-west-1.amazonaws.com/playthismusic/music-images/playlist-default.png")
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Playlist < ApplicationRecord
  validates :title, presence: true
  validates :id, uniqueness: { scope: :author_id }

  belongs_to :author,
    class_name: :User,
    primary_key: :id,
    foreign_key: :author_id

  has_many :playlist_songs,
    dependent: :destroy

  has_many :songs,
    through: :playlist_songs,
    source: :song
end
