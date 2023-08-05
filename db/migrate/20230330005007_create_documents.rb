class CreateDocuments < ActiveRecord::Migration[7.0]
  def change
    create_table :documents do |t|
      t.string :title
      t.string :note
      t.integer :access_level

      t.timestamps
    end
  end
end
