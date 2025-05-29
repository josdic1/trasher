import { useState, useEffect } from "react"
import PickupContext from "../contexts/PickupContext"
import { stringify } from "uuid"

function PickupProvider({ children }) {

    const [ pickups, setPickups ] = useState([])
    const [ selectedPickup, setSelectedPickup] = useState({
        id: "",
        cid: "",
        activity_code: "",
        bags: "",
        weight: "",
        acc_weight: "",
        timestamp: ""
    })


    useEffect(() => {
        fetchPickups()
    },[])


    async function fetchPickups() {
        try {
            const r = await fetch(`http://localhost:3000/pickups`)
            if(!r.ok){
                throw new Error("💥 Error");
            }
            const data = await r.json()
            setPickups(data)
        }catch (error) {console.error("❌ Caught error:", error);}
    }

    async function handleNewPickup(obj) {
        try{
            const r = await fetch(`http://localhost:3000/pickups`, {
               method: "POST",
               headers: {
               'Content-Type': 'application/json'
               }, 
               body: JSON.stringify()
            })
            if(!r.ok) {
                throw new Error("💥 Error");
            }
            const data = await r.json()
            const updated = [...pickups, data]
            console.log(updated)
            setPickups(updated)
            setSelectedPickup({})
        }catch (error) {console.error("❌ Caught error:", error);}
    }


    async function deletePickup(pid) {
        try{
            const r = await fetch(`http://localhost:3000/pickups/${pid}`, {
                method: "DELETE"
            })
            if(!r.ok) {
                throw new Error("💥 Error");
            }
            const data = await r.json()
            const deleted = pickups.filter(p => p.id !== data.id)
            setPickups(deleted)
        }catch (error) {console.error("❌ Caught error:", error);}
    }

return (
<>
<PickupContext.Provider
    value={{ pickups, selectedPickup, setSelectedPickup, handleNewPickup, deletePickup }}
>
   { children } 
</PickupContext.Provider>
</>
)}

export default PickupProvider
