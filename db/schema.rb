# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_11_09_030208) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "albums", force: :cascade do |t|
    t.string "title", null: false
    t.string "img_url"
    t.integer "artist_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["artist_id", "id"], name: "index_albums_on_artist_id_and_id", unique: true
  end

  create_table "artists", force: :cascade do |t|
    t.string "name", null: false
    t.string "img_url"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "playlist_follows", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "playlist_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["playlist_id"], name: "index_playlist_follows_on_playlist_id"
    t.index ["user_id", "playlist_id"], name: "index_playlist_follows_on_user_id_and_playlist_id", unique: true
    t.index ["user_id"], name: "index_playlist_follows_on_user_id"
  end

  create_table "playlist_songs", force: :cascade do |t|
    t.integer "playlist_id", null: false
    t.integer "song_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["playlist_id"], name: "index_playlist_songs_on_playlist_id"
    t.index ["song_id"], name: "index_playlist_songs_on_song_id"
  end

  create_table "playlists", force: :cascade do |t|
    t.string "title", null: false
    t.integer "author_id", null: false
    t.string "image_url"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["author_id", "id"], name: "index_playlists_on_author_id_and_id", unique: true
    t.index ["author_id"], name: "index_playlists_on_author_id"
  end

  create_table "songs", force: :cascade do |t|
    t.string "title", null: false
    t.integer "artist_id", null: false
    t.integer "album_id", null: false
    t.string "song_url", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "length", null: false
    t.index ["album_id"], name: "index_songs_on_album_id"
    t.index ["artist_id"], name: "index_songs_on_artist_id"
    t.index ["title", "album_id"], name: "index_songs_on_title_and_album_id", unique: true
    t.index ["title", "artist_id"], name: "index_songs_on_title_and_artist_id", unique: true
  end

  create_table "user_follows", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "followed_user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["followed_user_id"], name: "index_user_follows_on_followed_user_id"
    t.index ["user_id", "followed_user_id"], name: "index_user_follows_on_user_id_and_followed_user_id", unique: true
    t.index ["user_id"], name: "index_user_follows_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.string "email", null: false
    t.string "avatar_url", default: "https://s3-us-west-1.amazonaws.com/playthismusic/images/default_avatar.png"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
    t.index ["username"], name: "index_users_on_username", unique: true
  end

end
