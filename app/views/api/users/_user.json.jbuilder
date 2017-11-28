json.user do
  json.extract! user, :id, :username, :session_token
  json.image_url user.avatar_url
end
