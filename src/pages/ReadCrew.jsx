import { useState, useEffect } from 'react'
import Crewmate from '../components/Crewmate'
import { supabase } from '../client'

const ReadCrew = () => {
    const [crew, setCrew] = useState([])

    useEffect(() => {
        const fetchCrewmates = async () => {
            const { data } = await supabase
                .from("Crewmates")
                .select()
                .order("created_at", { ascending: true })
            setCrew(data)
        }
        fetchCrewmates()
    }, [])

    return (
        <div className="readCrew">
            {/* maps all the posts in the 'posts' variable */}
            {
                crew && crew.length > 0 ?
                    [...crew]
                        .sort((a, b) => a.id - b.id)
                        .map((post, index) =>
                            <Crewmate
                                key={index}
                                id={post.id}
                                name={post.name}
                                speed={post.speed}
                                color={post.color}
                            />
                        ) : <h2>{"No Crewmates Yet"}</h2>
            }
        </div>
    )
}

export default ReadCrew