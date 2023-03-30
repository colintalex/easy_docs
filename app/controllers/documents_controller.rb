class DocumentsController < ApplicationController
  before_action :set_document, only: %i[ show edit update destroy markdown]

  def index
    @documents = Document.all
  end

  def create
    @document = Document.new(document_params)
    @document.save

    render turbo_stream: turbo_stream.prepend(
        "documents",
        partial: "documents/document",
        locals: { document: @document }
      )
  end

  def destroy
    @document.destroy
    render turbo_stream: turbo_stream.remove("document_#{@document.id}")
  end

  def show
    @document
  end
  private
  
  def set_document
    @document = Document.find(params[:id])
  end

  def document_params
    params.require(:document).permit(:title, :note)
  end
end
