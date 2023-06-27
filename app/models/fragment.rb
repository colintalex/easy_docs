# == Schema Information
#
# Table name: fragments
#
#  id          :bigint           not null, primary key
#  data        :string           default(""), not null
#  element     :string           default("p"), not null
#  meta        :string           default("")
#  position    :integer
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  document_id :bigint
#
# Indexes
#
#  index_fragments_on_document_id  (document_id)
#
class Fragment < ApplicationRecord
  belongs_to :document
  has_many_attached :images, dependent: :purge_later

  acts_as_list scope: :document

  MD_MAPPING = {
    "h1" => "# %{data}",
    "h2" => "## %{data}",
    "h3" => "### %{data}",
    "p" => "%{data}",
    "ol" => "%{data}",
    "ul" => "%{data}",
    "pre" => "```%{meta}\n%{data}\n```",
    "image" => "![%{meta}](%{data})"
  }.freeze

  def to_md
    if element == 'image'
      x = Rails.application.routes.url_helpers.rails_blob_path(images.blobs.first, only_path: true)
      MD_MAPPING[element] % {data: x, meta: 'Test'}
    else
      MD_MAPPING[element] % {data: data, meta: meta}
    end
  end

  def render
    MarkdownRenderer.md_to_html(self.to_md)
  end
end
