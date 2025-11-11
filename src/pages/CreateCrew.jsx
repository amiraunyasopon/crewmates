import { useState } from 'react';
import './CreateCrew.css';
import { supabase } from '../client';

const CreateCrew = () => {
    const [crew, setCrew] = useState({ name: "", speed: 0, color: "" });
    const buttonData = ["red", "orange", "yellow", "green", "blue", "purple"];

    const handleChange = (event) => {
        const { name, value } = event.target;
        setCrew((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const createCrew = async (event) => {
        event.preventDefault();

        await supabase
            .from("Crewmates")
            .insert({ name: crew.name, speed: crew.speed, color: crew.color })
            .select();

        window.location = "/gallery";
    };

    return (
        <div className="create-crew-form">
            <h1>Create a Crewmate</h1>
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

                <button type="submit" onClick={createCrew} className="submit-button">
                    Create Crewmate
                </button>
            </form>
        </div>
    );
};

export default CreateCrew;