class UsersController < ApplicationController
  def new
    @user = User.new
    render :new
  end
  
  def create
    user = User.new(user_params)
    if user.save
      session[:user_id] = user.id
      flash[:success] = 'Success'
      redirect_to documents_path
    else
      flash[:warning] = 'Uh oh'
      redirect_to '/register'
    end
  end
  def show
  end

  private

  def user_params
    params.require(:user).permit(:name, :email, :password, :password_confirmation)
  end
end
