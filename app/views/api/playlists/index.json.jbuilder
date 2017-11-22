@playlists.each do |playlist|
  json.set! playlist.id do
    json.id playlist.id
    json.title playlist.title
    json.image_url playlist.image.url
  end
end
