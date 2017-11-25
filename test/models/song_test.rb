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
#  length                :integer          not null
#

require 'test_helper'

class SongTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
