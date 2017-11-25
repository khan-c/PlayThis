class AddSongLengthToSong < ActiveRecord::Migration[5.1]
  def change
    add_column :songs, :length, :integer, null: false
  end
end
