class GuestsController < ApplicationController
    before_action :set_guest, except: [:index, :create, :guests_couple]
    
    # GET /guests
    def index
        @guests = Guest.all
        render json: @guests, status: :ok 
    end
    # GET /guests_couple
    def guests_couple
        token = request.headers["token"]
        co_id = decode_token(token)
        guests = Guest.where(couple_id:co_id)
        render json: guests, status: :ok 
    end

    # I don't think I'll use this
    # GET /guests/:id
    def show
        token = request.headers["token"]
        couple_id = decode_token(token)
        render json: @couple
    end


    # POST /guests
    def create
        # token = request.headers["token"]
        # couple_id = decode_token(token)
        newGuest = Guest.new(guest_params_create)
        if newGuest.save
        render json: newGuest, status: :created
        else
        render json: newGuest.errors, status: :unprocessable_entity
        end
    end


    # PATCH/PUT /guests/:id
    def update
        token = request.headers["token"]
        couple_idp = decode_token(token)
        if @guest.update(guest_params_edit) &&  @guest.couple_id = couple_idp
        render json: @guest, status: :ok
        else
        render json: @guest.errors, status: :unprocessable_entity
        end
    end


    #DELETE /guests/:id
    def destroy
        if @guest
            @guest.destroy
        else 
            render json: @guest.errors, status: :unprocessable_entity
        end 
    end 



  private
    # Use callbacks to share common setup or constraints between actions.
    def set_guest
      @guest = Guest.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def guest_params_edit
      params.require.permit(:address, :rsvpd, :attending, :plus_1_attending, :party_member, :name, :email, :plus_1, :side_of_isle, :party, :invitation_id)
    end

    def guest_params_create
        params.permit(:name, :email, :address, :party, :party_member, :side_of_isle,  :plus_1, :couple_id, :invitation_id)
    end 

end


