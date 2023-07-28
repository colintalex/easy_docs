class SessionsController < ApplicationController
  def new
    render :new
  end

  def create
    user = User.find_by(email: params[:email])
    if user && user.authenticate(params[:password])
      session[:user_id] = user.id
      flash[:success] = 'Successfully Logged In!'
      redirect_to admin_documents_path
    else
      flash[:warning] = 'Invalid Username or Password'
      redirect_to '/login'
    end
    end

  def destroy
    session[:user_id] = nil
    redirect_to root_path, notice: 'Logged out successfully.'
  end
end