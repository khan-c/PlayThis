class CreateAlbums < ActiveRecord::Migration[5.1]
  def change
    create_table :albums do |t|
      t.string :title, null: false
      t.string :img_url
      t.string :artist_id, null: false

      t.timestamps
    end

    add_index :albums, [:artist_id, :id], unique: true
  end
end
