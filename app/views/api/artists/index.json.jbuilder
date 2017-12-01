@artist.each do |artist|
  json.set! artist.id do
    json.partial! 'api/artist/artist', artist: artist
  end
end
