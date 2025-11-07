import { useState } from 'react'
import { useParams } from 'react-router-dom'
import './EditCrew.css'
import { supabase } from '../client'

const EditCrew = () => {
    const { id } = useParams()
    const [crew, setCrew] = useState({ id: null, name: "", speed: 0, color: "" })
    const buttonData = [
        "red", "orange", "yellow", "green", "blue", "purple"
    ]

    const handleChange = (event) => {
        const { name, value } = event.target
        setCrew((prev) => {
            return {
                ...prev,
                [name]: value,
            }
        })
    }

    const updateCrew = async (event) => {
        event.preventDefault()

        await supabase
            .from("Crewmates")
            .update({ name: crew.name, speed: crew.speed, color: crew.color })
            .eq("id", id)

        window.location = "/gallery"
    }

    const deleteCrew = async (event) => {
        event.preventDefault()

        await supabase
            .from("Crewmates")
            .delete()
            .eq("id", id)

        window.location = "/gallery"
    }
    return (
        <div>
            <form>
                <label htmlFor="name">Name</label> <br />
                <input type="text" id="name" name="name" onChange={handleChange} /><br />
                <br />

                <label htmlFor="speed">Speed</label><br />
                <input type="number" id="speed" name="speed" onChange={handleChange} /><br />
                <br />

                <label htmlFor="color">Color</label><br />
                {buttonData.map((color) => (
                    <label key={color}>
                        <input
                            type="radio"
                            name="color"
                            value={color}
                            checked={crew.color === color}
                            onChange={handleChange}
                        />
                        {color}
                    </label>
                ))}
                <br />
                {/* button calls createPost */}
                <input type="submit" value="Submit" onClick={updateCrew} />
                <button className="deleteButton" onClick={deleteCrew}>Delete</button>
            </form>
        </div>
    )
}

export default EditCrew