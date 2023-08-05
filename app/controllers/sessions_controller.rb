class SessionsController < ApplicationController
  def new
    render :new
  end

  def create
    user = User.find_by(email: params[:email])
    if user && user.authenticate(params[:password])
      session[:user_id] = user.id
      flash[:success] = 'Successfully Logged In!'
      redirect_to documents_path
    else
      reset_session
      flash[:warning] = 'Invalid Username or Password'
      redirect_to '/login'
    end
  end

  def destroy
    reset_session
    redirect_to root_path, notice: 'Logged out successfully.'
  end
end