class CreateUserFollows < ActiveRecord::Migration[5.1]
  def change
    create_table :user_follows do |t|
      t.integer :user_id, null: false
      t.integer :followed_user_id, null: false

      t.timestamps
    end

    add_index :user_follows, :user_id
    add_index :user_follows, :followed_user_id
    add_index :user_follows, [:user_id, :followed_user_id], unique: true
  end
end
