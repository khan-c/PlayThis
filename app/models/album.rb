# == Schema Information
#
# Table name: albums
#
#  id         :integer          not null, primary key
#  title      :string           not null
#  img_url    :string
#  artist_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Album < ApplicationRecord
  validates :title, presence: true

  has_many :songs

  belongs_to :artist

  def self.top_five_results(query_params)
    param = query_params + "%"
    Album.where('title ILIKE ?', param).order(:title).limit(5)
  end
end
