import React, { Component } from "react"
import "./DisplayAchievements.css"

class DisplayAchievements extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div>
                <h3>Name: {this.props.displayName}</h3>
                <h3>Description: {this.props.description}</h3>
                <button onClick={() => this.props.removeAchievementFn(this.props.id -1)}>Delete</button>
            </div>
        )
    }
}

export default DisplayAchievements