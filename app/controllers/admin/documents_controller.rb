class Admin::DocumentsController < ApplicationController
  before_action :logged_in?
  before_action :set_document, only: %i[ show edit update destroy markdown]

  def index
    @documents = Document.all.order(:access_level)
  end

  def create
    @document = Document.new(document_params)
    @document.save

    render turbo_stream: turbo_stream.after(
        "new-doc",
        partial: "documents/document",
        locals: { document: @document }
      )
  end

  def update
    if @document.update(document_params)
      render turbo_stream: turbo_stream.update(@document)
    end
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
    params.require(:document).permit(:title, :note, :access_level)
  end
end
