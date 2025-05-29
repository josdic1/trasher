import { useState, useEffect, useContext } from "react"
import { useNavigate } from "react-router-dom"
import { useParams } from "react-router-dom"
import PickupContext from "../contexts/PickupContext"


function Edit() {
    const { pickups, handleUpdate } = useContext(PickupContext)

    const navigate = useNavigate()

    const [ formData, setFormData ] = useState({
        id: "",
        cid: "",
        activity_code: "",
        bags: "",
        weight: "",
        acc_weight: "",
    })

    const { id } = useParams()

    useEffect(() => {
        const current = pickups.find(p => (
            p.id === id
        ))
        setFormData(prev => ({
            ...prev,
            ...current
        }))
    },[id])

  

    const onFormChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev, 
            [name]: value
        }))
    }

    const onUpdate = (e) => {
        e.preventDefault()
        handleUpdate()
    }

    const onClear = () => {
        setFormData(prev =>  ({
            ...prev,
        activity_code: "",
        bags: "",
        weight: "",
        acc_weight: ""
        })
    )}

    const onCancel = () => {
        navigate("/pickups")
        setFormData({
        id: "",
        cid: "",
        activity_code: "",
        bags: "",
        weight: "",
        acc_weight: ""
        })
    }

   

return (
    <>
    <form onSubmit={onUpdate}> 
        <label htmlFor="cid"> 🏘 HOUSE_ID </label>
        <input type="text" name="cid" readOnly value={formData.cid} placeholder="House ID..." />

                <label htmlFor="bags"> 🗑 BAG_COUNT </label>
        <input type="number" name="bags" onChange={onFormChange} value={formData.bags} placeholder="Number of Bags..." />

        <label htmlFor="activity_code"> ☢️ ACTIVITY_CODE </label>
        <input type="number" name="activity_code" onChange={onFormChange} value={formData.activity_code} placeholder="Activity code..." />

        <label htmlFor="weight"> ⚖️ TOTAL_WEIGHT </label>
        <input type="number" name="weight" onChange={onFormChange} value={formData.weight} placeholder="Total weight..." />

        <label htmlFor="acc_weight"> 🧮 ACC_WEIGHT </label>
        <input type="number" name="acc_weight" onChange={onFormChange} value={formData.acc_weight} placeholder="Accumulated weight..." />

        <label htmlFor="score"> 🔢 HOUSE_ID_SCORE </label>
        <input type="number" name="score" readOnly value={formData.score} placeholder="PROPS" />

        <button type="submit">Submit</button>
        <button type="button" onClick={onClear}>Clear</button>
        <button type="button" onClick={onCancel}>Cancel</button>
    </form>
    </>
    )}

    export default Edit