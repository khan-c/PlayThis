@users.each do |user|
  json.set! user.id do
    json.id user.id
    json.username user.username
    json.image_url user.avatar_url
    json.playlist_ids user.playlist_ids
  end
end
