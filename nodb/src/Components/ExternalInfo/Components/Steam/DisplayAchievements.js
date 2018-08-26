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
            <div className="achievement">
                <h3 className="achievement_name">Name: {this.props.displayName}</h3>
                <h3 className="achievement_description">Description: {this.props.description}</h3>
                <button className="btn" onClick={() => this.props.removeAchievementFn(this.props.id)}>Delete</button>
            </div>
        )
    }
}

export default DisplayAchievements