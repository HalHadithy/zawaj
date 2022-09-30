class Couple < ApplicationRecord
    #TABLE RELATIONSHIPS
    has_many :guests
    has_many :invitations, through: :guests
    has_one_attached :photo


    # AUTHENTICATIONS
    # has_secure_password


    #VALIDATIONS
    validates :email, :username, :password, presence: true

    validates :username, uniqueness: true
    validates :username, length: {minimum: 5, message: "Your username must be 5 charaacters or more."}

    validates :email, uniqueness: true

    validates :password, length: {minimum: 5,  message: "Your password must be 5 charaacters or more."}
    validates :password, length: {minimum: 5,  message: "Your password must be 5 charaacters or more."}

    # validate :acceptable_photo

    # def acceptable_photo
    #     return unless main_photo.attached?
    # end 



end
