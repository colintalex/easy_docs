# == Schema Information
#
# Table name: documents
#
#  id           :bigint           not null, primary key
#  access_level :integer
#  note         :string
#  title        :string
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#
class Document < ApplicationRecord
  has_many :fragments, -> { order(position: :asc) }

  enum access_level: Role.tiers
end
