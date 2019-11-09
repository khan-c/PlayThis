require 'faker'

FactoryBot.define do
  factory :user do
    username { Faker::Internet.username }
    password { Faker::Internet.password }
    email { Faker::Internet.email }
  end
end
