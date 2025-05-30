import { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PickupContext from "../contexts/PickupContext";
import getTimestamp from "../utils/getTimestamp";

function PickupEdit() {
  const { pickups, handleUpdatePickup } = useContext(PickupContext);
  const { pickupId } = useParams(); // This is your static pickup ID from URL
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    id: "",              // internal (dynamic)
    pickupId: "",        // static
    houseId: "",         // static
    activity_code: "",
    bags: "",
    weight: "",
    acc_weight: "",
    score: "",
    timestamp: ""
  });

  useEffect(() => {
    const current = pickups.find(p => p.pickupId === pickupId);
    if (!current) return;
    setFormData(prev => ({
      ...prev,
      ...current
    }));
  }, [pickupId, pickups]);

  const onFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const onUpdate = (e) => {
    e.preventDefault();
    const stamp = getTimestamp();
    const updatedPickup = {
      ...formData,
      activity_code: 3,
      timestamp: formData.timestamp || stamp
    };
    handleUpdatePickup(updatedPickup);
    onCancel();
  };

  const onCancel = () => {
    navigate("/pickups");
    setFormData({
      id: "",
      pickupId: "",
      houseId: "",
      activity_code: "",
      bags: "",
      weight: "",
      acc_weight: "",
      score: "",
      timestamp: ""
    });
  };

  return (
    <>
      <form onSubmit={onUpdate}>
        <label htmlFor="houseId"> 🏘 HOUSE_ID </label>
        <input type="text" name="houseId" readOnly value={formData.houseId} />

        <label htmlFor="pickupId"> 🛻 PICKUP_ID </label>
        <input type="text" name="pickupId" readOnly value={formData.pickupId} />

        <label htmlFor="bags"> 🗑 BAG_COUNT </label>
        <input type="number" name="bags" onChange={onFormChange} value={formData.bags} />

        <label htmlFor="activity_code"> ☢️ ACTIVITY_CODE </label>
        <input type="number" name="activity_code" onChange={onFormChange} value={formData.activity_code} />

        <label htmlFor="weight"> ⚖️ TOTAL_WEIGHT </label>
        <input type="number" name="weight" onChange={onFormChange} value={formData.weight} />

        <label htmlFor="acc_weight"> 🧮 ACC_WEIGHT </label>
        <input type="number" name="acc_weight" onChange={onFormChange} value={formData.acc_weight} />

        <label htmlFor="score"> 🔢 SCORE </label>
        <input type="number" name="score" readOnly value={formData.score} />

        <button type="submit">Update</button>
        <button type="button" onClick={onCancel}>Cancel</button>
      </form>
    </>
  );
}

export default PickupEdit;
