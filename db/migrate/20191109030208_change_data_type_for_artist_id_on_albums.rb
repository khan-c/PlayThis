class ChangeDataTypeForArtistIdOnAlbums < ActiveRecord::Migration[6.0]
  def change
    change_column :albums, :artist_id, :integer, using: 'artist_id::integer'
  end
end
