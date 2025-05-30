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
        setSelectedHouse(house)
        navigate(`/pickup-new`)
    }

    const onViewHistoryClick = (id) => {
        navigate("/pickups")
    }


    const houseData = houses.map(house => (
        <HouseCard 
            key={house.id} 
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
            <th>ID</th>
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

