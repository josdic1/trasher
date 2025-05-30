import { useNavigate } from "react-router-dom"

function Home() {

const navigate = useNavigate()

return (
<>
<h1>🚛 T R A S H 🚛 </h1>
<button type="button" onClick={() => navigate("/houses")}> HOUSES </button>
<button type="button" onClick={() => navigate("/pickups")}> PICKUPS </button>
</>
)}

export default Home
