json.extract! playlist, :id, :title
json.image_url playlist.image.url
json.songs do
  json.array! @playlist.songs do |song|
    json.title song.title
    json.song_url song.song_url.url
  end
end
