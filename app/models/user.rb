# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  email           :string           not null
#  avatar_url      :string           default("https://s3-us-west-1.amazonaws.com/playthismusic/images/default_avatar.png")
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
  validates :username, :session_token, :email, presence: true
  validates :username, :email, :session_token, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }
  after_initialize :ensure_session_token

  has_many :playlists,
    class_name: :Playlist,
    foreign_key: :author_id,
    primary_key: :id

  has_many :playlist_follows,
    class_name: :PlaylistFollow,
    primary_key: :id,
    foreign_key: :user_id

  has_many :followed_playlists,
    through: :playlist_follows,
    source: :followed_playlist

  has_many :user_follows,
    class_name: :UserFollow,
    primary_key: :id,
    foreign_key: :user_id

  has_many :followed_users,
    through: :user_follows,
    source: :followed_user

  has_many :user_followed,
    class_name: :UserFollow,
    primary_key: :id,
    foreign_key: :followed_user_id

  has_many :followers,
    through: :user_followed,
    source: :follower

  attr_reader :password

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    user && user.valid_password?(password) ? user : nil
  end

  def self.create_session_token
    SecureRandom::urlsafe_base64
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def valid_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def ensure_session_token
    self.session_token ||= User.create_session_token
  end

  def reset_session_token!
    self.session_token = User.create_session_token
    self.save!
    self.session_token
  end

  def self.top_five_results(query_params)
    param = "%" + query_params + "%"
    User.where('username ILIKE ?', param).order(:username).limit(5)
  end
end
