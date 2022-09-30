class CreateGuests < ActiveRecord::Migration[7.0]
  def change

    create_table :guests do |t|
      t.string :name
      t.string :email
      t.string :address
      t.boolean :rsvpd
      t.boolean :attending
      t.boolean :plus_1
      t.boolean :plus_1_attending
      t.string :side_of_isle
      t.boolean :party
      t.string :party_member
      t.integer :couple_id
      t.integer :invitation_id
      t.timestamps
    end

  end
end
