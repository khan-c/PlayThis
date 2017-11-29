json.set! 'users' do
  @users.each do |user|
    json.set! user.id do
      json.partial! 'api/users/user', user: user
    end
  end
end

json.set! 'playlists' do
  @playlists.each do |playlist|
    json.set! playlist.id do
      json.partial! 'api/playlists/playlist', playlist: playlist
    end
  end
end

json.set! 'songs' do
  @songs.each do |song|
    json.set! song.id do
      json.partial! 'api/songs/song', song: song
    end
  end
end
