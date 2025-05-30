import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HouseContext from '../contexts/HouseContext';

function HouseNew() {

    const { handleNewHouse } = useContext(HouseContext)
    const [ formData, setFormData ] = useState({
        hid: "",
        address: "",
        score: ""
    })

const navigate = useNavigate()

const onFormChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev, 
            [name]: value
        }))
    }


const onSubmit = (e) => {
    e.preventDefault()
    const newHouse = {
        ...formData
    }
    handleNewHouse(newHouse)
    onCancel()
}

const onCancel = () => {
    navigate("/houses")
    setFormData({
        hid: "",
        address: "",
        score: ""
    })

}

return (
<>
<form onSubmit={onSubmit} >
       <label htmlFor="hid"> 🆔 HOUSE_ID </label>
        <input type="text" name="hid" onChange={onFormChange} value={formData.hid} placeholder="House ID..." />

        <label htmlFor="acc_weight"> 📍 ADDRESS </label>
        <input type="text" name="address" onChange={onFormChange} value={formData.address} placeholder="Address..." />

        <label htmlFor="score"> 🔢 HOUSE_ID_SCORE </label>
        <input type="number" name="score" onChange={onFormChange} value={formData.score} placeholder="Score..." />

        <button type="submit"> Create</button>
        <button type="button" onClick={onCancel}>Cancel</button>
</form>
</>
)}

export default HouseNew
