import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import PickupCard from "../components/PickupCard"
import PickupContext from "../contexts/PickupContext"

function PickupList() {

    const { pickups, handleDeletePickup } = useContext(PickupContext)

    const navigate = useNavigate()

    const onPickupClick = (obj, btn) => {
  if (btn === "btn-edit") {
    navigate(`/pickup-edit/${obj.pickupId}`); // ✅ use static ID
  } else if (btn === "btn-delete") {
    handleDeletePickup(obj.pickupId); // ✅ also static
    navigate("/pickups");
  }
};

    const pickupData = pickups.map(pickup => (
        <PickupCard 
            key={pickup.pickupId} 
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
            <th>houseId</th>
            <th>ACT</th>
            <th>BAGS</th>
            <th>TOT</th>
            <th>ACC</th>
            <th>TIME</th>
            <th>pickupId</th>
      
            </tr>
        </thead>
        <tbody>
            {pickupData}
        </tbody>
    </table>
    </>
    )}

    export default PickupList