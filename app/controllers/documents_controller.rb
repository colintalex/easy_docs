class DocumentsController < ApplicationController
  def index
    @documents = Document.where(access_level: current_access_level_names)
    render :index
  end

  def show
    @document = Document.find_by(id: params[:id])
    render :show
  end
end
