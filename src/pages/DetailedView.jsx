import "./DetailedView.css"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { supabase } from "../client"
const DetailedView = () => {
    const { id } = useParams()
    const [crewmate, setCrewmate] = useState(null)

    useEffect(() => {
        const fetchCrewmate = async () => {
            const { data } = await supabase
                .from("Crewmates")
                .select()
                .eq("id", id)
                .single()
            setCrewmate(data)
        }
        fetchCrewmate()
    }, [id])

    return (
        <div>
            {crewmate ? (
                <>
                    <h1>{crewmate.name}</h1>
                    <p>A {crewmate.color} fellow that is able to run at {crewmate.speed} mph</p>
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    )
}

export default DetailedView