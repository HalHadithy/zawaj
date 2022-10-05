class GuestSerializer < ActiveModel::Serializer  
  attributes :id, :name, :email, :address, :rsvpd, :attending, :plus_1, :plus_1_attending, :side_of_isle, :party, :party_member, :couple_id, :invitation_id
end
