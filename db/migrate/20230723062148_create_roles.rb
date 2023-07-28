class CreateRoles < ActiveRecord::Migration[7.0]
  def change
    create_table :roles do |t|
      t.string :display_name
      t.integer :name

      t.timestamps
    end
  end
end
