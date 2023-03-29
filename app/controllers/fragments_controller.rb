class FragmentsController < ApplicationController
  before_action :set_fragment, only: [:save]

  def save
    @fragment.update(data: params[:data])
    render @fragment
  end

  private

  def set_fragment
    @fragment = Fragment.find(params[:id])
  end
end