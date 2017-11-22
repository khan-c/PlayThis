# == Schema Information
#
# Table name: songs
#
#  id          :integer          not null, primary key
#  title       :string           not null
#  artist_id   :integer          not null
#  album_id    :integer          not null
#  playlist_id :integer
#  song_url    :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Song < ApplicationRecord
  validates :title, :artist_id, :album_id, :song_url, presence: true
  validates :title, uniqueness: { scope: :artist_id }
  validates :title, uniqueness: { scope: :album_id }

  belongs_to :playlist,
    class: :Playlist,
    foreign_key: :playlist_id,
    primary_key: :id,
    optional: true
end
