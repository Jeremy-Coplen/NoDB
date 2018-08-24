import React from "react"
import "./DisplayPikachu.css"

function DisplayPikachu(props) {
    const moves = props.moves.map((move, i) => {
        return (
            <div key={i}>
                <h3>{move}</h3>
            </div>
        )
    })
    return (
        <div>
            <div>
                <h2>Pikachu: </h2>
                <img src={props.sprite} alt="Pikachu"/>
            </div>
            <div>
                <h2>Moves:</h2>
                {moves}
            </div>
        </div>
    )
}

export default DisplayPikachu