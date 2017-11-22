# == Schema Information
#
# Table name: playlists
#
#  id         :integer          not null, primary key
#  title      :string           not null
#  author_id  :integer          not null
#  img_url    :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Playlist < ApplicationRecord
  validates :title, presence: true

  belongs_to :author,
    class_name: :User,
    primary_key: :id,
    foreign_key: :author_id
end
