# == Schema Information
#
# Table name: playlists
#
#  id                 :integer          not null, primary key
#  title              :string           not null
#  author_id          :integer          not null
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  image_file_name    :string
#  image_content_type :string
#  image_file_size    :integer
#  image_updated_at   :datetime
#

class Playlist < ApplicationRecord
  validates :title, presence: true
  validates :id, uniqueness: { scope: :author_id }

  has_attached_file :image, default_url: "https://s3-us-west-1.amazonaws.com/playthismusic/music-images/playlist-default.png"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

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
