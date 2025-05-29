import { useState, useEffect } from "react"
import HouseContext from "../contexts/HouseContext"

function HouseProvider({children}) {
    const [ houses, setHouses ] = useState([])
    const [ selectedHouse, setSelectedHouse ] = useState({
        id: "",
        address: "",
        score: 0
    })

    useEffect(() => {
        fetchHouses()
    },[])

    async function fetchHouses() {
        try {
            const r = await fetch(`http://localhost:3000/houses`)
            if(!r.ok){
                throw new Error("💥 Error");
            }
            const data = await r.json()
            setHouses(data)
        }catch (error) {console.error("❌ Caught error:", error);}
    }

return (
<>
<HouseContext.Provider
value={{ houses, selectedHouse, setSelectedHouse }}
>
    {children}
</HouseContext.Provider>
</>
)}

export default HouseProvider
