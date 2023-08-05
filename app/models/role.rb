# == Schema Information
#
# Table name: roles
#
#  id           :bigint           not null, primary key
#  display_name :string
#  tier         :integer
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#
class Role < ApplicationRecord
  has_many :users
  enum tier: { public_user: 1, tier1: 10, tier2: 20, admin: 30 }
end
