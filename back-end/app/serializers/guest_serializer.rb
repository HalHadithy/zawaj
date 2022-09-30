class GuestSerializer < ActiveModel::Serializer  
  belongs_to :invitation
end
