import { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import HouseContext from '../contexts/HouseContext';

function HouseEdit() {
  const { houses, handleUpdateHouse } = useContext(HouseContext);

  const [formData, setFormData] = useState({
    houseId: "",
    address: "",
    score: ""
  });

  const { id } = useParams(); // This is actually the houseId from the URL
  const navigate = useNavigate();

  useEffect(() => {
    const match = houses.find(h => h.houseId === id);
    if (match) {
      setFormData(prev => ({
        ...prev,
        ...match
      }));
    }
  }, [id, houses]);

  const onFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const updatedHouse = { ...formData };
    handleUpdateHouse(updatedHouse);
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
          placeholder="House ID..."
        />

        <label htmlFor="address"> 📍 ADDRESS </label>
        <input
          type="text"
          name="address"
          onChange={onFormChange}
          value={formData.address}
          placeholder="Address..."
        />

        <label htmlFor="score"> 🔢 SCORE </label>
        <input
          type="number"
          name="score"
          onChange={onFormChange}
          value={formData.score}
          placeholder="Score..."
        />

        <button type="submit">Update</button>
        <button type="button" onClick={onCancel}>Cancel</button>
      </form>
    </>
  );
}

export default HouseEdit;
