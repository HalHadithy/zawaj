class Couple < ApplicationRecord
    
    #TABLE RELATIONSHIPS
    has_many :guests
    has_many :invitations, through: :guests
    has_one_attached :photo


    # AUTHENTICATIONS
    has_secure_password

    #VALIDATIONS
    validates :email, :username, :password_digest, presence: true

    validates :username, uniqueness: true
    validates :username, length: {minimum: 5, message: "Your username must be 5 charaacters or more."}

    validates :email, uniqueness: true
    # if there is time I will do email validations

        # password_requirements = /\A 
        #     (?=.{6})
        #     # (?=.\d)
        #     # (?=.*[a-z])
        #     # (?=.*[A-Z])
        #     # (?=.*[[:^alnum]])
        # /x
    validates :password_digest, length: {minimum: 5,  message: "Your password must be 5 charaacters or more."}
    # validates :password_digest, format: password_requirements

    # validate :acceptable_photo

    # def acceptable_photo
    #     return unless main_photo.attached?
    # end 

   
    


    # password_requirements
         # this is a RegExp (Regular expression) it's a combination of special character operators (symbols that control a search).
        #  you can use them to construct search requirements
        # https://medium.com/@Timothy_Fell/how-to-set-password-requirements-in-rails-d9081926923b 
            # (?=.{6})  #at least 6 characters long
            # (?=.\d)  #at least one number
            # (?=.*[a-z]) #at least one lowercase letter
            # (?=.*[A-Z]) #at least one uppercase letter
            # (?=.*[[:^alnum]]) #at least one symbol
                    # ?=            :look from the start of the password
                    # .             :no characters before it
                    # {6,}          :minimum of at least 8 characters
                    # .*            :can start with, or have something behind it
                    # \d            :looking for a number
                    # [a-z]         :looking for lowercase letter
                    # [A-Z]         :looking for uppercase letter
                    # [[:^alnum]]   :looking for symbol


end
