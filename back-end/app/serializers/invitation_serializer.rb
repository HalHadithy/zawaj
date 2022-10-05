class InvitationSerializer < ActiveModel::Serializer
  attributes :id, :email, :address
  
  has_many :guests, serializer: GuestInvitationSerializer
end
