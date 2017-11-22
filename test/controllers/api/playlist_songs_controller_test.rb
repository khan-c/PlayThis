require 'test_helper'

class Api::PlaylistSongsControllerTest < ActionDispatch::IntegrationTest
  test "should get create" do
    get api_playlist_songs_create_url
    assert_response :success
  end

  test "should get destroy" do
    get api_playlist_songs_destroy_url
    assert_response :success
  end

end
