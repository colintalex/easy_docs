class HomeController < ApplicationController
  def index
    @fragments = Fragment.all.order(position: :asc)
  end
end
