# == Schema Information
#
# Table name: fragments
#
#  id         :bigint           not null, primary key
#  data       :string
#  element    :string
#  meta       :string
#  position   :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Fragment < ApplicationRecord
  belongs_to :document
  acts_as_list scope: :document

  MD_MAPPING = {
    "h1" => "# %{data}",
    "h2" => "## %{data}",
    "h3" => "### %{data}",
    "p" => "%{data}",
    "ol" => "%{data}",
    "ul" => "%{data}",
    "pre" => "```%{meta}\n%{data}\n```",
    "image" => "%{data}"
  }.freeze

  def to_md
    MD_MAPPING[element] % {data: data, meta: meta}
  end

  def render
    MarkdownRenderer.md_to_html(self.to_md)
  end
end
