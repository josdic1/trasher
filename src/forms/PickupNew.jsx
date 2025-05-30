import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import PickupContext from "../contexts/PickupContext";
import HouseContext from "../contexts/HouseContext";
import getTimestamp from "../utils/getTimestamp";
// import getNextAccWeight from "../utils/getNextAccWeight";

function PickupNew() {
  const { selectedHouse, setSelectedHouse } = useContext(HouseContext);
  const { handleNewPickup } = useContext(PickupContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    houseId: "",
    pickupId: "",
    activity_code: "",
    bags: "",
    weight: "",
    acc_weight: "",
    score: ""
  });

  useEffect(() => {
    if (!selectedHouse || !selectedHouse.houseId) return;

    setFormData(prev => ({
      ...prev,
      houseId: selectedHouse.houseId,
      score: selectedHouse.score
    }));
  }, [selectedHouse]);

  const onFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const stamp = getTimestamp();
    const pickupString = `${selectedHouse.houseId}-1${stamp}`;

    const newPickup = {
      ...formData,
      weight: Number(formData.weight),
      bags: Number(formData.bags),
      pickupId: pickupString,
      activity_code: 1,
      timestamp: stamp
    };

    handleNewPickup(newPickup);
    onCancel();
  };

  const onCancel = () => {
    setSelectedHouse(null);
    navigate("/pickups");
    setFormData({
      houseId: "",
      pickupId: "",
      activity_code: "",
      bags: "",
      weight: "",
      acc_weight: "",
      score: ""
    });
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <label htmlFor="houseId"> 🏘 HOUSE_ID </label>
        <input type="text" name="houseId" readOnly value={formData.houseId} />

        <label htmlFor="activity_code"> ☢️ ACTIVITY_CODE </label>
        <input type="number" name="activity_code" onChange={onFormChange} value={formData.activity_code} />

        <label htmlFor="bags"> 🗑 BAG_COUNT </label>
        <input type="number" name="bags" onChange={onFormChange} value={formData.bags} />

        <label htmlFor="weight"> ⚖️ TOTAL_WEIGHT </label>
        <input type="number" name="weight" onChange={onFormChange} value={formData.weight} />

        <label htmlFor="acc_weight"> 🧮 ACC_WEIGHT </label>
        <input type="number" name="acc_weight" onChange={onFormChange} value={formData.acc_weight} />

        <label htmlFor="score"> 🔢 SCORE </label>
        <input type="number" name="score" readOnly value={formData.score} />

        <button type="submit">Submit</button>
        <button type="button" onClick={onCancel}>Cancel</button>
      </form>
    </>
  );
}

export default PickupNew;
