class AddAttachmentImageToPlaylists < ActiveRecord::Migration[5.1]
  def self.up
    change_table :playlists do |t|
      t.attachment :image
    end
  end

  def self.down
    remove_attachment :playlists, :image
  end
end
