json.extract! song, :id, :title, :length
json.artist song.artist, :id, :name
json.album song.album, :id, :title
