json.extract! song, :id, :title, :length, :song_url
json.artist song.artist, :id, :name
json.album song.album, :id, :title
