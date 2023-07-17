class FragmentsController < ApplicationController
  before_action :set_document
  before_action :set_fragment, only: [:update, :destroy]

  def update
    @fragment.update(fragment_params.except(:images))

    render @fragment
  end

  def create
    @fragment = @document.fragments.build(fragment_params.except(:dom_id))
    @fragment.save
    @dom_id = fragment_params[:dom_id]

    redirect_to(document_path(@document, anchor: @dom_id))
  end

  def destroy
    @fragment.destroy
    render turbo_stream: turbo_stream.remove(@fragment)
  end

  private

  def set_fragment
    @fragment = @document.fragments.find(params[:id])
  end

  def set_document
    @document = Document.find(params[:document_id])
  end

  def fragment_params
    params.require(:fragment).permit(:element, :data, :meta, :position, :dom_id, :classes, :parent_classes, images: [])
  end
end