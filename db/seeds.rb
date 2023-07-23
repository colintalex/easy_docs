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

Role.create(name: :public_user, display_name: 'public_user')
Role.create(name: :tier1, display_name: 'tier1')
Role.create(name: :tier2, display_name: 'tier2')
admin = Role.create(name: :admin, display_name: 'admin')

User.create(name: 'Colin', email: 'colintalex@gmail.com', password: '123', password_confirmation: '123', role_id: admin.id)

doc = Document.create(title:'Test Document', note: 'This is for development.')
doc2 = Document.create(title:'Squirrels', note: 'This is for development.')

doc.fragments.create(element: "h1", data: "My Article")
doc.fragments.create(element: "p", data: "Welcome to my article!")
doc.fragments.create(element: "p", data: "In the following we will talk about everything")

doc2.fragments.create(element: "h1", data: "My Article")
doc2.fragments.create(element: "p", data: "Welcome to my article!")
doc2.fragments.create(element: "p", data: "In the following we will talk about everything")
