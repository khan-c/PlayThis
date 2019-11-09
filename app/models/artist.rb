# == Schema Information
#
# Table name: artists
#
#  id         :integer          not null, primary key
#  name       :string           not null
#  img_url    :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Artist < ApplicationRecord
  validates :name, presence: true

  has_many :albums
  has_many :songs

  def self.top_five_results(query_params)
    param = query_params + "%"
    Artist.where('name ILIKE ?', param).limit(5)
  end
end
