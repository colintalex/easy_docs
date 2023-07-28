class DocumentsController < ApplicationController
  def index
    # @documents = Document.where(view_access: 'public')
    @documents = Document.all
    render :index
  end

  def show
    @document = Document.find_by(id: params[:id])
    render :show
  end
end
