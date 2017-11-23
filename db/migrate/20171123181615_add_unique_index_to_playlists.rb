class AddUniqueIndexToPlaylists < ActiveRecord::Migration[5.1]
  def change
    add_index :playlists, [:author_id, :id], unique: true
  end
end
