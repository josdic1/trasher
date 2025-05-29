import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import HouseCard from "../components/HouseCard"
import HouseContext from "../contexts/HouseContext"


function HouseList() {

    const { houses, setSelectedHouse } = useContext(HouseContext)


    const navigate = useNavigate()

    const onNewPickUpClick = (obj) => {
        setSelectedHouse(obj)
        navigate("/new")
    }

    const onViewHistoryClick = (obj) => {
        setSelectedHouse(obj)
        navigate("/pickups")
    }


    const houseData = houses.map(house => (
        <HouseCard 
            key={house.id} 
            house={house} 
            onNewPickUpClick={onNewPickUpClick} 
            onViewHistoryClick={onViewHistoryClick}
        />
    ))



return (
    <>
    <table>
        <thead>
            <tr>
            <th>ID</th>
            <th>Address</th>
            <th>Score</th>
            <th>NEW_PICKUP</th>
            <th>VIEW_</th>
            </tr>
        </thead>
        <tbody>
            {houseData}
        </tbody>
    </table>
    </>
    )}

    export default HouseList

