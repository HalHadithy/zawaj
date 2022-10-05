class CouplesController < ApplicationController
  before_action :set_couple, except: [:index, :show, :create, :login]

  # GET /couples
  def index
    @couples = Couple.all
    render json: @couples, status: :ok 
  end


  # GET /couples/:id
  def show
    couple = Couple.find(params[:id])
    render json: couple
  end


  # POST /couples
  def create
    newCouple = Couple.new(couple_params_create)
    if newCouple.save
      coupleLI = Couple.find_by!(username: params[:username]).try(:authenticate, params[:password])
      token = generate_token(coupleLI.id)
      render json: { couple: coupleLI, token: token }    
    else
      render json: newCouple.errors, status: :unprocessable_entity
    end

  end


  # PATCH/PUT /couples_edit
  def couples_edit
    if @couple.update(couple_params_edit)
      render json: @couple, status: :ok
    else
      render json: @couple.errors, status: :unprocessable_entity
    end
  end


  def login
    coupleLI = Couple.find_by!(username: params[:username]).try(:authenticate, params[:password])
    if coupleLI
      token = generate_token(coupleLI.id)
      render json: { couple: coupleLI, token: token }
    else
      render json: {error: "Incorrect Password or Username"}, status: 401
    end
  end

  def current_couple
    if @couple 
      render json: @couple
    else
      render json: {error: "incorrect token"}
    end
  end


  # PATCH /change_photo/:id
  def change_photo
    if @couple.update(photo_params)
        render json: @couple, status: :ok
    else
        render json: { errors: couple.errors.full_messages}, status: 422
    end 
  end


  private
    # Use callbacks to share common setup or constraints between actions.
    def set_couple
      token = request.headers["token"]
      couple_id = decode_token(token)
      @couple = Couple.find(couple_id)
    end

    # Only allow a list of trusted parameters through.
    def couple_params_edit
      params.require(:couple).permit(:email, :username, :nearlywed_1_first, :nearlywed_1_last, :nearlywed_2_first, :nearlywed_2_last, :our_story, :venue_name, :venue_location, :invitation, :invitation_style, :website, :website_style)
    end

    def couple_params_create
      # params.require(:email, :username, :password).permit(:nearlywed_1_first, :nearlywed_1_last, :nearlywed_2_first, :nearlywed_2_last)
      params.permit(:email, :username, :password, :nearlywed_1_first, :nearlywed_1_last, :nearlywed_2_first, :nearlywed_2_last)

    end

    def photo_params
      params.permit(:photo)
    end
    
end
