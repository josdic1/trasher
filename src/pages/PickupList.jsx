import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import PickupCard from "../components/PickupCard"
import PickupContext from "../contexts/PickupContext"

function PickupList() {

    const { pickups, setSelectedPickup, deletePickup } = useContext(PickupContext)

    const navigate = useNavigate()

    const onPickupClick = (obj, btn) => {
        if(btn === "btn-edit") {
            setSelectedPickup(obj)
            navigate(`/edit/${obj.id}`)
        } else {
           if(btn === "btn-delete") {
            navigate("/pickups")
            deletePickup(obj.id)
           }
        }
    }

    const pickupData = pickups.map(pickup => (
        <PickupCard 
            key={pickup.id} 
            pickup={pickup}
            onPickupClick={onPickupClick}
            
        />
    ))

return (
    <>
    <table>
        <thead>
            <tr>
            <th>EDIT</th>
            <th>DELETE</th>
            <th>PICKUP_ID</th>
            <th>HOUSE_ID</th>
            <th>ACTIVITY_CODE</th>
            <th>BAG_COUNT</th>
            <th>TOTAL_WEIGHT</th>
            <th>ACC_WEIGHT</th>
            <th>TIMESTAMP</th>
            </tr>
        </thead>
        <tbody>
            {pickupData}
        </tbody>
    </table>
    </>
    )}

    export default PickupList