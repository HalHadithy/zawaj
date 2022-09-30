class CreateCouples < ActiveRecord::Migration[7.0]
  def change
    create_table :couples do |t|
      t.string :email 
      t.string :username
      t.string :password
      t.string :nearlywed_1_first
      t.string :nearlywed_1_last
      t.string :nearlywed_2_first
      t.string :nearlywed_2_last
      t.text :our_story
      t.string :venue_name
      t.string :venue_location
      t.boolean :invitation
      t.string :invitation_style
      t.boolean :website
      t.string :website_style
      t.timestamps
    end
  end
end

