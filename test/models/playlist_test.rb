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

require 'test_helper'

class PlaylistTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
