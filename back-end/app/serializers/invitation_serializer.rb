class InvitationSerializer < ActiveModel::Serializer
  attributes :id
  has_many :couples
  
end
