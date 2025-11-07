import { useState } from 'react'
import './CreateCrew.css'
import { supabase } from '../client'

const CreateCrew = () => {
    const [crew, setCrew] = useState({ name: "", speed: 0, color: "" })

    const handleChange = (event) => {
        const { name, value } = event.target
        setCrew((prev) => {
            return {
                ...prev,
                [name]: value,
            }
        })
    }

    const createCrew = async (event) => {
        // prevent page from automatically reloading
        event.preventDefault()

        // specifying Crewmates table, passingan object with a title, author, and description
        await supabase
            .from("Crewmates")
            .insert({ name: crew.name, speed: crew.speed, color: crew.color })
            .select()

        // redirect back to gallery URL
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
                <textarea rows="5" cols="50" id="color" name="color" onChange={handleChange}>
                </textarea>
                <br />
                {/* button calls createPost */}
                <input type="submit" value="Submit" onClick={createCrew} />
            </form>
        </div>
    )
}

export default CreateCrew