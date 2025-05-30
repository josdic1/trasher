import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HouseContext from '../contexts/HouseContext';

function HouseNew() {
  const { handleNewHouse } = useContext(HouseContext);
  const [formData, setFormData] = useState({
    houseId: "",
    address: "",
    score: ""
  });

  const navigate = useNavigate();

  const onFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const newHouse = { ...formData };
    handleNewHouse(newHouse);
    onCancel();
  };

  const onCancel = () => {
    navigate("/houses");
    setFormData({
      houseId: "",
      address: "",
      score: ""
    });
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <label htmlFor="houseId"> 🆔 HOUSE_ID </label>
        <input
          type="text"
          name="houseId"
          onChange={onFormChange}
          value={formData.houseId}
          placeholder="e.g. 2d64"
        />

        <label htmlFor="address"> 📍 ADDRESS </label>
        <input
          type="text"
          name="address"
          onChange={onFormChange}
          value={formData.address}
          placeholder="123 Main St"
        />

        <label htmlFor="score"> 🔢 SCORE </label>
        <input
          type="number"
          name="score"
          onChange={onFormChange}
          value={formData.score}
          placeholder="e.g. 85"
        />

        <button type="submit">Create</button>
        <button type="button" onClick={onCancel}>Cancel</button>
      </form>
    </>
  );
}

export default HouseNew;
