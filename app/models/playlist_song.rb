# == Schema Information
#
# Table name: playlist_songs
#
#  id          :integer          not null, primary key
#  playlist_id :integer          not null
#  song_id     :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class PlaylistSong < ApplicationRecord

  belongs_to :playlist

  belongs_to :song
end
