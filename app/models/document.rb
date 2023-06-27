# == Schema Information
#
# Table name: documents
#
#  id         :bigint           not null, primary key
#  note       :string
#  title      :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Document < ApplicationRecord
  has_many :fragments, -> { order(position: :asc) }
end
