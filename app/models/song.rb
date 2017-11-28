# == Schema Information
#
# Table name: songs
#
#  id         :integer          not null, primary key
#  title      :string           not null
#  artist_id  :integer          not null
#  album_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  length     :integer          not null
#

class Song < ApplicationRecord
  validates :title, :artist_id, :album_id, presence: true
  validates :title, uniqueness: { scope: :artist_id }
  validates :title, uniqueness: { scope: :album_id }

  has_many :playlist_songs,
    dependent: :destroy

  has_many :playlists,
    through: :playlist_songs,
    source: :playlist

  belongs_to :album
  belongs_to :artist
end
