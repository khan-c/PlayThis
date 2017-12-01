json.extract! album, :id, :title, :image_url, :artist_id
json.song_ids album.song_ids
json.artist album.artist, :id, :name
