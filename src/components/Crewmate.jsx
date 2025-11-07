import "./Crewmate.css"
import { Link } from "react-router-dom"

const Crewmate = (props) => {
    // remember to add link to edit the crewmate
    return (
        <div className="Crewmate">
            <Link to={'edit/' + props.id}>[edit]</Link>
            <h2 className="name">{props.name}</h2>
            <h3 className="speed">{props.speed}</h3>
            <p className="color">{props.color}</p>
        </div>
    )
}

export default Crewmate