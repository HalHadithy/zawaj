class InvitationsController < ApplicationController
    before_action :set_invitation, except: [:index, :create]
    
    # GET /invitations
    def index
            @invitations = Invitation.all
            render json: @invitations, status: :ok 
    end


    # GET /invitations/:id
    def show
        render json: @invitations
    end

    # GET /find_by_address
    def find_by_address
        invitation = Invitation.find_by(address: params[:address])
        render json: invitation, status: :ok
    end


    # POST /invitations
    def create
        newInvitation = Guest.new(invitation_params_create)
        if newInvitation.save
        render json: newInvitation, status: :created
        else
        render json: newInvitation.errors, status: :unprocessable_entity
        end
    end


    # PATCH/PUT /invitations/:id
    def update
        if @invitation.update(invitation_params_edit)
        render json: @invitation, status: :ok
        else
        render json: @invitation.errors, status: :unprocessable_entity
        end
    end


    #DELETE /invitations/:id
    def destroy
        if @invitation
            @invitation.destroy
        else 
            render json: @invitation.errors, status: :unprocessable_entity
        end 
    end 



  private
    # Use callbacks to share common setup or constraints between actions.
    def set_invitation
      @invitation = Invitation.find(params[:id])
    end

    def invitation_params_edit
        params.require(:invitation).permit(:email, :address)
      end

    def invitation_params_create
        params.require(:invitation, :email).permit(:address)
    end
 
end
