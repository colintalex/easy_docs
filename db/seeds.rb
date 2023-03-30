# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
Fragment.destroy_all
Document.destroy_all

ActiveRecord::Base.connection.tables.each do |t|
  ActiveRecord::Base.connection.reset_pk_sequence!(t)
end

doc = Document.create(title:'Test Document', note: 'This is for development.')

doc.fragments.create(element: "h1", data: "My Article")
doc.fragments.create(element: "p", data: "Welcome to my article!")
doc.fragments.create(element: "p", data: "In the following we will talk about everything")
