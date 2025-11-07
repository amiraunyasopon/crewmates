import "./NavBar.css"
import { Link } from 'react-router-dom'

const NavBar = ({ }) => {
    return (
        <>
            <div className="nav-bar">
                <Link to="/"><button className="headerBtn"> Home </button></Link>
                <Link to="/new"><button className="headerBtn"> Create a Crewmate! </button></Link>
                <Link to="/gallery"><button className="headerBtn"> Crewmate Gallery </button></Link>
            </div>
        </>
    )
}

export default NavBar