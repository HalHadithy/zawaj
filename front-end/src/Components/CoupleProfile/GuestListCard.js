
const GuestListCard= ({guest}) => {
    console.log(guest.name)
    return(
            <tr>
                <td>{guest.name}</td>
                <td>{guest.email}</td>
                <td>{guest.address}</td>
                <td>{guest.plus_1? guest.plus_1_attending : "no +1"}</td>
                <td>{guest.attending? "attending":"not attending"}</td>
            </tr>
    )
  
}

export default GuestListCard;