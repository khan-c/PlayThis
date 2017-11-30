json.extract! playlist, :id, :title
json.author_id playlist.author_id
json.author_name playlist.author.username
json.image_url playlist.image_url
json.song_ids playlist.song_ids
json.followers playlist.followers.length
json.current_user_follows current_user.followed_playlist_ids.include?(playlist.id)
