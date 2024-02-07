import React from "react";
import "./CharactersList.css";
import { useCharacters } from "../hooks/useCharacters";
import { Link, useParams } from "react-router-dom";

export default function CharactersList() {
    const { id } = useParams();
    
    const { error, data, loading } = useCharacters();

    console.log({ error, loading, data });

    if (loading) return <div>spinner...</div>

    if (error) return <div>something went wrong</div>
    
    return (
    <div className = "CharactersList">
        {data.characters.results.map((character) => {
            return (
            <Link to={`/${character.id}`}>
                <img src={character.image}/>
                <h2>{character.name}</h2>
            </Link>
        );
        })}
    </div>
    );
}