import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import PickupCard from "../components/PickupCard"
import PickupContext from "../contexts/PickupContext"

function PickupList() {

    const { pickups, handleDeletePickup } = useContext(PickupContext)

    const navigate = useNavigate()

    const onPickupClick = (obj, btn) => {
        if(btn === "btn-edit") {
            navigate(`/edit/${obj.id}`)
        } else {
           if(btn === "btn-delete") {
            navigate("/pickups")
            handleDeletePickup(obj.id)
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
            <th>DEL</th>
            <th>ID</th>
            <th>PID</th>
            <th>HID</th>
            <th>ACT_CODE</th>
            <th>BAG_COUNT</th>
            <th>TOT_WEIGHT</th>
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