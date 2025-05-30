import { useState, useEffect, useContext } from "react"
import { useNavigate } from "react-router-dom"
import PickupContext from "../contexts/PickupContext"
import HouseContext from "../contexts/HouseContext"
import getTimestamp from "../utils/getTimestamp"


function New() {
    const { selectedHouse, setSelectedHouse } = useContext(HouseContext)
    const { selectedPickup, handleNewPickup } = useContext(PickupContext)


    const [ formData, setFormData ] = useState({
        hid: "",
        pid: "",
        activity_code: "",
        bags: "",
        weight: "",
        acc_weight: "",
        score: ""
    })

useEffect(() => {
  if (!selectedHouse || !selectedHouse.id) return

  setFormData(prev => ({
    ...prev,
    hid: selectedHouse.hid,
    score: selectedHouse.score,
  }))
}, [!selectedHouse])

const navigate = useNavigate()
   

    const onFormChange = (e) => {
        const { name, value } = e.target
            setFormData(prev => ({
                ...prev,
               [name]: value
            }))
    }

    let pickupString = ""
    const onSubmit = (e) => {
        e.preventDefault()
        const stamp = getTimestamp()
        pickupString = `${selectedHouse.hid}-1${stamp}`
        const newPickup = {
            ...formData,
            pid: pickupString,
            activity_code: 1,
            timestamp: stamp
        }
        handleNewPickup(newPickup)
        onCancel()
    }   



    const onCancel = () => {
        setSelectedHouse(null)
        navigate("/pickups")
        setFormData({
        hid: "",
        pid: "",
        activity_code: "",
        bags: "",
        weight: "",
        acc_weight: "",
        score: "" 
        })
    }

return (
    <>
    <form onSubmit={onSubmit}> 
        <label htmlFor="hid"> 🏘 HOUSE_ID </label>
        <input type="text" name="hid" readOnly value={formData.hid} placeholder="House ID..." />

        <label htmlFor="activity_code"> ☢️ ACTIVITY_CODE  </label>
        <input type="number" name="activity_code" onChange={onFormChange} value={formData.activity_code} placeholder="Activity code..." />

        <label htmlFor="bags"> 🗑 BAG_COUNT </label>
        <input type="number" name="bags" onChange={onFormChange} value={formData.bags} placeholder="Number of Bags..." />

        <label htmlFor="weight"> ⚖️ TOTAL_WEIGHT </label>
        <input type="number" name="weight" onChange={onFormChange} value={formData.weight} placeholder="Total weight..." />

          <label htmlFor="acc_weight"> 🧮 ACC_WEIGHT </label>
        <input type="number" name="acc_weight" onChange={onFormChange} value={formData.acc_weight} placeholder="Acc weight..." />

        <label htmlFor="score"> 🔢 HOUSE_ID_SCORE </label>
        <input type="number" name="score" readOnly value={formData.score} placeholder="PROPS" />

        <button type="submit">Submit</button>
        <button type="button" onClick={onCancel}>Cancel</button>
    </form>
    </>
    )}

    export default New

