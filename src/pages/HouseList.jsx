import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import HouseCard from "../components/HouseCard"
import HouseContext from "../contexts/HouseContext"


function HouseList() {


    const { houses, setSelectedHouse, handleDeleteHouse } = useContext(HouseContext)


    const navigate = useNavigate()
        const onEditClick = (id) => {
        navigate(`/house-edit/${id}`)
    }

    const onDeleteClick = (id) => {
        handleDeleteHouse(id)
        navigate("/houses")
    }



    const onNewPickUpClick = (house) => {
        setSelectedHouse({
            houseId: house.houseId,
            address: house.address,
            score: house.score
        })
        navigate(`/pickup-new`)
    }

    const onViewHistoryClick = (id) => {
        console.log("onViewHistoryClick: ",id)
        navigate("/pickups")
    }


    const houseData = houses.map(house => (
        <HouseCard 
            key={house.houseId} 
            house={house} 
            onNewPickUpClick={onNewPickUpClick}
            onEditClick={onEditClick}
            onDeleteClick={onDeleteClick}
            onViewHistoryClick={onViewHistoryClick}
        />
    ))



return (
    <>
    <table>
        <thead>
            <tr>
            <th>HID</th>
            <th>Address</th>
            <th>Score</th>
            <th>NEW_PICK</th>
            <th>EDIT</th>
              <th>DEL</th>
            <th>VIEW_HIST</th>
            </tr>
        </thead>
        <tbody>
            {houseData}
        </tbody>
    </table>
    </>
    )}

    export default HouseList

