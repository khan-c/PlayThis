# == Schema Information
#
# Table name: songs
#
#  id         :integer          not null, primary key
#  title      :string           not null
#  artist_id  :integer          not null
#  album_id   :integer          not null
#  song_url   :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  length     :integer          not null
#

class Song < ApplicationRecord
  validates :title, :artist_id, :album_id, presence: true
  validates :song_url, presence: true
  validates :title, uniqueness: { scope: [:artist_id, :album_id] }

  has_many :playlist_songs,
    dependent: :destroy

  has_many :playlists,
    through: :playlist_songs,
    source: :playlist

  belongs_to :album
  belongs_to :artist

  def self.top_five_results(query_params)
    param = "%" + query_params + "%"
    Song.where('title ILIKE ?', param).limit(5)
  end
end
