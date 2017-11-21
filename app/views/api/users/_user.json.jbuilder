json.user do
  json.extract! user, :id, :username, :session_token
  json.img_url asset_path(user.img_url, type: :images, skip_pipeline: true)
end
