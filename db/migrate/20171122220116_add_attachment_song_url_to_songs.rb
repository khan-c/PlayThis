class AddAttachmentSongUrlToSongs < ActiveRecord::Migration[5.1]
  def self.up
    change_table :songs do |t|
      t.attachment :song_url
    end
  end

  def self.down
    remove_attachment :songs, :song_url
  end
end
