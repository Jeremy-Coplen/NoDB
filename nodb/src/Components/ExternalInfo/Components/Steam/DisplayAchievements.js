import React from "react"
import "./DisplayAchievements.css"

function DisplayAchievements(props) {
    return (
        <div>
            <h3>Name: {props.displayName}</h3>
            <h3>Description: {props.description}</h3>
        </div>
    )
}

export default DisplayAchievements