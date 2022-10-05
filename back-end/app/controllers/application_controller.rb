class ApplicationController < ActionController::API
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
    # skip_before_action :verify_authenticity_token


    def get_secret_key
        "secretkey"
    end

    def generate_token(couple_id)
        JWT.encode({couple_id:couple_id}, get_secret_key)
    end
  
    def decode_token(token)
        JWT.decode(token, get_secret_key)[0]["couple_id"] 
    end

    private

    def render_not_found_response(exception)
        render json: { error: "#{exception.model} not found" }, status: :not_found
    end

    def render_unprocessable_entity_response(exception)
        render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
    end

end
