# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

rj = Couple.create!(email: "Romeo15Years@gmail.com", username: "FairVerona", password: "StarCross3d<3rs", nearlywed_1_first: "Romeo", nearlywed_1_last: "Montague", nearlywed_2_first: "Juliet", nearlywed_2_last: "Capulet", our_story: "We met at a party that Juliet's family threw. It was love at first sight and we decided to get married shortly after. There were a few hiccups along the way but we are confident our love will last us well into our old years.", venue_name: "Basilica di San Zeno Maggiore", venue_location: "Piazza San Zeno, 2, 37123 Verona VR, Italy", invitation: false, invitation_style: '', website: true, website_style: 'flower' )
hc = Couple.create!(email: "wutheringLows@aol.com", username: "BronteSistersForTheFail", password: "StopScreaming123%", nearlywed_1_first: "Heathcliff", nearlywed_1_last: "Whinging", nearlywed_2_first: "Catherine", nearlywed_2_last: "Brat", our_story: "CATHERINE!!!!!!!!!!!!", venue_name: "Wuthering Heights", venue_location: "Somewhere, Yorkshire, England", invitation: false, invitation_style: '', website: true, website_style: 'flower' )
jr = Couple.create!(email: "secondWife@aol.com", username: "SeriouslyWhoHurtTheBronteSisters", password: "SeriouslyCharoltte?2", nearlywed_1_first: "Jane", nearlywed_1_last: "Eyre", nearlywed_2_first: "Edward", nearlywed_2_last: "Rochester", our_story: "The esteemed Mr. Rochester and the very lucky Ms. Jane Eyre are pleased to announce their approaching nuptuals.", venue_name: "Thornfield Hall", venue_location: "Yorkshire UK", invitation: true, invitation_style: 'flower', website: false, website_style: 'flower' )
oh = Couple.create!(email: "PoutyPrince@yahoo.com", username: "DaddyIssues4", password: "Sorry4KillingURdad:(", nearlywed_1_first: "Ophelia", nearlywed_1_last: "River", nearlywed_2_first: "Hamlet", nearlywed_2_last: "Prince", our_story: "Hamlet and Ophelia met at Hamlet's castle when they were both youngsters.", venue_name: "Kronborg Castle", venue_location: "Kronborg 1B, 3000 Helsingør, Denmark", invitation: false, invitation_style: '', website: true, website_style: 'tree' )

i1 = Invitation.create!(email: "manOfGod@gmail.com", address: "Piazza San Zeno, 2, 37123 Verona VR, Italy")
i2 = Invitation.create!(email: "lordC@gmail.com", address: "Via Cappello, 23, 37121 Verona VR, Italy")
i3 = Invitation.create!(email: "lMonty@gmail.com", address: "Vicolo Castelrotto, 2, 37121 Verona VR, Italy")

Guest.create!(name: "Friar Lawrence", email: "manOfGod@gmail.com", address: "Piazza San Zeno, 2, 37123 Verona VR, Italy", rsvpd: true, attending: true, plus_1: false, plus_1_attending: false, side_of_isle: "both", party: true, party_member: "officiant", couple_id: rj.id, invitation_id: i1.id )
Guest.create!(name: "Lady Capulet", email: "", address: "", rsvpd: true, attending: false, plus_1: false, plus_1_attending: false, side_of_isle: "nearlywed_2", party: true, party_member: "mother", couple_id: rj.id, invitation_id: i2.id )
Guest.create!(name: "Lord Capulet", email: "lordC@gmail.com", address: "Via Cappello, 23, 37121 Verona VR, Italy", rsvpd: true, attending: false, plus_1: false, plus_1_attending: false, side_of_isle: "nearlywed_2", party: true, party_member: "father", couple_id: rj.id, invitation_id: i2.id )
Guest.create!(name: "Lady Montague", email: "", address: "", rsvpd: true, attending: false, plus_1: false, plus_1_attending: false, side_of_isle: "nearlywed_1", party: true, party_member: "mother", couple_id: rj.id, invitation_id: i3.id )
Guest.create!(name: "Lord Montague", email: "lMonty@gmail.com", address: "Vicolo Castelrotto, 2, 37121 Verona VR, Italy", rsvpd: true, attending: false, plus_1: false, plus_1_attending: false, side_of_isle: "nearlywed_1", party: true, party_member: "father", couple_id: rj.id, invitation_id: i3.id )


# "username":'romanBoi',
# "password":'LuvCleo@Nile1',
# "email":'romanBoi@aol.com',
# "nearlywed_1_first": 'Mark', 
# "nearlywed_1_last": 'Antony',
# "nearlywed_2_first":'Cleopatra',
# "nearlywed_2_last":'Philopator'