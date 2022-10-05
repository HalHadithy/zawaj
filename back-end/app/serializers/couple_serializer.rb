class CoupleSerializer < ActiveModel::Serializer
  attributes :id, :email, :username, :password_digest, :nearlywed_1_first, :nearlywed_1_last, :nearlywed_2_first, :nearlywed_2_last, :our_story, :venue_name, :venue_location, :invitation, :invitation_style, :website, :website_style, :photo_url

  def photo_url
    if object.photo.attached?
      Rails.application.routes.url_helpers.rails_blob_path(object.photo, host: "local")
    end
  end

end

