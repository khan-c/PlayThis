@users.each do |user|
  json.set! user.id do
    json.id user.id
    json.username user.username
    json.avatar_url user.avatar.url
    json.playlist_ids user.playlist_ids
  end
end
