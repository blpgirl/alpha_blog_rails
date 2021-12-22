class ApplicationController < ActionController::Base
  # defined as helper_method so that it is available in the views as well as controllers
  helper_method :current_user, :logged_in?

  def current_user
    @current_user ||= User.find(session[:user_id]) if session[:user_id]
  end

  def logged_in?
    # !! This is to do memoization (saving a method's return value so it does not have to be recomputed each time)
    !!current_user
  end

  def require_user
    if !logged_in?
      flash[:alert] = "You must be logged in to perform that action"
      redirect_to login_path
    end
  end

end
