class ApplicationController < ActionController::Base
  helper_method :current_user, :current_role
  def current_user
    @current_user ||= User.find_by(id: session[:user_id])
  end

  def current_role
    @current_role ||= current_user&.role || Role.find_by(tier: :public_user)
  end

  def current_access_level_names
    tiers = Role.tiers
    tiers.filter{ |k,v| v <= tiers[current_role.tier] }.keys
  end

  def logged_in?
    unauthorized unless current_user&.role&.admin? && session[:user_id] == current_user.id
  end

  def unauthorized
    @current_user = nil
    reset_session
    redirect_to login_path
  end
end
