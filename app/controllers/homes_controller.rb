class HomesController < ApplicationController
    def index
        render json: { msg: "Welcome"}, status: :ok
    end
end