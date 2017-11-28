class CreatePlaylists < ActiveRecord::Migration[5.1]
  def change
    create_table :playlists do |t|
      t.string :title, null: false
      t.integer :author_id, null: false
      t.string :image_url, default: "https://s3-us-west-1.amazonaws.com/playthismusic/music-images/playlist-default.png"

      t.timestamps
    end

    add_index :playlists, :author_id
  end
end
