json.extract! playlist, :id, :title
json.author playlist.author.username
json.image_url playlist.image.url
json.song_ids playlist.song_ids
