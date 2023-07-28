# == Schema Information
#
# Table name: roles
#
#  id           :bigint           not null, primary key
#  display_name :string
#  name         :integer
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#
class Role < ApplicationRecord
  enum name: { public_user: 1, tier1: 10, tier2: 20, admin: 30 }
end
