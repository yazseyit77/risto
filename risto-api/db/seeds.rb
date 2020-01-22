# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


# require 'faker'
# require 'populator'


# Restaurant.populate(10) do |u|
#     u.name               = Faker::Restaurant.name
#     u.address           = Faker::Address.full_address
#     u.hours              = Faker::Time.between(from: Time.now - 1, to: Time.now, format: :short)
#     u.images             = Faker::Avatar.image(slug: "my-own-slug", size: "100x100", format: "png")
# end

# 20.times do
#     restaurant = Restaurant.new
#     begin
#         name = Faker::Restaurant.name
#         address = Faker::Address.full_address
#         hours = Faker::Time.between(from: Time.now - 1, to: Time.now, format: :short)
#         images = Faker::Avatar.image(slug: "my-own-slug", size: "100x100", format: "png")
#     end while Restaurant.where(name: name).exists?
#     restaurant.name = name
#     restaurant.address = address
#     restaurant.hours = hours
#     restaurant.images = images
#     # set other values #
#     restaurant.save!
# end

# 100.times do

    # restaurant = Restaurant.new
    #     begin
    #         name = Faker::Restaurant.name
    #         address = Faker::Address.full_address
    #         hours = Faker::Time.between(from: Time.now - 1, to: Time.now, format: :short)
    #         website = 'http://www.' + Faker::Internet.domain_name
    #         images = Rails.root.join("app/assets/images/RF_web_about_us_1.jpg").open
    #     end while Restaurant.where(name: name).exists?
    #     restaurant.name = name
    #     restaurant.address = address
    #     restaurant.hours = hours
    #     restaurant.website = website
    #     restaurant.images = images
    #     # set other values #
    #     restaurant.save!

# end