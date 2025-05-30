
function HouseCard({ house, onNewPickUpClick, onEditClick, onDeleteClick, onViewHistoryClick }) {

   const onClick = (e) => {
  const { name, id } = e.target;
  if (name === "edit") {
    onEditClick(id);
  } else if (name === "del") {
    onDeleteClick(id);
  } else if (name === "new-pickup") {
    onNewPickUpClick(house);
  } else if (name === "view-history") {
    onViewHistoryClick(id);
  }
};

    return (
        <>
            <tr>
   
                <td>{house.houseId}</td>
                <td>{house.address}</td>
               <td style={{ color: house.score >= 90 ? "green" : house.score < 70 ? "red" : "black" }}>
    {house.score}
</td>
                <td>
                    <button id={house.houseId} name="new-pickup" onClick={onClick}> 🆕 🗑 </button>
                </td>
        
                <td>
                    <button type="button" id={house.houseId} name="edit" onClick={onClick}> edit </button>
                </td>
                      <td>
                    <button type="button" id={house.houseId} name="del" onClick={onClick}> del </button>
                </td>
                                     <td>
                    <button id={house.houseId} name="view-history" onClick={onClick}> 🚛 🗓  </button>
                </td>
            </tr>
        </>
    )
}

export default HouseCard
