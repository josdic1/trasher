

function PickupCard({ pickup, onPickupClick }) {

const onClick = (e) => {
    const { id } = e.target
        onPickupClick(pickup, id)
}

return (
<>
    <tr>
        
        <td>
            <button 
                id="btn-edit" 
                type="button"
                onClick={onClick}
                > edit </button>
        </td>
             <td>
            <button 
                id="btn-delete" 
                type="button"
                onClick={onClick}
                > delete </button>
        </td>
    
        <td>{pickup.hid}</td>
        <td>{pickup.activity_code}</td>
        <td>{pickup.bags}</td>
        <td>{pickup.weight}</td> 
        <td>{pickup.acc_weight}</td>
        <td>{pickup.timestamp}</td>
        <td>{pickup.pid}</td>
          <td>{pickup.id}</td>
    </tr>
</>
)}

export default PickupCard

