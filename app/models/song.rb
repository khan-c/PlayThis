# == Schema Information
#
# Table name: songs
#
#  id                    :integer          not null, primary key
#  title                 :string           not null
#  artist_id             :integer          not null
#  album_id              :integer          not null
#  created_at            :datetime         not null
#  updated_at            :datetime         not null
#  song_url_file_name    :string
#  song_url_content_type :string
#  song_url_file_size    :integer
#  song_url_updated_at   :datetime
#

class Song < ApplicationRecord
  validates :title, :artist_id, :album_id, presence: true
  validates :title, uniqueness: { scope: :artist_id }
  validates :title, uniqueness: { scope: :album_id }

  has_attached_file :song_url, default_url: "https://s3-us-west-1.amazonaws.com/playthismusic/music/DOCTOR+VOX+-+Heatstroke.mp3"
  validates_attachment_content_type :song_url, content_type: /^audio\/(x-xm)/

  has_many :playlist_songs,
    dependent: :destroy

  has_many :playlists,
    through: :playlist_songs,
    source: :playlist
end
