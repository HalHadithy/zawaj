class CreateInvitations < ActiveRecord::Migration[7.0]
  def change
    create_table :invitations do |t|
      t.string :email
      t.string :address
      t.timestamps
    end
  end
end
