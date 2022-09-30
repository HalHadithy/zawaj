class SessionsController < ApplicationController
    def create
        @couple = Couple.find_by(username: params[:username])

        if @couple&.authenticate(params[:password])
            login!
            render json: {isLoggedIn: true, client: @couple}, status: :created
        else
            render json: {error: "Invalid username or password"}, status: 401
        end
    end

    

end
