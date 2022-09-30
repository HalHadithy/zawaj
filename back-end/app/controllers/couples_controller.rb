class CouplesController < ApplicationController
  before_action :set_couple, except: [:index, :create]

  
  # GET /couples
  def index
    @couples = Couple.all
    render json: @couples, status: :ok 
  end

  # GET /couples/:id
  def show
    render json: @couple
  end

  # POST /couples
  def create
    newCouple = Couple.new(couple_params_create)
    if newCouple.save
      render json: newCouple, status: :created
    else
      render json: newCouple.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /couples/:id
  def update
    if @couple.update(couple_params_edit)
      render json: @couple, status: :ok
    else
      render json: @couple.errors, status: :unprocessable_entity
    end
  end

  def login
    couple = Couple.find_by!(username: params[:username])#.try(:authenticate, params[:password])
    if couple
      # token = generate_token(couple.id)
      render json: couple
    # else
    #   render json: {error: "Incorrect Password"}
    end
  end

  def current_couple
    # gets your current couple info based off of your token
    # token = request.headers["token"]
    # decode the token
    # couple_id = decode_token(token)
        # we defined decode and generate in application_controller
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
        render json: { errors: @couple.errors.full_messages}, status: 422
    end 
  end


  private
    # Use callbacks to share common setup or constraints between actions.
    def set_couple
      @couple = Couple.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def couple_params_edit
      params.require(:couple).permit(:email, :username, :nearlywed_1_first, :nearlywed_1_last, :nearlywed_2_first, :nearlywed_2_last, :our_story, :venue_name, :venue_location, :invitation, :invitation_style, :website, :website_style)
    end

    def couple_params_create
      params.require(:couple, :email, :username, :password).permit(:nearlywed_1_first, :nearlywed_1_last, :nearlywed_2_first, :nearlywed_2_last)
    end

    def photo_params
      params.require(:couple).permit(:photo)
    end
    
end
