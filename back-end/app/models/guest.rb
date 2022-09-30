class Guest < ApplicationRecord
    #TABLE RELATIONSHIPS
    belongs_to :couple
    belongs_to :invitation

    #VALIDATIONS
        # a person can only be listed once as a guest for the same couple
    validates :name, uniqueness: {scope: :couple_id, message: "You have already added this person to your guest list."}
end
