import { useState, useEffect } from "react"
import PickupContext from "../contexts/PickupContext"


function PickupProvider({ children }) {

    const [ pickups, setPickups ] = useState([])



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
               body: JSON.stringify(obj)
            })
            if(!r.ok) {
                throw new Error("💥 Error");
            }
            const data = await r.json()
            const updated = [...pickups, data]
            setPickups(updated)
        }catch (error) {console.error("❌ Caught error:", error);}
    }


    async function handleDeletePickup(pid) {
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
    value={{ pickups, handleNewPickup, handleDeletePickup }}
>
   { children } 
</PickupContext.Provider>
</>
)}

export default PickupProvider
