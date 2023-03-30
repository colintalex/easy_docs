class DocumentsController < ApplicationController
  before_action :set_document, only: %i[ show edit update destroy markdown]

  def index
    @documents = Document.all
  end

  def create
    @document = Document.new(document_params)
    @document.save
    
    redirect_to(document_path(@document))
  end

  def destroy
    @document.destroy
    redirect_to(documents_path) 
  end

  def show;end
  private
  
  def set_document
    @document = Document.find(params[:id])
  end

  def document_params
    params.require(:document).permit(:title, :note)
  end
end
