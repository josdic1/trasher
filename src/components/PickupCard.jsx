function PickupCard({ pickup, onPickupClick }) {
  const handleClick = (e) => {
    const { name } = e.target;
    onPickupClick(pickup, name); // name = "btn-edit" or "btn-delete"
  };

  return (
    <tr>
      <td>
        <button
          name="btn-edit"
          type="button"
          onClick={handleClick}
        >
          edit
        </button>
      </td>
      <td>
        <button
          name="btn-delete"
          type="button"
          onClick={handleClick}
        >
          delete
        </button>
      </td>
      <td>{pickup.houseId}</td>
      <td>{pickup.activity_code}</td>
      <td>{pickup.bags}</td>
      <td>{pickup.weight}</td>
      <td>{pickup.acc_weight}</td>
      <td>{pickup.timestamp}</td>
      <td>{pickup.pickupId}</td>

    </tr>
  );
}

export default PickupCard;
