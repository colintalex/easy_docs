# == Schema Information
#
# Table name: fragments
#
#  id             :bigint           not null, primary key
#  classes        :string           default(""), not null
#  data           :string           default(""), not null
#  element        :string           default("p"), not null
#  meta           :string           default("")
#  parent_classes :string           default(""), not null
#  position       :integer
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#  document_id    :bigint
#
# Indexes
#
#  index_fragments_on_document_id  (document_id)
#
class Fragment < ApplicationRecord
  include ActionView::Helpers

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
    "image" => "![%{meta}](%{data} '%{classes}_%{parent_classes}')"
  }.freeze

  def to_md
    if element == 'image'
      path = Rails.application.routes.url_helpers.rails_blob_path(images.first.blob, only_path: true)
      MD_MAPPING[element] % {data: path, meta: meta, classes: classes, parent_classes: parent_classes}
    else
      MD_MAPPING[element] % {data: data, meta: meta}
    end
  end

  def render
    MarkdownRenderer.md_to_html(self.to_md)
  end
end
