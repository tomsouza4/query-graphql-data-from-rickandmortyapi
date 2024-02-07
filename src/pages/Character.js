import React from "react";
import "./Character.css";
import { useCharacter } from "../hooks/useCharacter";
import { useParams } from "react-router-dom";

export default function Character() {

    const { id } = useParams();
    
    const { error, data, loading } = useCharacter(id);

    console.log({ data, error, loading });

    if (error) return <div>something went wrong</div>

    if (loading) return <div>spinner...</div>

    return <div className="Character">
        <img src={data.character.image} width={750} height={750} />
        <div className="Character-content">
            <h1>{data.character.name}</h1>
            <p>{data.character.gender}</p>
            <div>Episodes: {data.character.episode.length}</div>
            <div className="Character-episode">
                {data.character.episode.map((episode) => {
                    return <div key={episode.id}>{episode.name} - <b>{episode.episode}</b></div>
                })}
            </div>
        </div>
    </div>;
}
