json.extract! user, :id, :username
json.image_url user.avatar_url
json.playlist_ids user.playlist_ids
json.followed_playlist_ids user.followed_playlist_ids
json.followed_user_ids user.followed_user_ids
json.follower_count user.followers.count
json.current_user_follows current_user.followed_user_ids.include?(user.id)
