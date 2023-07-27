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
ipsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
image_files = Dir.glob(File.join(Rails.root, 'db', 'seed_images', '*'))

doc = Document.create(title:'Test Document', note: 'This is for development.')
doc.fragments.create(element: "h1", data: "My Article")
doc.fragments.create(element: "p", data: ipsum)
doc.fragments.create(element: "image", data: "", classes: 'rounded-24', parent_classes: 'text-center').images.attach(io: File.open(image_files[0]), filename: "seed_img1")
doc.fragments.create(element: "p", data: ipsum)
doc.fragments.create(element: "h1", data: "Who")
doc.fragments.create(element: "p", data: ipsum)
doc.fragments.create(element: "image", data: "", classes: 'rounded-24', parent_classes: 'text-center').images.attach(io: File.open(image_files[1]), filename: "seed_img2")
doc.fragments.create(element: "p", data: ipsum)
doc.fragments.create(element: "h1", data: "What")
doc.fragments.create(element: "p", data: ipsum)
doc.fragments.create(element: "image", data: "", classes: 'rounded-24', parent_classes: 'text-center').images.attach(io: File.open(image_files[2]), filename: "seed_img3")
doc.fragments.create(element: "p", data: ipsum)
doc.fragments.create(element: "h1", data: "Where")
doc.fragments.create(element: "p", data: ipsum)
doc.fragments.create(element: "p", data: ipsum)
doc.fragments.create(element: "h1", data: "why")
doc.fragments.create(element: "p", data: ipsum)
doc.fragments.create(element: "p", data: ipsum)

doc2 = Document.create(title:'Squirrels', note: 'This is for development.')
doc2.fragments.create(element: "h1", data: "My Article")
doc2.fragments.create(element: "p", data: ipsum)
doc2.fragments.create(element: "p", data: ipsum)
