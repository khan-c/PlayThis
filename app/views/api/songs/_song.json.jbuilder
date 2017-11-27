json.extract! song, :id, :title, :song_url, :length
json.artist song.artist, :id, :name
json.album song.album, :id, :title
