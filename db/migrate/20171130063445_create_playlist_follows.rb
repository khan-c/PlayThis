class CreatePlaylistFollows < ActiveRecord::Migration[5.1]
  def change
    create_table :playlist_follows do |t|
      t.integer :user_id, null: false
      t.integer :playlist_id, null: false

      t.timestamps
    end

    add_index :playlist_follows, :user_id
    add_index :playlist_follows, :playlist_id
    add_index :playlist_follows, [:user_id, :playlist_id], unique: true
  end
end