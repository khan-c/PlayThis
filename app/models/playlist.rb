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

  has_many :playlist_follows,
    class_name: :PlaylistFollow,
    primary_key: :id,
    foreign_key: :playlist_id

  has_many :followers,
    through: :playlist_follows,
    source: :playlist_follower

  def self.top_five_results(query_params)
    param = "%" + query_params + "%"
    Playlist.where('title ILIKE ?', param).limit(5)
  end
end
