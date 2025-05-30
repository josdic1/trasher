
function HouseCard({ house, onNewPickUpClick, onEditClick, onDeleteClick, onViewHistoryClick }) {

    const onClick = (e) => {
        const { name, id } = e.target
         if(name === "edit") {
            onEditClick(id)
        } else {
           if(name === "del") {
            onDeleteClick(id)
        } else {
            if(name === "new-pickup") {
                onNewPickUpClick(house)
            
        } else {
                 if(name === "new-pickup") {
                onViewHistoryClick(id)
            }
        }
        }
    }}

    return (
        <>
            <tr>
                <td>{house.id}</td>
                <td>{house.hid}</td>
                <td>{house.address}</td>
                <td>{house.score}</td>
                <td>
                    <button id={house.id} name="new-pickup" onClick={onClick}> 🆕 🗑 </button>
                </td>
        
                <td>
                    <button type="button" id={house.id} name="edit" onClick={onClick}> edit </button>
                </td>
                      <td>
                    <button type="button" id={house.id} name="del" onClick={onClick}> del </button>
                </td>
                                     <td>
                    <button id={house.id} name="view-history" onClick={onClick}> 🚛 🗓  </button>
                </td>
            </tr>
        </>
    )
}

export default HouseCard
