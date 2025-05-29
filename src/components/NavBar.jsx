import { NavLink } from "react-router-dom"

function NavBar() {

    return (
    <>
    <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/houses">Houses</NavLink>
        <NavLink to="/pickups">Pickups</NavLink>
        <NavLink to="/new"> New</NavLink>
        <NavLink to="/edit"> Edit</NavLink>
    </nav>
    </>
    )}

    export default NavBar

