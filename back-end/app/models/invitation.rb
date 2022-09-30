class Invitation < ApplicationRecord
    #TABLE RELATIONSHIPS
    has_many :guests
    has_many :couples, through: :guests

    #VALIDATIONS
        # for the same couple, there can't be multiple inviations sent to the same address
    # validates :address, uniqueness: {scope: :couple_id}
end
