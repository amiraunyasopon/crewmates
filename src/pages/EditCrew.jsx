import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './EditCrew.css';
import { supabase } from '../client';

const EditCrew = () => {
    const { id } = useParams();
    const [crew, setCrew] = useState({ name: "", speed: 0, color: "" });
    const buttonData = ["red", "orange", "yellow", "green", "blue", "purple"];

    useEffect(() => {
        const fetchCrew = async () => {
            const { data } = await supabase
                .from("Crewmates")
                .select()
                .eq("id", id)
                .single();
            setCrew(data);
        };
        fetchCrew();
    }, [id]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setCrew((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const updateCrew = async (event) => {
        event.preventDefault();

        await supabase
            .from("Crewmates")
            .update({ name: crew.name, speed: crew.speed, color: crew.color })
            .eq("id", id);

        window.location = "/gallery";
    };

    const deleteCrew = async (event) => {
        event.preventDefault();

        await supabase
            .from("Crewmates")
            .delete()
            .eq("id", id);

        window.location = "/gallery";
    };

    return (
        <div className="edit-crew-form">
            <h1>Edit Crewmate</h1>
            <form>
                <h1>Name</h1>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={crew.name}
                    onChange={handleChange}
                    className="form-input"
                />

                <h1>Speed (mph)</h1>
                <input
                    type="number"
                    id="speed"
                    name="speed"
                    value={crew.speed}
                    onChange={handleChange}
                    className="form-input"
                />

                <h1>Color</h1>
                <div className="radio-group">
                    {buttonData.map((color) => (
                        <label
                            key={color}
                            className="radio-label"
                            style={{
                                backgroundColor: color,
                                color: color === "yellow" ? "#333" : "#fff", // Ensure text is readable on yellow
                                borderRadius: "5px",
                                padding: "5px 10px",
                                margin: "5px",
                                display: "flex",
                                alignItems: "center",
                                cursor: "pointer",
                            }}
                        >
                            <input
                                type="radio"
                                name="color"
                                value={color}
                                checked={crew.color === color}
                                onChange={handleChange}
                                className="radio-input"
                                style={{
                                    marginRight: "10px",
                                }}
                            />
                            {color.charAt(0).toUpperCase() + color.slice(1)} {/* Capitalize the color name */}
                        </label>
                    ))}
                </div>

                <div className="form-buttons">
                    <button type="submit" onClick={updateCrew} className="submit-button">
                        Update Crewmate
                    </button>
                    <button type="button" onClick={deleteCrew} className="delete-button">
                        Delete Crewmate
                    </button>
                </div>
            </form>
        </div>
    );
};

export default EditCrew;