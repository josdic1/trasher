
function HouseCard({ house, onNewPickUpClick, onViewHistoryClick }) {

    const onClick = (e) => {
        const { name } = e.target
            name === "new-pickup" ? onNewPickUpClick(house) : onViewHistoryClick(house)
    }

    return (
        <>
            <tr>
                <td>{house.id}</td>
                <td>{house.address}</td>
                <td>{house.score}</td>
                <td>
                    <button id={house.id} name="new-pickup" onClick={onClick}> 🆕 🗑 </button>
                </td>
                              <td>
                    <button id={house.id} name="view-history" onClick={onClick}> 🚛 🗓  </button>
                </td>
            </tr>
        </>
    )
}

export default HouseCard
