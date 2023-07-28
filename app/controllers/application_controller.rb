class ApplicationController < ActionController::Base
  helper_method :current_user
  def current_user
    @current_user ||= User.find_by(id: session[:user_id])
  end

  def logged_in?
    unauthorized unless current_user.present?
  end
  def unauthorized
    redirect_to login_path
  end
end
