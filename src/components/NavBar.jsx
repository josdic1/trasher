import { NavLink } from "react-router-dom"

function NavBar() {

    return (
    <>
    <nav>
        <NavLink to="/todo"> 🚧 TO DO 🚧</NavLink>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/house-new">Add New </NavLink>
        <NavLink to="/houses">Houses</NavLink>
        <NavLink to="/pickups">Pickups</NavLink>
    </nav>
    </>
    )}

    export default NavBar

